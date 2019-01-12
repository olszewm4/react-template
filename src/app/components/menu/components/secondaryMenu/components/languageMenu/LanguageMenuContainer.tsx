import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { Dispatch, compose } from 'redux';
import { CloseLanguageMenuAction } from './actions/LanguageMenuActions';
import LanguageMenuComponent from './LanguageMenuComponent';
import { LanguageMenuDispatchProps, LanguageMenuStateProps } from './typings';
import { ApplicationState } from '../../../../../../infrastructure/redux/ApplicationState';
import { CloseSecondaryMenuAction } from '../../actions/SecondaryMenuActions';

const mapStateToProps = ({ LanguageMenuState }: ApplicationState) : LanguageMenuStateProps => ({
    anchorElement: LanguageMenuState.anchorElement,
    isLanguageMenuOpen: LanguageMenuState.anchorElement != null
});
  
 
const mapDispatchToProps = (dispatch: Dispatch) : LanguageMenuDispatchProps => ({
    closeLanguageMenu: () => dispatch(CloseLanguageMenuAction()),
    closeSecondaryMenu: () => dispatch(CloseSecondaryMenuAction())
});

export default compose(
    connect<LanguageMenuStateProps, LanguageMenuDispatchProps, any, any>(mapStateToProps, mapDispatchToProps),
    (withNamespaces("languages")))
    (LanguageMenuComponent) as React.ComponentType<any>;