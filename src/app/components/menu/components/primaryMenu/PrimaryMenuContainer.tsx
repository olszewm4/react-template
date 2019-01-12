import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Dispatch, compose } from 'redux';
import { ClosePrimaryMenuAction, OpenPrimaryMenuAction } from './actions/PrimaryMenuActions';
import PrimaryMenuComponent from './PrimaryMenuComponent';
import { PrimaryMenuDispatchProps, PrimaryMenuOwnProps, PrimaryMenuStateProps } from './typings';
import { ApplicationState } from '../../../../infrastructure/redux/ApplicationState';


const mapStateToProps = ({ PrimaryMenuState }: ApplicationState) : PrimaryMenuStateProps => ({
    isPrimaryMenuOpen: PrimaryMenuState.isOpen
});
  
const mapDispatchToProps = (dispatch: Dispatch) : PrimaryMenuDispatchProps => ({
    closePrimaryMenu: () => dispatch(ClosePrimaryMenuAction()),
    openPrimaryMenu: () => dispatch(OpenPrimaryMenuAction()),
});


export default compose(
    connect<PrimaryMenuStateProps, PrimaryMenuDispatchProps, PrimaryMenuOwnProps, any>(mapStateToProps, mapDispatchToProps), 
    withRouter)
    (PrimaryMenuComponent) as React.ComponentType<any>;