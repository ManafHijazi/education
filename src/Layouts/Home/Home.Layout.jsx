import React from 'react';
import { SwitchRouteComponent } from '../../Components';
import { HomeRoutes } from '../../Routes';
import {FooterComponent, HeaderComponent} from './Sections';
import './Home.Style.scss';

const HomeLayout = () => {
  return (
    <>
      <HeaderComponent />
      <div className="container-wrapper">
        <SwitchRouteComponent routes={HomeRoutes} />
      </div>
      <FooterComponent />
    </>
  );
};

export default HomeLayout;
