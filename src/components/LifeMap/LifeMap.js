import React, { Component } from 'react';
import OLMap  from 'ol/Map';
import BasicMap from '../../../node_modules/react-spatial/components/BasicMap';
import ConfigReader from '../../../node_modules/react-spatial/ConfigReader';
import LayerService from '../../../node_modules/react-spatial/LayerService';
import  '../../../node_modules/react-spatial//themes/default/index.scss';

import './LifeMap.scss'

class LifeMap extends Component{
  constructor(props){
    super(props)
    const layerConf = [{
      name: 'OSM Baselayer',
      visible: true,
      copyright: 'OSM Contributors',
      data: {
        type: 'xyz',
        url: 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
      },
    }];
    this.map = new OLMap();
    this.layers = ConfigReader.readConfig(this.map, layerConf);
    this.layerService = new LayerService(this.layers);
    this.state = {};
  }

  render(){
    const center = [11, 46];
    return (
      <div className='lifemap-container'>
        <h2>Life map</h2>
        <BasicMap
          map={this.map}
          center={center}
          zoom={5}
          layers={this.layers}
        />
      </div>
    )
  }

}

export default LifeMap;
