// 云函数入口文件
const cloud = require('wx-server-sdk')
const rq = require('request-promise')
const TcbRouter = require('tcb-router')
cloud.init()
const db = cloud.database() // 初始化云数据库
let day = 10 // 请求的日期
let senteceList = [] // 金句列表
const URL = 'http://sentence.iciba.com/index.php?c=dailysentence&m=getdetail&title=2020-05-' // 每日一句接口

// 云函数入口函数
exports.main = async (event, context) => {
  const app = new TcbRouter({
    event
  })
  app.router('getSentenceList', async(ctx, next) => { // 获取金句
    ctx.body = await cloud.database().collection('senteceList')
      .skip(event.start)
      .limit(event.count)
      .get()
      .then((res) => {
        console.log(res)
        return res
      })
  })
  app.router('sentenceList', async(ctx, next) => {
    for (let i = 0; i < 18; i ++) { // 循环调用接口获取18个金句（可考虑动态传入具体数字或者直接实时更新）
      day++;
      requestUrl = URL + day // 更改金句日期获取不一样的金句
     await rq(requestUrl).then((res) => {
       senteceList.push(JSON.parse(res).content)
     })
   }
   const sentenceLength = senteceList.length
   for (let i = 0; i < sentenceLength; i++) { // 将获取到的金句存入数据库
     await db.collection('senteceList').add ({ // 找到sentenceList表，插入数据
       data: { // 定义插入的字段（默认有一个_id字段）
         sentece: senteceList[i],
         createTime: db.serverDate()
       }
     })
     .then((res) => {
       console.log('success')
     })
     .catch((error) => {
       console.log('lost')
     })
   }
   ctx.body = senteceList
  })
  app.router('test1', async(ctx, next) => {
    ctx.body= await cloud.database().collection('senteceList')//return换成ctx.body返回数据给小程序
      .skip(event.start)
      .limit(event.count)
      .orderBy('createTime', 'desc')
      .get()
      .then((res) => {
        return res
      })
  })
  app.router('test2', async(ctx, next) => {
    ctx.body = 'test2'
  })
  return app.serve()
 /* return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }*/
}