
import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { Layout } from './components/layout/Layout';
import Overview from './pages/Overview';
import Profile from './pages/Profile';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import Help from './pages/Help';

import Smartwatch from './pages/products/Smartwatch';
import Drone from './pages/products/Drone';
import Speaker from './pages/products/Speaker';
import Chargers from './pages/products/Chargers';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Overview /> },
            { path: 'profile', element: <Profile /> },
            {
                path: 'products',
                element: <Products />,
                children: [
                    { path: 'smartwatch', element: <Smartwatch /> },
                    { path: 'drone', element: <Drone /> },
                    { path: 'speaker', element: <Speaker /> },
                    { path: 'chargers', element: <Chargers /> },
                ],
            },
            { path: 'customers', element: <Customers /> },
            { path: 'messages', element: <Messages /> },
            { path: 'settings', element: <Settings /> },
            { path: 'help', element: <Help /> },
        ],
    },
];

const router = createBrowserRouter(routes);
export default router;
