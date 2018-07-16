import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, Switch } from 'react-router-dom';

import { toggleCounty, toggleRegion } from '../../actions/index';

import Aux from '../../hoc/Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';
import Instructions from '../../components/UI/Modal/Instructions';
import ColGroup from '../../components/Controls/ColGroup/ColGroup';
import RowGroup from '../../components/Controls/RowGroup/RowGroup';
import SideDrawer from '../../components/UI/Navigation/SideDrawer/SideDrawer';

import Map from './Map/Map';
import News from './News/News';
import Statistics from './Statistics/Statistics';
import MicroClimate from './MicroClimate/MicroClimate';

import classes from './NineAndOne.css';


class NineAndOne extends Component {
    state = {
        loading: false, // for spinner
        instructions: false,
    }

  openModal = (e) => {
    this.setState({instructions: true});
  }

  closeModal = () => {
    this.setState({instructions: false});
  }

  render() {
    return (
      <Aux>
        <header>
            <SideDrawer
                counties={this.props.counties}
                regions={this.props.regions}
                toggleCounty={this.props.toggleCounty}
                toggleRegion={this.props.toggleRegion}
            />

            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <NavLink className="navbar-brand" to="/" exact>Nine & 1</NavLink>

              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item"><NavLink className="nav-link" to="/map">Map</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/microclimate" >MicroClimate</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/news" >News</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/statistics">Statistics</NavLink></li>
                  </ul>

                  <h6 className="text-center">
                      <button onClick={this.openModal} className={`${classes.Instructions} btn btn-outline-success my-2 my-sm0`}>Instructions</button>
                  </h6>
              </div>
            </nav>
        </header>

        <Modal show={this.state.instructions} modalClosed={this.closeModal}>
            <Instructions />
        </Modal>

        <main className='container'>
            <div className="row">
                <div className={`col-md-8 ${classes.Display}`}>
                    <Switch>
                        <Route path="/" exact component={Map} />
                        <Route path="/microclimate" component={MicroClimate} />
                        <Route path="/news" component={News} />
                        <Route path="/statistics" component={Statistics} />
                    </Switch>
                </div>

                <div className={`col-md-4 ${classes.DesktopButtons}`} >
                  <ColGroup
                    elems={this.props.counties}
                    toggle={this.props.onCountyClick} />
                </div>
            </div>

            <div className={`${classes.DesktopButtons}`}>
                  <RowGroup
                    elems={this.props.regions}
                    toggle={this.props.onRegionClick} />
            </div>
        </main>
      </Aux>
    )
}
}

function mapStateToProps(state) {
    return {
        counties: state.counties,
        regions: state.regions,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onCountyClick: (county) => {
            dispatch(toggleCounty(county));
        },
        onRegionClick: (region) => {
            dispatch(toggleRegion(region));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NineAndOne);
