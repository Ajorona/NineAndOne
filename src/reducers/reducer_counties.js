import { TOGGLE_COUNTY } from '../actions/actionTypes';

// id: Open Weather Map ID
const counties = [
                            {name: 'Alameda', active: false, id: 5322745},
                            {name: 'Contra Costa', active: false, id: 5339268},
                            {name: 'Marin', active: false, id: 5370468},
                            {name: 'Napa', active: false, id: 5376095},
                            {name: 'San Francisco', active: false, id: 5391997},
                            {name: 'San Mateo', active: false, id: 5392427},
                            {name: 'Santa Clara', active: false, id: 3537900},
                            {name: 'Santa Cruz', active: false, id: 5393068},
                            {name: 'Solano', active: false, id: 5396987},
                            {name: 'Sonoma', active: false, id: 5397100}
                            ];

const toggleCounty = (countyName, state) => {
    let counties = [...state];
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
