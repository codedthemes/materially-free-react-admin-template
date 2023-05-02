import React from 'react';
import { Outlet } from 'react-router-dom';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default MinimalLayout;
