import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CloseProfileMenuAction } from './actions/ProfileMenuActionTypes';
import ProfileMenuComponent from './ProfileMenuComponent';
import { ProfileMenuDispatchProps, ProfileMenuStateProps } from './typings';
import { ApplicationState } from '../../../../../../infrastructure/redux/ApplicationState';

const mapStateToProps = ({ ProfileMenuState }: ApplicationState) : ProfileMenuStateProps => ({
    anchorElement: ProfileMenuState.anchorElement,
    isProfileMenuOpen: ProfileMenuState.anchorElement != null
});
  
 
const mapDispatchToProps = (dispatch: Dispatch) : ProfileMenuDispatchProps => ({
    closeProfileMenu: () => dispatch(CloseProfileMenuAction())
});

export default connect<ProfileMenuStateProps, ProfileMenuDispatchProps, any, any>
  (mapStateToProps, mapDispatchToProps)(ProfileMenuComponent);