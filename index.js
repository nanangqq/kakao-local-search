const dot = require('dotenv')
dot.config()
const axios = require('axios')
const { genAUTH } = require('./AUTH_templet')

const genKakaoLocalSearchApiAddress = (requestType) => {
  return `https://dapi.kakao.com/v2/local/search/${requestType}.json`
}

const genKakaoLocalGeoApiAddress = (requestType) => {
  return `https://dapi.kakao.com/v2/local/geo/${requestType}.json`
}

const doKakaoLocalSearch = async (searchRaw, requestType) => {
  const AUTH = genAUTH()
  const search = encodeURI(searchRaw)
  const res = await axios.get(
    `${genKakaoLocalSearchApiAddress(requestType)}?query=${search}`,
    AUTH
  )
  return res.data.documents
}

const kakaoAddrAsyncContextByKey =
  (queryKeyName = 'search') =>
  async (ctx) => {
    const searchText = ctx.query[queryKeyName]
    const requestType = 'address'
    ctx.body = await doKakaoLocalSearch(searchText, requestType)
  }

const kakaoAddrDirect = async (searchText) =>
  await doKakaoLocalSearch(searchText, 'address')

const kakaoPlaceAsyncContextByKey =
  (queryKeyName = 'search') =>
  async (ctx) => {
    const searchText = ctx.query[queryKeyName]
    const requestType = 'keyword'
    ctx.body = await doKakaoLocalSearch(searchText, requestType)
  }

const kakaoPlaceDirect = async (searchText) =>
  await doKakaoLocalSearch(searchText, 'keyword')

// kakaoAddrDirect('중화동').then(console.log)
// kakaoPlaceDirect('중화동').then(console.log)
// kakaoAddrAsyncContextByKey()({ query: { search: '중화동' } }).then(console.log)
// kakaoPlaceAsyncContextByKey()({ query: { search: '중화동' } }).then(console.log)

const doKakaoLocalSearchCoords = async (
  x,
  y,
  requestType = 'coord2address'
) => {
  const AUTH = genAUTH()
  const res = await axios.get(
    `${genKakaoLocalGeoApiAddress(requestType)}?x=${x}&y=${y}`,
    AUTH
  )
  return res.data.documents
}

const kakaoCoordsDirect = async (x, y) => doKakaoLocalSearchCoords(x, y)

module.exports = {
  kakaoAddrAsyncContextByKey,
  kakaoAddrDirect,
  kakaoPlaceAsyncContextByKey,
  kakaoPlaceDirect,
  kakaoCoordsDirect,
}
