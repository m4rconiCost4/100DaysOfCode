import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import UserProfile from './components/UserProfile';


export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route exact path='/UserProfile' component={UserProfile} />

</Layout>;
