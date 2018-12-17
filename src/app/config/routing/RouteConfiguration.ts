import { RouteProps } from 'react-router';
import AboutPageContainer from 'src/app/pages/about/AboutPageContainer';
import HomePageContainer from 'src/app/pages/home/HomePageContainer';
import NotFoundPage from 'src/app/pages/notFound/notFound';


export class RouteConfiguration {

    public static readonly Routes: RouteProps[] =
        [
            { exact: true, path: ['/', '/Home'], component: HomePageContainer },
            { exact: true, path: '/About/:id/:name?', component: AboutPageContainer },
            { component: NotFoundPage }
        ];

}

export default RouteConfiguration;