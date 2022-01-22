import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'components/Button';

import 'scss/notFound.scss';

const NotFound = () => {
  const history = useHistory();
  const goHome = () => history.push('/');

  return (
    <div className="notfound-container">
      <img
        className="image-404"
        src="/img/404_image.png"
        alt="404_notfound_image"
      />
      <h2 className="title">404</h2>
      <p className="sub-title">Page Not Found</p>
      <Button className="home-btn" text="HOME" handler={goHome} />
    </div>
  );
};

export default NotFound;
