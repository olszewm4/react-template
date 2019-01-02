import { withStyles } from '@material-ui/core';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Dispatch } from 'redux';
import { ClosePrimaryMenuAction, OpenPrimaryMenuAction } from './actions/PrimaryMenuActions';
import { PrimaryMenuComponent } from './PrimaryMenuComponent';
import { PrimaryMenuStyles } from './styles';
import { PrimaryMenuDispatchProps, PrimaryMenuOwnProps, PrimaryMenuStateProps } from './typings';
import { ApplicationState } from '../../../../infrastructure/redux/ApplicationState';


const mapStateToProps = ({ PrimaryMenuState }: ApplicationState) : PrimaryMenuStateProps => ({
    isPrimaryMenuOpen: PrimaryMenuState.isOpen
});
  
const mapDispatchToProps = (dispatch: Dispatch) : PrimaryMenuDispatchProps => ({
    closePrimaryMenu: () => dispatch(ClosePrimaryMenuAction()),
    openPrimaryMenu: () => dispatch(OpenPrimaryMenuAction()),
});

export default connect<PrimaryMenuStateProps, PrimaryMenuDispatchProps, PrimaryMenuOwnProps, any>
  (mapStateToProps, mapDispatchToProps)(withStyles(PrimaryMenuStyles)(withRouter(withNamespaces("PrimaryMenuComponent")(PrimaryMenuComponent))));
