const genAUTH = (KAKAO_REST_KEY = '--------------------------------') => {
  // console.log(process.env.KAKAO_REST_KEY)
  if (process.env.KAKAO_REST_KEY) {
    KAKAO_REST_KEY = process.env.KAKAO_REST_KEY
  }
  return {
    headers: {
      Authorization: `KakaoAK ${KAKAO_REST_KEY}`, // your kakao api key
    },
  }
}

module.exports = {
  genAUTH,
}
