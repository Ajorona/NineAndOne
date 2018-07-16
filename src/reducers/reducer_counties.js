import { TOGGLE_COUNTY } from '../actions/actionTypes';

const counties = [
                            {name: 'Alameda', active: false},
                            {name: 'Contra Costa', active: false},
                            {name: 'Marin', active: false},
                            {name: 'Napa', active: false},
                            {name: 'San Francisco', active: false},
                            {name: 'San Mateo', active: false},
                            {name: 'Santa Clara', active: false},
                            {name: 'Santa Cruz', active: false},
                            {name: 'Solano', active: false},
                            {name: 'Sonoma', active: false}
                            ];

const toggleCounty = (countyName, state) => {
    let counties = [...this.state];
    let county = counties.find(county => county.name === countyName);
    county.active = !county.active;
    return counties;
}

export default function (state = counties, action) {
    switch(action.type) {
        case TOGGLE_COUNTY:
            return toggleCounty(action.payload, state)
        default:
            return state;
    }
}
