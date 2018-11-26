import { RouteProps } from 'react-router';
import AboutPage from 'src/pages/about/about';
import HomePage from 'src/pages/home/home';
import NotFoundPage from 'src/pages/notFound/notFound';


export class RouteConfiguration {

    public static readonly Routes: RouteProps[] =
        [
            { exact: true, path: ['/', '/Home'], component: HomePage },
            { exact: true, path: '/About/:id/:name?', component: AboutPage },
            { component: NotFoundPage }
        ];

}

export default RouteConfiguration;