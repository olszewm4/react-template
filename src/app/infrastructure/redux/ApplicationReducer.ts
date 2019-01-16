import { combineReducers } from 'redux';
import { ApplicationState } from './ApplicationState';
import { StatisticsReducer } from './modules/statistics/StatisticsReducer';
import { PrimaryMenuReducer } from '../../components/menu/components/primaryMenu/PrimaryMenuReducer';
import { ProfileMenuReducer } from '../../components/menu/components/secondaryMenu/components/profileMenu/ProfileMenuReducer';
import { SecondaryMenuReducer } from '../../components/menu/components/secondaryMenu/SecondaryMenuReducer';
import { LanguageMenuReducer } from '../../components/menu/components/secondaryMenu/components/languageMenu/LanguageMenuReducer';
import { TasksPageReducer } from '../../pages/tasks/TasksPageReducer';

export const ApplicationReducer = combineReducers<ApplicationState>({
    PrimaryMenuState: PrimaryMenuReducer,
    ProfileMenuState: ProfileMenuReducer,
    SecondaryMenuState: SecondaryMenuReducer,
    LanguageMenuState: LanguageMenuReducer,
    StatisticsState: StatisticsReducer,
    TasksPageState: TasksPageReducer
});