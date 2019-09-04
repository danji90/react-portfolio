import React, { Component } from 'react';
import BasicMap from '../../../node_modules/react-spatial/components/BasicMap';
import Layer from '../../../node_modules/react-spatial/Layer';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM.js';
import  '../../../node_modules/react-spatial//themes/default/index.scss';

import './LifeMap.scss'

class LifeMap extends Component{
  constructor(props){
    super(props)
    this.state = {};
    this.layers = [
      new Layer({
        name: 'OSM layer',
        olLayer: new TileLayer({
          source: new OSM({
            url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          }),
        }),
      }),
    ];
  }

  render(){
    return (
      <div className='lifemap-container'>
        <h2>Life map</h2>
        <BasicMap
          center={[843119.531243, 6111943.000197]}
          zoom={4}
          map={this.map}
          layers={this.layers}
        />
      </div>
    )
  }

}

export default LifeMap;
