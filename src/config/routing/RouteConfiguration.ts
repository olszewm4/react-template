    import { RouteProps } from 'react-router';
    import AboutPage from 'src/components/about/about';
    import HomePage from 'src/components/home/home';
import NotFoundPage from 'src/components/notFound/notFound';

    export class RouteConfiguration {

        public static readonly Routes: RouteProps[] =
        [
            { exact: true, path: ['/', '/Home'], component: HomePage },
            { exact: true, path: '/About/:id/:name?', component: AboutPage },
            { component: NotFoundPage }
        ];

    }

    export default RouteConfiguration;