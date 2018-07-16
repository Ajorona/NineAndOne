import { TOGGLE_COUNTY, TOGGLE_REGION } from './actionTypes';

export function toggleCounty(county) {
    return {
        type: TOGGLE_COUNTY,
        payload: county
    }
}

export function toggleRegion(region) {
    return {
        type: TOGGLE_REGION,
        payload: region
    }
}
