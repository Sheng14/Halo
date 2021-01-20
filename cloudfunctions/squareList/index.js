// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const TcbRouter = require('tcb-router')//引入tcb包
const db=cloud.database()//初始化云数据库
const squareCollection = db.collection('squareList')//拿到我们的square集合
const MAX_LIMIT = 100//定义每次查询的最大数量为100

// 云函数入口函数
exports.main = async (event, context) => {
  const app=new TcbRouter({
    event
  })

  app.router('list',async(ctx,next)=>{//拿到广场列表信息（按关键字无则全部）
    const keyWord=event.keyWord//先拿到调用时传来的关键字
    let w={}//定义一个空对象，都会where将以之为条件
    if(keyWord.trim()!=''){//判断关键字去掉空格还不是空的情况下执行
      w={
        content:new db.RegExp({//可以new也可以去掉
          regexp:keyWord,//这个就是关键字了，至于为什么不直接一个正则表达式？那是因为这里面写不会当成变量，只会被看成字符串
          options:'i'//指定忽略大小写
        })
      }
    }
      let squareList=await squareCollection.where(w).skip(event.start).limit(event.count).orderBy('createTime','desc').get()
      .then((res)=>{
        return res.data
      })
      ctx.body=squareList//传给小程序
    })
  
  app.router('detail', async(ctx, next) => { // 获取对应的广场详情和评论
    detailList = await db.collection('squareList').where({
      _id: event.blogId
    })
    .skip(event.start)
    .limit(event.count)
    .orderBy('createTime', 'desc')
    .get()
    .then((res) => {
      return res.data
    })
    commentList = await db.collection('squareList-comment').where({
      squareId: event.blogId
    })
    .skip(event.start)
    .limit(event.count)
    .orderBy('createTime', 'desc')
    .get()
    .then((res) => {
      return res.data
    })
    ctx.body = {
      detailList,
      commentList
    }
  })
  
  const wxContext = cloud.getWXContext()
  app.router('getListByOpenid',async(ctx,next)=>{ // 按照openid给出对应的广场列表
    ctx.body=await squareCollection.where({
      _openid:wxContext.OPENID//通过集合里面的字段与我们用户的openid匹配为条件
    }).skip(event.start).limit(event.count).orderBy('createTime','desc').get()
    .then((res)=>{
      return res.data
    })
  })

  app.router('getCommentByOpenid', async(ctx, next) => { // 按照openid给出对应的评论列表
    ctx.body = await db.collection('squareList-comment').where({
      _openid:wxContext.OPENID
    }).skip(event.start).limit(event.count).orderBy('createTime', 'desc').get()
    .then((res) => {
      return res.data
    })
  })

  return app.serve()
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}