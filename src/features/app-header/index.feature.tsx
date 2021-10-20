import React, { useState } from 'react';
import * as s from './index.styled';
import tvLogo from '../../assets/images/tv-logo.png';
import StbNavbarBrand from '../../components/stb-navbar-brand/index.component';
import StbNav from '../../components/stb-nav/index.component';
import StbInputSearch from '../../components/stb-input-search/index.component';
import { useLocation } from 'react-router';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const AppHeader: React.FC<{ isHeaderTransparent: boolean }> = (props) => {
  const query = useQuery();
  const q = query.get('q') || '';
  const [keyword, setKeyword] = useState<string>(q);

  return (
    <s.AppHeader isHeaderTransparent={props.isHeaderTransparent} className="absolute top-0 left-0 right-0 py-3">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-4/12 flex justify-start">
            <StbNavbarBrand
              logo={tvLogo}
              title={'MovieStock'}
            />
          </div>
          <div className="w-4/12">
            <StbInputSearch
              value={keyword}
              placeholder={'What do you want to watch?'}
              handleChange={(e: any) => setKeyword(e.target.value)}
            />
          </div>
          <div className="w-4/12 flex justify-end">
            <StbNav
              menus={[
                {
                  label: 'Sign in',
                  href: '/accounts/sign-in'
                }
              ]}
            />
          </div>
        </div>
      </div>
    </s.AppHeader>
  );
}

export default AppHeader;