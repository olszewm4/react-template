import { InjectedNotistackProps } from 'notistack';
import { RouteComponentProps } from 'react-router-dom';

export type RouterOwnProps = RouteComponentProps<any> & InjectedNotistackProps;

export type RouterProps = RouterOwnProps;