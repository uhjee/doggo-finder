import React from 'react';
import { useState } from 'react';

import { isNil } from 'utils/commonUtil';
import { RESULT_VIEWTYPE } from 'constant/stringEnum';

import Progressive from 'view/result/Progressive';
import Confirm from 'view/result/Confirm';

const Result = ({ setState, history }) => {
  const [view, setView] = useState(RESULT_VIEWTYPE.PROGRESSIVE_BAR);
  return (
    <>
      <div
        className={`result-container${
          view === RESULT_VIEWTYPE.DESCRIPTION ? ' olive' : ''
        }`}
      >
        {!isNil(view) && view === 0 && <Progressive setView={setView} />}
        {!isNil(view) && view === 1 && (
          <Confirm setState={setState} history={history} />
        )}
      </div>
    </>
  );
};

export default Result;
