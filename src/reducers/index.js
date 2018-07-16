import { combineReducers } from 'redux';

import CountiesReducer from './reducer_counties';
import RegionsReducer from './reducer_regions';


const rootReducer = combineReducers({
    counties: CountiesReducer,
    regions: RegionsReducer
});

export default rootReducer;
