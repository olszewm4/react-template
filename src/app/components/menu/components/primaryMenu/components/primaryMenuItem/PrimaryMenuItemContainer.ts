import { compose, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { PrimaryMenuItemDispatchProps, PrimaryMenuItemOwnProps } from './typings';
import { ClosePrimaryMenuAction } from '../../actions/PrimaryMenuActions';
import { withRouter } from 'react-router';
import { withNamespaces } from 'react-i18next';
import PrimaryMenuItemComponent from './PrimaryMenuItemComponent';

const mapDispatchToProps = (dispatch: Dispatch) : PrimaryMenuItemDispatchProps => ({
    closePrimaryMenu: () => dispatch(ClosePrimaryMenuAction()),
});

export default compose(
    connect<any, PrimaryMenuItemDispatchProps, PrimaryMenuItemOwnProps, any>(null, mapDispatchToProps), 
    withRouter,
    withNamespaces("PrimaryMenuComponent"))
    (PrimaryMenuItemComponent) as React.ComponentType<any>;