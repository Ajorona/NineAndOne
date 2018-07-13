import React, { Component } from 'react';

class MicroClimate extends Component {
    state = {
      loading: false,
      instructions: false,
      regionsActive: false,
      countiesActive: false,

      counties: [
        {name: 'Alameda', active: false},
        {name: 'Contra Costa', active: false},
        {name: 'Marin', active: false},
        {name: 'Napa', active: false},
        {name: 'San Francisco', active: true},
        {name: 'San Mateo', active: false},
        {name: 'Santa Clara', active: false},
        {name: 'Santa Cruz', active: false},
        {name: 'Solano', active: false},
        {name: 'Sonoma', active: false},
      ],

      regions: [
        {name: 'North Bay', includes: ['\'Marin\'', '\'Sonoma\'', '\'Napa\'', '\'Solano\''], active: false},
        {name: 'East Bay', includes:['\'Alameda\'', '\'Contra Costa\''], active: false},
        {name: 'Peninsula', includes: ['\'San Mateo\''], active: false},
        {name: 'South Bay', includes: ['\'Santa Clara\''], active: false},
        {name: 'San Francisco', includes: ['\'San Francisco\''], active: true},
      ]
    }

    render() {
        return <h2>MicroClimate</h2>
    }
};

export default MicroClimate;
