const genAUTH = (KAKAO_REST_KEY = '--------------------------------') => {
  const envKey =
    process.env.KAKAO_REST_KEY || // node
    process.env.REACT_APP_KAKAO_REST_KEY // Create_React_App browser
  if (envKey) {
    KAKAO_REST_KEY = envKey
  }
  return {
    headers: {
      Authorization: `KakaoAK ${KAKAO_REST_KEY}`,
    },
  }
}

module.exports = {
  genAUTH,
}
