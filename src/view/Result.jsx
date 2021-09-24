import React from 'react';
import { useEffect, useState } from 'react';
import { isNil } from 'utils/commonUtil';
import { RESULT_VIEWTYPE } from 'constant/stringEnum'

const Result = () => {
  const [view, setView] = useState(RESULT_VIEWTYPE.PROGRESSIVE_BAR);
  return <>{view === 1 && <p>안녕하세요 result이다</p>}</>;
};

export default Result;
