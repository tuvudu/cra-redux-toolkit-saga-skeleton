import { mount, route, withView } from 'navi';
import React from 'react';
import { View } from 'react-navi';

import CommonLayout from '~/layouts/CommonLayout';
import IndexPage from '~/pages/Index';
import SignInPage from '~/pages/SignInPage';

import withoutAuth from './withoutAuth';

const routes = mount({
  '/sign-in': withoutAuth(
    route({
      view: <SignInPage />,
    })
  ),
  '*': withView(
    <CommonLayout>
      <View />
    </CommonLayout>,
    mount({
      '/': route({
        view: <IndexPage />,
      }),
    })
  ),
});

export default routes;
