import { TOGGLE_REGION } from '../actions/actionTypes';

const regions = [
                          {name: 'North Bay', includes: ['\'Marin\'', '\'Sonoma\'', '\'Napa\'', '\'Solano\''], active: false},
                          {name: 'East Bay', includes:['\'Alameda\'', '\'Contra Costa\''], active: false},
                          {name: 'Peninsula', includes: ['\'San Mateo\''], active: false},
                          {name: 'South Bay', includes: ['\'Santa Clara\''], active: false},
                          {name: 'San Francisco', includes: ['\'San Francisco\''], active: false}
                         ];

const  toggleRegion = (regionName, state) => {
     let regions = [...state];
     let region = regions.find(region => region.name === regionName);
     region.active = !region.active;
     return regions
 }

export default function(state = regions, action) {
    switch(action.type) {
        case TOGGLE_REGION:
            return toggleRegion(action.payload, state);
        default:
            return state;
    }
}
