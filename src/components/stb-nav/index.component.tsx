import React from 'react';
import { Link } from 'react-router-dom';
import * as s from './index.styled';
import * as i from './index.interface';

const StbNav: React.FC<i.Nav> = (props) => {
  return (
    <s.Nav className="flex">
      {
        props.menus.map((menu, index) => (
          <s.Item key={index}>
            <Link to={menu.href}>
              {menu.label}
            </Link>
          </s.Item>
        ))
      }
    </s.Nav>
  );
}

export default StbNav;