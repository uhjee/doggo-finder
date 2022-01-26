import React from 'react';

const AbandonedDog = ({ kindCd, age, sexCd, orgNm, careNm, popfile }) => {
  return (
    <div className="abandoned-item-box">
      <img className="abandoned-item__img" src={popfile} alt={kindCd + orgNm} />
      <div className="abandoned-item__desc">
        <div className='row'>
          <span>{kindCd}</span>
          <span>{age}</span>
          <span>{sexCd}</span>
        </div>
        <div className='row care-info'>
          <span>{orgNm}</span>
          <span>{careNm}</span>
        </div>
      </div>
    </div>
  );
};

export default AbandonedDog;
