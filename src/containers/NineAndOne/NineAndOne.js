import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import axios from 'axios';

import Aux from '../../hoc/Aux/Aux';
import Map from './Map/Map';
import News from './News/News';
import MicroClimate from './MicroClimate/MicroClimate';
import Statistics from './Statistics/Statistics';

import Icon from '../../components/UI/Icon/Icon';
import Instructions from '../../components/UI/Modal/Instructions';
import Modal from '../../components/UI/Modal/Modal';
import ColGroup from '../../components/Controls/ColGroup/ColGroup';
import RowGroup from '../../components/Controls/RowGroup/RowGroup';

import classes from './NineAndOne.css';
import Spinner from '../../assets/spinner.gif';


class NineAndOne extends Component {
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
      {name: 'San Francisco', active: false},
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
      {name: 'San Francisco', includes: ['\'San Francisco\''], active: false},
    ]
  }

  handleToggleCounty = (countyName) => {
      let counties = [...this.state.counties];
      let county = counties.find(county => county.name === countyName);
      county.active = !county.active;
      this.setState({counties});
  }

  handleToggleRegion = (regionName) => {
    let regions = [...this.state.regions];
    let region = regions.find(region => region.name === regionName);
    region.active = !region.active;
    this.setState({regions});
  }

  onInstructionsClick = (e) => {
    this.setState({instructions: true});
  }

  closeModalHandler = () => {
    this.setState({instructions: false});
  }

  render() {
    return (
      <Aux>
        <header>
            <nav className="navbar navbar-dark bg-primary">
                <NavLink className="navbar-brand" to="/" exact>Nine & 1</NavLink>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><NavLink className="nav-link" to="/microclimate" >MicroClimate</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/news" >News</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/statistics" >Statistics</NavLink></li>
                </ul>
                <h6 className="text-center">
                  <button onClick={this.onInstructionsClick} className={`${classes.Instructions} btn btn-outline-success my-2 my-sm-0`}>Instructions</button>
                </h6>
            </nav>
        </header>

        <Modal show={this.state.instructions} modalClosed={this.closeModalHandler}>
            <Instructions />
        </Modal>

        <main className={classes.AppContainer}>
            <Switch>
                <Route path="/" exact component={Map} />
                <Route path="/microclimate" component={MicroClimate} />
                <Route path="/news" component={News} />
                <Route path="/statistics" component={Statistics} />
            </Switch>
        </main>
      </Aux>
    )
  }
}

export default NineAndOne;
