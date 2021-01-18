// 云函数入口文件
const cloud = require('wx-server-sdk')
const rq = require('request-promise')
const TcbRouter = require('tcb-router')
cloud.init()
const db = cloud.database() // 初始化云数据库

// 云函数入口函数
exports.main = async (event, context) => {
  const app = new TcbRouter({
    event
  })
  app.router('getSubjectList', async(ctx, next) => {
    let categoryType = event.categoryType
    ctx.body = await cloud.database().collection('subjectList')
      .where({
        categoryType
      })
      .get()
      .then((res) => {
        console.log(res)
        return res
      })
  })
  return app.serve()

 /* return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }*/
}