import React from 'react';
import { useEffect, useState } from 'react';

import { isNil } from 'utils/commonUtil';
import { RESULT_VIEWTYPE } from 'constant/stringEnum';

import Progressive from 'view/result/progressive';
import Description from 'view/result/description';

const Result = () => {
  const [view, setView] = useState(RESULT_VIEWTYPE.PROGRESSIVE_BAR);
  return (
    <>
      <div className="result-container">
        {!isNil(view) && view === 0 && <Progressive setView={setView} />}
        {!isNil(view) && view === 1 && <p>안녕하세요 result1이다!</p>}
        {!isNil(view) && view === 2 && <Description />}
      </div>
    </>
  );
};

export default Result;
