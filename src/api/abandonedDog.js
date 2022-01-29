import { convertTwoDigitDate } from 'utils/dateUtil';

const BASE_URL =
  'http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc';

// url 명령
const OPERS = {
  KIND: 'kind', // 품종 조회
  ABANDONMENT_PUBLIC: 'abandonmentPublic', // 유기 동물 조회
};
// 키
const KEY_ENCODING = process.env.REACT_APP_OPEN_API_KEY;

/** ----------------------------------PARAM DATA------------------------------------ */
// 축종코드
const UPKIND = '417000'; // 개

// 페이지 번호
const PAGE_NO = 1;

// 페이지 당 보여줄 데이터 개수
const NUM_OF_ROWS = '3';

// 유기 날짜 시작일
const BGNDE = '20170101'; // 2017년도부터 고정

// 유기 날짜 종료일
const today = new Date();
const year = today.getFullYear();
const month = convertTwoDigitDate(today.getMonth() + 1);
const date = convertTwoDigitDate(today.getDate());

const ENDDE = `${year}${month}${date}`;

// const headers = new Headers({
//   'Content-Type': ''
// });

const option = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
};
const PROXY_SERVER = 'https://cors-anywhere.herokuapp.com/';

export const getAbandonedDogList = kindCd => {
  let url = `${PROXY_SERVER}${BASE_URL}/${OPERS.ABANDONMENT_PUBLIC}?bgnde=${BGNDE}&endde=${ENDDE}&upkind=${UPKIND}&pageNo=${PAGE_NO}&numOfRows=${NUM_OF_ROWS}&serviceKey=${KEY_ENCODING}`;
  if (kindCd) {
    url += `&kind=${kindCd}`;
  }
  return fetch(url, option);
};
