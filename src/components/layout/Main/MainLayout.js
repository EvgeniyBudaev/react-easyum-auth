import React from 'react';

import { Header } from '../Header';

export const MainLayout = (props) => {

  return (
    <div>
      <Header { ...props } />
      { props.children }
    </div>
  )
};