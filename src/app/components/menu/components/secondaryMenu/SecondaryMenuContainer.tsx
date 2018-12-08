import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from "src/index.store";
import { OpenSecondaryMenuAction } from './actions/SecondaryMenuActions';
import { CloseProfileMenuAction, OpenProfileMenuAction } from './components/profileMenu/actions/ProfileMenuActionTypes';
import SecondaryMenuComponent from './SecondaryMenuComponent';
import { SecondaryMenuStyles } from './styles';
import { SecondaryMenuDispatchProps, SecondaryMenuOwnProps, SecondaryMenuStateProps } from './typings';

const mapStateToProps = ({ SecondaryMenuState }: ApplicationState) : SecondaryMenuStateProps => ({
    anchorElement: SecondaryMenuState.anchorElement,
    isSecondaryMenuOpen: SecondaryMenuState.anchorElement != null
});
  
 
const mapDispatchToProps = (dispatch: Dispatch) : SecondaryMenuDispatchProps => ({
    closeSecondaryMenu: () => dispatch(CloseProfileMenuAction()),
    openProfileMenu: (event: any) => dispatch(OpenProfileMenuAction(event.currentTarget)),
    openSecondaryMenu: (event: any) => dispatch(OpenSecondaryMenuAction(event.currentTarget)),
});

export default connect<SecondaryMenuStateProps, SecondaryMenuDispatchProps, SecondaryMenuOwnProps>
  (mapStateToProps, mapDispatchToProps)(withStyles(SecondaryMenuStyles)(SecondaryMenuComponent));