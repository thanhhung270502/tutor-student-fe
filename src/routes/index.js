// Layouts
import { Layout1 } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Test from '~/pages/Test';
import Upload from '~/pages/Upload';
import Personal_info from '~/pages/personal_info';
// Không cần đăng nhập vẫn vào được
const publicRoutes = [
    // http://localhost:3000
    {
        path: '/',
        component: Home,
    },
    // http://localhost:3000/test
    {
        path: '/test',
        component: Test,
        layout: Layout1,
    },
    // http://localhost:3000/upload
    {
        path: '/upload',
        component: Upload,
        layout: null,
    },
    {
        path: '/personal_info',
        component: Personal_info,
        layout: Layout1,
    },
];

// Sau khi đăng nhập với vào được
const privateRoutes = [
    //http:localhost:3000/personal_info
];

export { publicRoutes, privateRoutes };
