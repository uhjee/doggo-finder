import React from 'react';
import { useEffect, useState } from 'react';

import { isNil } from 'utils/commonUtil';
import { RESULT_VIEWTYPE } from 'constant/stringEnum';

import Progressive from 'view/result/progressive';
import Confirm from 'view/result/confirm';
import Description from 'view/result/description';

const Result = ({ type }) => {
  const [view, setView] = useState(RESULT_VIEWTYPE.PROGRESSIVE_BAR);
  return (
    <>
      <div
        className={`result-container${
          view === RESULT_VIEWTYPE.DESCRIPTION ? ' blue' : ''
        }`}
      >
        {!isNil(view) && view === 0 && <Progressive setView={setView} />}
        {!isNil(view) && view === 1 && <Confirm setView={setView} />}
        {!isNil(view) && view === 2 && <Description type={type} />}
      </div>
    </>
  );
};

export default Result;
