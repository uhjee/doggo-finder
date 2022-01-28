import React, { useState, useEffect } from 'react';
import AbandonedDog from './abandonedDog';

import '../../scss/abandonedDogList.scss';

import { getAbandonedDogList } from 'api/abandonedDog';

const AbandonedDogList = ({ kindCd }) => {
  console.log({ kindCd });

  const [dogList, setDogList] = useState([]);

  useEffect(() => {
    const res = (async () => await getAbandonedDogList(kindCd))();
    return () => {
      setDogList([]);
    };
  }, [kindCd]);
  const dummy = [
    {
      kindCd: '[개] 믹스견',
      careNm: '최종주동물병원',
      orgNm: '충청북도 영동군',
      age: '2020(년생)',
      sexCd: 'M',
      popfile:
        'http://www.animal.go.kr/files/shelter/2021/12/20220104150155.jpg',
    },
    {
      kindCd: '[개] 믹스견',
      careNm: '최종주동물병원',
      orgNm: '충청북도 영동군',
      age: '2020(년생)',
      sexCd: 'M',
      popfile:
        'http://www.animal.go.kr/files/shelter/2021/12/20220104150155.jpg',
    },
    {
      kindCd: '[개] 믹스견',
      careNm: '최종주동물병원',
      orgNm: '충청북도 영동군',
      age: '2020(년생)',
      sexCd: 'M',
      popfile:
        'http://www.animal.go.kr/files/shelter/2021/12/20220104150155.jpg',
    },
  ];
  return (
    <div className="abandoned-list-box">
      {dummy &&
        dummy.map(dog => (
          <AbandonedDog
            kindCd={dog.kindCd}
            careNm={dog.careNm}
            age={dog.age}
            orgNm={dog.orgNm}
            sexCd={dog.sexCd}
            popfile={dog.popfile}
          />
        ))}
    </div>
  );
};

export default AbandonedDogList;
