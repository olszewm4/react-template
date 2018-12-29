import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from 'src/app/infrastructure/redux/ApplicationState';
import { CloseLanguageMenuAction } from './actions/LanguageMenuActions';
import LanguageMenuComponent from './LanguageMenuComponent';
import { LanguageMenuDispatchProps, LanguageMenuStateProps } from './typings';

// tslint:disable:object-literal-sort-keys

const mapStateToProps = ({ LanguageMenuState }: ApplicationState) : LanguageMenuStateProps => ({
    anchorElement: LanguageMenuState.anchorElement,
    isLanguageMenuOpen: LanguageMenuState.anchorElement != null
});
  
 
const mapDispatchToProps = (dispatch: Dispatch) : LanguageMenuDispatchProps => ({
    closeLanguageMenu: () => dispatch(CloseLanguageMenuAction())
});

export default connect<LanguageMenuStateProps, LanguageMenuDispatchProps, any>
  (mapStateToProps, mapDispatchToProps)(withNamespaces("languages")(LanguageMenuComponent));