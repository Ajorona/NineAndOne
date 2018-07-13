import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classes from './Map.css';

import Aux from '../../../hoc/Aux/Aux';
import ColGroup from '../../../components/Controls/ColGroup/ColGroup';
import RowGroup from '../../../components/Controls/RowGroup/RowGroup';

/* global google */

const MAP_API_KEY = 'AIzaSyDBp5HKeZtn-TnCjdOYtUOvQYK1K86QIBc';
const FUSION_API_KEY = 'AIzaSyD2aesWTqcU3wW94ELZwREjfePGhNTn8oc';
const FUSION_TABLE_ID = '1rEpWpRmNXxx_HqU33a0MMA_NBYhaDOI_Dso3_DoP';

const MAP_CENTER = {
  lat: 37.85,
  lng: -122.45
};

class Map extends Component {
  constructor(props) {
    super(props);
    // this.initLayers();
  }

  initLayers = () => {
    let countyLayers = this.props.counties.map(county => {
      return ({
          name: county.name,
          layer: new google.maps.FusionTablesLayer({
            query: {
              select: 'geometry',
              from: FUSION_TABLE_ID,
              where: `'County Name' = '${county.name}'`
            }
          })
       })
    })

    let regionLayers = this.props.regions.map(region => {
      let regionStr = region.includes.join(',');
      return ({
        name: region.name,
        layer: new google.maps.FusionTablesLayer({
          query: {
            select: 'geometry',
            from: FUSION_TABLE_ID,
            where: `'County Name' IN (${regionStr})`
          }
        })
      })
    })

    countyLayers.forEach(layerObj => layerObj.layer.setMap(null));
    regionLayers.forEach(layerObj => layerObj.layer.setMap(null));

    this.state = {countyLayers: countyLayers, regionLayers: regionLayers};
  }

  setCountyLayers = () => {
    this.props.counties.forEach(county => {
      let layerObj = this.state.countyLayers.find(layer => layer.name === county.name);
      if (county.active) {
        layerObj.layer.setMap(this.map);
      } else {
        layerObj.layer.setMap(null);
      }
    })
  }

  setRegionLayers = () => {
    this.props.regions.forEach(region => {
      let layerObj = this.state.regionLayers.find(layer => layer.name === region.name);
      if (region.active) {
        layerObj.layer.setMap(this.map);
      } else {
        layerObj.layer.setMap(null);
      }
    })
  }

  // componentDidMount() {
  //   this.map = new google.maps.Map(this.refs.map, {
  //     center: MAP_CENTER,
  //     zoom: 8
  //   });
  // }
  //
  // componentDidUpdate(prevProps) {
  //   this.setCountyLayers();
  //   this.setRegionLayers();
  // }

  render() {
    return ( <h2>Map</h2> );
        /* <div>
            <div className={classes.MapContainer}>
                <div ref="map" className={classes.Map}></div>
            </div>

            <div className={classes.ColGroup} >
              <ColGroup
                elems={this.state.counties}
                handleToggleCounty={this.handleToggleCounty} />
            </div>

            <div className={classes.RowGroup} >
              <RowGroup
                elems={this.state.regions}
                handleToggleRegion={this.handleToggleRegion} />
            </div>
        </div>
     */
  }
}

export default Map;
