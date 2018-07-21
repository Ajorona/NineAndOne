import React, { Component } from 'react';

// React Redux
import { connect } from 'react-redux';
import { toggleCounty, toggleRegion } from '../../actions/index';

// React Router
import { Route, NavLink, Switch } from 'react-router-dom';

// Controls
import ColGroup from '../../components/Controls/ColGroup/ColGroup';
import RowGroup from '../../components/Controls/RowGroup/RowGroup';

// Navigation & Modal
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import SideDrawer from '../../components/UI/SideDrawer/SideDrawer';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Modal from '../../components/UI/Modal/Modal';
import Instructions from '../../components/UI/Modal/Instructions';

// Pages
import Map from './Map/Map';
import MicroClimate from './MicroClimate/MicroClimate';

import classes from './NineAndOne.css';

class NineAndOne extends Component {
    state = {
        modalOpen: false,
        sideDrawerOpen: false
    };

    links = [
                   {path: '/map', name: 'Map'},
                   {path: '/microclimate', name: 'MicroClimate'}
                ];

    drawerToggleClickHandler = () => {
        this.setState( (prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false, modalOpen: false});
    };

    openModalHandler = () => {
        this.setState({modalOpen: true});
    }

    closeModalHandler = () => {
        this.setState({modalOpen: false});
    }

    closeSideDrawerHandler = () => {
        this.setState({sideDrawerOpen: false});
    }

  render() {
      let backdrop;

      if (this.state.sideDrawerOpen || this.state.modalOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler} />
      }

      return (
            <div>
                <Toolbar
                    drawerClickHandler={this.drawerToggleClickHandler}
                    modalOpen={this.openModalHandler}>
                    <ul>
                        {this.links.map( (link) => {
                            return <li>
                                           <NavLink
                                               to={link.path}
                                               className={this.state.active === link.name ? classes.Active : '' }
                                               onClick={() => this.activateButton(link.name)}
                                               key={link.name}>
                                               {link.name}
                                            </NavLink>
                                        </li>
                        })}
                    </ul>
                </Toolbar>

                <SideDrawer show={this.state.sideDrawerOpen} close={this.closeSideDrawerHandler}>
                    <div className={classes.ButtonCol} >
                        <ColGroup elems={this.props.counties} toggle={this.props.onCountyClick} blue={true} />
                        <hr />
                        <ColGroup elems={this.props.regions} toggle={this.props.onRegionClick} blue={false} />
                        <div style={{marginTop: 15}}>
                            <button onClick={ this.closeSideDrawerHandler} className="btn btn-success">Go</button>
                        </div>
                    </div>
                </SideDrawer>

                <Modal show={this.state.modalOpen} close={this.closeModalHandler}>
                    <Instructions />
                </Modal>

                { backdrop }
                 <main style={{marginTop: '64px'}}>
                    <div className="row">
                        <div className={`col-md-8 ${classes.Display}`}>
                            <Switch>
                                <Route path="/" exact component={Map} />
                                <Route path="/microclimate" component={MicroClimate} />
                            </Switch>
                        </div>
                    </div>

                    <div>
                        <div className="row justify-content-center">
                            <RowGroup elems={this.props.counties} toggle={this.props.onCountyClick} blue={false}/>
                        </div>
                        <div className={classes.Spacer} />
                        <div className="row justify-content-center">
                            <RowGroup elems={this.props.regions} toggle={this.props.onRegionClick} blue={true}/>
                        </div>
                    </div>
                </main>
            </div>
        );
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
