import React from 'react';
import { Link } from 'react-router-dom';
import * as s from './index.styled';

const StbNavbarBrand: React.FC<{ logo: string, title: string }> = (props) => {
  return (
    <Link to={'/browse'}>
      <s.NavbarBrand className="flex flex-row items-center justify-center">
        <s.BrandLogo
          width={50}
          src={props.logo}
          alt={props.title}
          className="mr-2"
        />
        <s.BrandTitle>
          {props.title}
        </s.BrandTitle>
      </s.NavbarBrand>
    </Link>
  );
}

export default StbNavbarBrand;