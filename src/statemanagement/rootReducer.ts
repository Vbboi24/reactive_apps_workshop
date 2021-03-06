import {collapsableSidebarReducer} from "./reducers/containers/collapsable-sidebar.reducer";
import {authenticationReducer} from "./reducers/data/authentication.reducer";
import {winesReducer} from "./reducers/data/wines.reducer";
import {applicationReducer} from "./reducers/containers/application.reducer";
import {combineReducers} from "@ngrx/store";
let dataReducers = combineReducers({
    authentication: authenticationReducer,
    wines: winesReducer
});
let containersReducers = combineReducers({
    collapsableSidebar: collapsableSidebarReducer,
    application: applicationReducer
});

export let rootReducer = {
    data: dataReducers,
    containers: containersReducers
};
