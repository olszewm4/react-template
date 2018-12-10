import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Dispatch } from 'redux';
import { ApplicationState } from 'src/index.store';
import { ClosePrimaryMenuAction, OpenPrimaryMenuAction } from './actions/PrimaryMenuActions';
import { PrimaryMenuComponent } from './PrimaryMenuComponent';
import { PrimaryMenuStyles } from './styles';
import { PrimaryMenuDispatchProps, PrimaryMenuOwnProps, PrimaryMenuStateProps } from './typings';


const mapStateToProps = ({ PrimaryMenuState }: ApplicationState) : PrimaryMenuStateProps => ({
    isPrimaryMenuOpen: PrimaryMenuState.isOpen
});
  
const mapDispatchToProps = (dispatch: Dispatch) : PrimaryMenuDispatchProps => ({
    closePrimaryMenu: () => dispatch(ClosePrimaryMenuAction()),
    openPrimaryMenu: () => dispatch(OpenPrimaryMenuAction()),
});

export default connect<PrimaryMenuStateProps, PrimaryMenuDispatchProps, PrimaryMenuOwnProps>
  (mapStateToProps, mapDispatchToProps)(withStyles(PrimaryMenuStyles)(withRouter(PrimaryMenuComponent)));
