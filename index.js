const axios = require('axios')
const { AUTH } = require('./AUTH')

const genKakaoLocalSearchApiAddress = requestType => {
  return `https://dapi.kakao.com/v2/local/search/${requestType}.json`
}

const doKakaoLocalSearch = async (searchRaw, requestType) => {
  const search = encodeURI(searchRaw)
  const res = await axios.get(
    `${genKakaoLocalSearchApiAddress(requestType)}?query=${search}`,
    AUTH,
  )
  return res.data.documents
}

const kakaoAddrAsyncContextByKey =
  (queryKeyName = 'search') =>
  async ctx => {
    searchText = ctx.query[queryKeyName]
    requestType = 'address'
    ctx.body = await doKakaoLocalSearch(searchText, requestType)
    // console.log(ctx)
  }

const kakaoAddrDirect = async searchText =>
  await doKakaoLocalSearch(searchText, 'address')

const kakaoPlaceAsyncContextByKey =
  (queryKeyName = 'search') =>
  async ctx => {
    searchText = ctx.query[queryKeyName]
    requestType = 'keyword'
    ctx.body = await doKakaoLocalSearch(searchText, requestType)
    // console.log(ctx)
  }

const kakaoPlaceDirect = async searchText =>
  await doKakaoLocalSearch(searchText, 'keyword')

// kakaoAddrDirect('중화동').then(console.log)
// kakaoPlaceDirect('중화동').then(console.log)
// kakaoAddrAsyncContextByKey()({ query: { search: '중화동' } }).then(console.log)
// kakaoPlaceAsyncContextByKey()({ query: { search: '중화동' } }).then(console.log)

module.exports = {
  kakaoAddrAsyncContextByKey,
  kakaoAddrDirect,
  kakaoPlaceAsyncContextByKey,
  kakaoPlaceDirect,
}
