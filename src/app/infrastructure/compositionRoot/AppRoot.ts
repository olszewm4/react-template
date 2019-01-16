import { ApplicationState } from '../redux/ApplicationState';
import { AnyAction, Store, createStore, applyMiddleware } from 'redux';
import { ApplicationReducer } from '../redux/ApplicationReducer';
import { InterceptorsService } from '../axios/interceptors/InterceptorsService';
import './../translation/i18n';
import thunk from 'redux-thunk';

export default class AppRoot {
    
    private static instance: AppRoot;
    
    private constructor() 
    {
    }
    
    public static getRoot() {
        if (!AppRoot.instance) {
            AppRoot.instance = new AppRoot();
        }
        return AppRoot.instance;
    }

    private store: Store<ApplicationState, AnyAction> | undefined;
    public get Store() : Store<ApplicationState, AnyAction>
    {
        if(this.store === undefined){
            throw new Error("Store has not been initialized !!!");
        }

        return this.store;
    }

    public OnApplicationStart = () : void => {
        this.store = createStore(ApplicationReducer, applyMiddleware(thunk));
        InterceptorsService.setup(this.store);
    }
}