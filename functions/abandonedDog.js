/**
 * netlify serverless function - nodeJS 기반
 */
const axios = require('axios');
const { convertTwoDigitDate } = require('./src/utils/dateUtil');

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

// netlify serverless 함수
exports.hander = async function (event, context) {
  try {
    // let url = `${BASE_URL}/${OPERS.ABANDONMENT_PUBLIC}`;
    let url = `/openapi/service/rest/abandonmentPublicSrvc/${OPERS.ABANDONMENT_PUBLIC}?serviceKey=${KEY_ENCODING}`;

    let params = {
      bgnde: BGNDE,
      endde: ENDDE,
      upkind: UPKIND,
      pageNo: PAGE_NO,
      numOfRows: NUM_OF_ROWS,
    };
    // if (kindCd) {
    //   params.kindCd = kindCd;
    // }
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params,
        })
        .then(res => {
          if (res.data.Error) {
            reject(res.data.Error);
          }
          console.log({ res });
          resolve(res.data.response.body.items.item);
        })
        .catch(error => {
          reject(error.message);
        });
    });
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: error.message,
    };
  }
};
