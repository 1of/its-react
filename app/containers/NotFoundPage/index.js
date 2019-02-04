import React from 'react';
import { NavLink } from 'react-router-dom';
import './animate404.scss';

const NotFoundPage = () => (
  <div className="container-404">
    <div>
      <h1 className="animated-bg">Page not found</h1>
      <p className="text-404">Sorry the page you requested not found</p>
      <NavLink to="/main" className="link-home">
        Navigate to Home Page
      </NavLink>
    </div>
  </div>
);

export default NotFoundPage;
