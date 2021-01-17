function getSentenceList () {
  let start1 = Math.random()*17
  let start2 = Math.floor(start1)
  wx.cloud.callFunction({
    name: 'dailysentence',
    data: {
      start: start2,
      count: 1,
      $url: 'getSentenceList'
    }
  })
  .then((res) => {
    console.log(res)
    return res
  })
  .catch((error) => {
    console.log(error)
  })
}

function tcbTest() {
  wx.cloud.callFunction({
    name: 'dailysentence',
    data: {
      $url: 'test1'
    }
  }).then((res) => {
    console.log(res)
    console.log(res.result)
    return res.result
  })
}

module.exports = {
  getSentenceList,
  tcbTest
}