// @flow
import * as React from 'react';
import './style.css';
import Header from './Header';

const Site = (props) => {
  return (
    <div className="site">
      {props.children}
    </div>
  );
};

Site.Header = Header;
export default Site;
