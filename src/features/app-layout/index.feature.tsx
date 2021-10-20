import React from 'react';
import AppHeader from '../app-header/index.feature';
import * as s from './index.styled';

const AppLayout: React.FC<{ isHeaderTransparent?: false }> = (props) => {
  let isHeaderTransparent: boolean
  if (typeof props.isHeaderTransparent === 'undefined') {
    isHeaderTransparent = true
  } else {
    isHeaderTransparent = props.isHeaderTransparent
  }

  return (
    <s.AppLayout>
      <AppHeader isHeaderTransparent={isHeaderTransparent} />
      {props.children}
    </s.AppLayout>
  );
}

export default AppLayout;