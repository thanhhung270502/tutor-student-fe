// Layouts
import { Layout1 } from '~/components/Layout';

// Pages
import Home from '~/pages/Home/Home';
import Test from '~/pages/Test';
import Upload from '~/pages/Upload';
import ClassList from '~/pages/ClassList/ClassList';

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
    // http://localhost:3000/classlist
    {
        path: '/classlist',
        component: ClassList,
        layout: Layout1,
    },
];

// Sau khi đăng nhập với vào được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
