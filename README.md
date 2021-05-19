# 카카오 로컬 검색 api 사용하기 위한 함수들

은근 자꾸 쓰는 일이 생겨서 개인용으로 사용하려고 만든 패키지입니다.

<br/>

## 사용법

### 카카오 개발자 REST API 키가 필요합니다.

https://developers.kakao.com/

가입 후 앱 생성하여 REST API 키를 받으면, 프로젝트 폴더에 .env 파일을 만들고

```
KAKAO_REST_KEY=[--------------------------------]
```

형식으로 입력해줘야 작동합니다. (대괄호는 실제로 입력할 필요 없음)

**(TODO)**
브라우저 환경에서 사용하려면 웹팩 설정을 통해 넣어줘야 한다고 하는데, 좀 더 쉽게 사용할 수 있는 방법이 있는지 찾아봐야 할 것 같음.

<br/>

---

### kakaoAddrDirect

```javascript
import { kakaoAddrDirect } from 'kakao-local-search'

kakaoAddrDirect('중화동').then(console.log)

// [
//   {
//     address: {
//       address_name: '서울 중랑구 중화동',
//       b_code: '1126010300',
//       h_code: '',
//       main_address_no: '',
//       mountain_yn: 'N',
//       region_1depth_name: '서울',
//       region_2depth_name: '중랑구',
//       region_3depth_h_name: '',
//       region_3depth_name: '중화동',
//       sub_address_no: '',
//       x: '127.077320262185',
//       y: '37.5994618167452'
//     },
//     address_name: '서울 중랑구 중화동',
//     address_type: 'REGION',
//     road_address: null,
//     x: '127.077320262185',
//     y: '37.5994618167452'
//   },
//   ...
// ]
```

<br/>

---

### kakaoPlaceDirect

```javascript
import { kakaoPlaceDirect } from 'kakao-local-search'

kakaoPlaceDirect('대한곱창').then(console.log)

// [
//   {
//     address_name: '경북 구미시 선산읍 완전리 195-2',
//     category_group_code: 'FD6',
//     category_group_name: '음식점',
//     category_name: '음식점 > 한식 > 육류,고기 > 곱창,막창',
//     distance: '',
//     id: '26991998',
//     phone: '054-482-0193',
//     place_name: '대한곱창',
//     place_url: 'http://place.map.kakao.com/26991998',
//     road_address_name: '경북 구미시 선산읍 남문로5길 13',
//     x: '128.30016334026996',
//     y: '36.241573803600716'
//   },
//   {
//     address_name: '서울 광진구 능동 221-2',
//     category_group_code: 'FD6',
//     category_group_name: '음식점',
//     category_name: '음식점 > 한식 > 육류,고기 > 곱창,막창',
//     distance: '',
//     id: '27229388',
//     phone: '02-456-5207',
//     place_name: '군자대한곱창 본점',
//     place_url: 'http://place.map.kakao.com/27229388',
//     road_address_name: '서울 광진구 능동로36길 10',
//     x: '127.07968386445',
//     y: '37.5561728890469'
//   },
//   ...
// ]
```

<br/>

---

### kakaoAddrAsyncContextByKey

<br/>

---

### kakaoPlaceAsyncContextByKey

<br/>

---

## 참고

1. 주소검색 - https://developers.kakao.com/docs/latest/ko/local/dev-guide#address-coord
2. 키워드로 장소검색 - https://developers.kakao.com/docs/latest/ko/local/dev-guide#search-by-keyword
