import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from "src/index.store";
import { CloseProfileMenuAction } from './actions/ProfileMenuActionTypes';
import ProfileMenuComponent from './ProfileMenuComponent';
import { ProfileMenuDispatchProps, ProfileMenuStateProps } from './typings';

const mapStateToProps = ({ ProfileMenuState }: ApplicationState) : ProfileMenuStateProps => ({
    anchorElement: ProfileMenuState.anchorElement,
    isProfileMenuOpen: ProfileMenuState.anchorElement != null
});
  
 
const mapDispatchToProps = (dispatch: Dispatch) : ProfileMenuDispatchProps => ({
    closeProfileMenu: () => dispatch(CloseProfileMenuAction())
});

export default connect<ProfileMenuStateProps, ProfileMenuDispatchProps, any>
  (mapStateToProps, mapDispatchToProps)(ProfileMenuComponent);