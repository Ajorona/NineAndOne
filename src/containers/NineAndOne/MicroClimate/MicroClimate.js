import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';
import classes from './MicroClimate.css';

const OPEN_WEATHER_MAP_API_KEY = 'e1ff51e6d476b99849f580b734fa97a2';
const OWM_Base_URL = 'http://api.openweathermap.org/data/2.5';

class MicroClimate extends Component {
    state = {
        loaded : false
    }

    genOWM_APICall = () => {
        let ids = this.props.counties.map(county => {
            return county.id;
        }).join(',')

        let call = `group?id=${ids}&APPID=${OPEN_WEATHER_MAP_API_KEY}`;
        return call;
    }

    kToF = (kelvin) => {
        return Math.floor((kelvin * (9/5) - 459.67 ));
    }

    parseCountyData = (response) => {
        console.log(response);
        let data = response.data.list.map ( county => {
            return ({
                id: county.id,
                name: county.name,
                humidity: county.main.humidity,
                pressure: county.main.pressure,
                temperature: county.main.temp,
                wind: county.wind.speed,
                description: county.weather[0].description
            })
        })
        return data;
    }

    generateCountyRows = (countyData) => {
        return countyData.map( county => {
            return ({
                id : county.id,
                row : <tr className="text-center">
                    <th  scope="row">{county.name}</th>
                    <td>{county.description}</td>
                    <td>{this.kToF(county.temperature)}</td>
                    <td>{county.pressure}</td>
                    <td>{county.humidity}</td>
                    <td>{county.wind}</td>
                </tr>
            })
        })
    }

    componentDidMount () {
        let call = this.genOWM_APICall();
        axios({ url: call, baseURL: OWM_Base_URL })
            .then(response => {
                this.setState({ rows: this.generateCountyRows(this.parseCountyData(response)),
                                        loaded: true
                                    })
            });
    }

    render() {
        return (
            <table className={`${classes.Display} table table-dark`}>
                <thead className="text-center">
                    <th scope="col">County</th>
                    <th scope="col">Description</th>
                    <th scope="col">Temperature | F</th>
                    <th scope="col">Pressure | mBar</th>
                    <th scope="col">Humidity (%)</th>
                    <th scope="col">Wind | kmph</th>
                </thead>
                <tbody>
                    {
                        this.state.loaded ? this.state.rows.map( rowObj => {
                            let row = "";
                            let county = this.props.counties.find( county => {
                                return county.id === rowObj.id;
                            });
                            county.active ? row = rowObj.row : null;
                            return row;
                        }) : <tr><td>loading. . .</td></tr>
                    }
                </tbody>
            </table>
        );
    }
};

function mapStateToProps (state) {
    return {
        counties: state.counties,
        regions: state.regions
    }
}

export default connect(mapStateToProps)(MicroClimate);
