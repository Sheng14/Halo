module.exports = (date) => {//需要从外面接收一个date类型，同时把整个模块暴露出去
  let fmt = 'yyyy-MM-dd hh:mm:ss'//定义一个我们想要的标杆
  const o = {//依次取得各种时间，+代表一个或多个！
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分钟
    's+': date.getSeconds(), // 秒
  }

  if (/(y+)/.test(fmt)) {//因为年有四个数字，所以独立处理，这里的意思是如果fmt中有匹配多个y的，可以执行
    fmt = fmt.replace(RegExp.$1, date.getFullYear())//将拿到的年赋值给与正则表达式匹配的第一个字符串
  }
  for (let k in o) {//因为接下来的时间都是两个数字，所以我们循环就可以了
    if (new RegExp('(' + k + ')').test(fmt)) {//每次我们都重新建一个正则表达式对象，流程跟年一样
      fmt = fmt.replace(RegExp.$1, o[k].toString().length == 1 ? '0' + o[k] : o[k])
    }//这里原本直接赋值即可但是考虑到补0，多了个三元表达式
  }
  // console.log(fmt)
  return fmt//最后记得返回
}