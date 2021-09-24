/**
 * null, undefined 일 경우 true를 반환한다.
 * @author uhjee
 * @returns {Boolean}
 */
export const isNil = obj => {
  if (obj === null) return true;
  if (obj === undefined) return true;
  return false;
};

/**
 * primitive type, null, 빈 배열, 빈 객체일 경우 true를 반환한다.
 * @author uhjee
 * @returns {Boolean}
 */
export const isEmpty = obj => {
  if (obj === null || typeof obj !== 'object') return true;
  else {
    if (Array.isArray(obj) && obj.length === 0) return true;
    else if (Object.keys(obj).length === 0) return true;
  }

  return false;
};
