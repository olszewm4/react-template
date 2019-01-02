import { RouteProps } from 'react-router';
import HomePageContainer from '../../../pages/home/HomePageContainer';
import AboutPageContainer from '../../../pages/about/AboutPageContainer';
import NotFoundPage from '../../../pages/notFound/notFound';


export class RouteConfiguration {

    public static readonly Routes: RouteProps[] =
        [
            { exact: true, path: ['/', '/Home'], component: HomePageContainer },
            { exact: true, path: '/About/:id/:name?', component: AboutPageContainer },
            { component: NotFoundPage }
        ];

}

export default RouteConfiguration;