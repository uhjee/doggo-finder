import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { isNil } from 'utils/commonUtil';

const AbandonedDog = ({
  kindCd,
  age,
  sexCd,
  orgNm,
  careNm,
  popfile,
  officetel,
}) => {
  return (
    <div className="abandoned-item-box">
      {!isNil(popfile) ? (
        <img
          className="abandoned-item__img"
          src={popfile}
          alt={kindCd + orgNm}
        />
      ) : (
        <div className="abandoned-item__empty-img" />
      )}
      <div className="abandoned-item__desc">
        <div className="row">
          <span>{kindCd}</span>
          <span>{age}</span>
          <span>{sexCd}</span>
        </div>
        <div className="row care-info">
          <span>{orgNm}</span>
          <span>{careNm}</span>
        </div>
        <div className="row care-info">
          <FontAwesomeIcon icon={faPhone} className="mr-4" />
          {officetel}
        </div>
      </div>
    </div>
  );
};

export default AbandonedDog;
