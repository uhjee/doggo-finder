import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * url로 직접 네비게이션 되지 않도록 isActive 여부에 따라 렌더링 여부를 판단해 Route 컴포넌트를 반환하는 컴포넌트
 * @author  uhjee
 * @param {*} param0
 * @returns
 */
const GuardRoute = ({ component: Component, isActive, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isActive ? <Component {...props} {...rest} /> : <Redirect to="/" />
    }
  />
);

export default GuardRoute;
