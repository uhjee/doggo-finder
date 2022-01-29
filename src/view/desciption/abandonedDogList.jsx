import React, { useState, useEffect } from 'react';
import AbandonedDog from './abandonedDog';
import { isNil, isEmpty } from 'utils/commonUtil';

import '../../scss/abandonedDogList.scss';

import { getAbandonedDogList } from 'api/abandonedDog';

const AbandonedDogList = ({ kindCd }) => {
  const [dogList, setDogList] = useState([]);

  /**
   * api 를 호출해 dogList 를 세팅한다.
   * @author  uhjee
   */
  useEffect(() => {
    if (!kindCd) return;

    let _kindCd = kindCd;
    if (kindCd === 'ALL') _kindCd = null;
    const fetchGetAbandonDogList = async () => {
      const res = await getAbandonedDogList(_kindCd);
      if (res.ok && res.status === 200) {
        const { response: data } = await res.json();
        const { item } = data?.body?.items;
        if (isNil(item) || isEmpty(item)) setDogList([]);
        const _dogList = item.map(item => ({
          ...item,
          age: item.age.replaceAll('(', '').replaceAll(')', ''), // REGEX로 변경 필요
          kindCd: item.kindCd.substring(4),
          sexCd: item.sexCd === 'F' ? '여아' : '남아',
        }));
        setDogList(_dogList);
      }
    };

    fetchGetAbandonDogList();
    return () => {
      setDogList([]);
    };
  }, [kindCd]);
  return (
    <>
      {!isEmpty(dogList) && (
        <div className="abandoned-list-box">
          {dogList.map(dog => (
            <AbandonedDog
              key={dog.desertionNo}
              kindCd={dog.kindCd}
              careNm={dog.careNm}
              age={dog.age}
              orgNm={dog.orgNm}
              sexCd={dog.sexCd}
              popfile={dog.popfile}
              officetel={dog.officetel}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default AbandonedDogList;
