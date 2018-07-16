import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

class News extends Component {
    state = {
      loading: false,
      instructions: false,
      regionsActive: false,
      countiesActive: false,

      regions: [
        {name: 'North Bay', includes: ['\'Marin\'', '\'Sonoma\'', '\'Napa\'', '\'Solano\''], active: false},
        {name: 'East Bay', includes:['\'Alameda\'', '\'Contra Costa\''], active: false},
        {name: 'Peninsula', includes: ['\'San Mateo\''], active: false},
        {name: 'South Bay', includes: ['\'Santa Clara\''], active: false},
        {name: 'San Francisco', includes: ['\'San Francisco\''], active: true},
      ]
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then( response => {
                console.log(response);
            });
    }

    render() {
        return <h2>News</h2>
    }
}

function mapStateToProps(state) {
    return {
        counties: state.counties,
        regions: state.regions
    }
}

export default connect(mapStateToProps)(News);
