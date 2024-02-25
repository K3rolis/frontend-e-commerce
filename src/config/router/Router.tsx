import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from '../../components/Utils/Loader/Loader';
import { routes } from '../router/routes';
import Layout from '../../common/Layout/Layout';

const HomePage = React.lazy(() => import('../../pages/Homepage/Homepage'));

const Router = () => {
  const getRoutes = () => {
    return (
      <>
        <Route path="*" element={<HomePage />} />
        <Route path={routes.homepage} element={<HomePage />} />
      </>
    );
  };

  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter basename={routes.homepage}>
        <Layout>
          <Routes>{getRoutes()}</Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
