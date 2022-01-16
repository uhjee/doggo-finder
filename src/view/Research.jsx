import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import Answer from 'components/Answer';
import Progress from 'components/Progress';

import '../scss/research.scss';

import { CONTENTS } from 'constant/question.js';
import { APP_STATE } from 'constant/stringEnum.js';

export default function Research({ setState, setType, history }) {
  const [page, setPage] = useState(0);
  const [question, setQuestion] = useState({});

  // router - match.params 에 접근이 가능한 hook
  const { pageNum } = useParams();

  /**
   * match.params로 전달받은 pageNum이 변경되면, 현 컴포넌트의 page, question을 세팅한다.
   * @author  uhjee
   */
  useEffect(() => {
    if (pageNum) {
      const _pageNum = parseInt(pageNum, 10);
      setPage(_pageNum);
      const _question = CONTENTS.find(item => item.page === _pageNum);
      setQuestion({ ..._question });
    }
    return () => {
      setPage(0);
    };
  }, [pageNum]);

  const [point, setPoint] = useState({
    I: 0,
    E: 0,
    N: 0,
    S: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
  });
  const [rate, setRate] = useState(0);
  const [prev, setPrev] = useState(0);

  /**
   * addPoint 호출 후 page를 바꾼다
   * @author ohmjeemin
   * @param type [String] type
   */
  const selectAnswer = useCallback(type => {
    addPoint(type);
    updateRate();
    if (page === CONTENTS.length - 1) {
      setState(APP_STATE.RESULT);
      getType();
      history.push('/result');
    } else {
      history.push(`/research/${page + 1}`);
    }
  });

  /**
   * 선택한 응답에 대한 타입에 점수를 더한다
   * @author ohmjeemin
   * @param type [String] type
   */
  const addPoint = useCallback(type => {
    point[type] += 5;
    setPoint(point);
  });

  /**
   * 점수를 통해 type을 얻는다
   * @author ohmjeemin
   */
  const getType = useCallback(() => {
    const pointValueList = Object.values(point);
    const selectedTypeIndexList = [];
    let arr = [];
    let temp = 0;
    let resultType = '';

    pointValueList.forEach((point, idx) => {
      arr.push({
        p: point,
        idx: idx,
      });
      temp++;
      if (temp === 2) {
        selectedTypeIndexList.push(
          arr[0].p > arr[1].p ? arr[0].idx : arr[1].idx,
        );
        arr = [];
        temp = 0;
      }
    });

    const pointKeyList = Object.keys(point);
    selectedTypeIndexList.forEach(li => {
      resultType += pointKeyList[li];
    });

    setType(resultType);
  });

  /**
   * 진행률을 수정한다.
   * @author ohmjeemin
   */
  const updateRate = useCallback(() => {
    const rate = ((page + 1) / CONTENTS.length) * 100;
    setRate(rate);
    const temp = prev + 1;
    setPrev(temp);
    // console.log(page, '===', CONTENTS.length);
    // console.log('rate===', rate);
  });

  return (
    <div className={'research'}>
      <Progress rate={rate} prev={prev} />
      <div style={{ height: '400px' }}>
        <p
          dangerouslySetInnerHTML={{ __html: question.title }}
          className={'question'}
        />
        <div>
          {question?.answerList &&
            question.answerList.map(answer => (
              <Answer
                key={answer.id}
                text={answer.title}
                handler={() => selectAnswer(answer.value)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
