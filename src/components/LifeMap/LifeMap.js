import React, { Component } from 'react';
import BasicMap from '../../../node_modules/react-spatial/components/BasicMap';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';
import LayerPopup from 'ol-ext/control/LayerPopup';
import GeoJSON from 'ol/format/GeoJSON';
import  '../../../node_modules/react-spatial//themes/default/index.scss';

import './LifeMap.scss';

const mapBoxKey = 'pk.eyJ1IjoiZGFuamk5MCIsImEiOiJjazA2azNrbzMwMjM3M2VsdmQxaXYyMG9sIn0.bFXyO9IWGsCT2j2o0yXoOw';
const mapData = require('../../assets/data/mapFeatures.json')

class LifeMap extends Component{
  constructor(props){
    super(props)

    const education = new GeoJSON({featureProjection: 'EPSG:3857',}).readFeatures(mapData.education)
    const work = new GeoJSON({featureProjection: 'EPSG:3857',}).readFeatures(mapData.work)
    const residence = new GeoJSON({featureProjection: 'EPSG:3857',}).readFeatures(mapData.residence)

    // Map Layers
    this.layers = [
      new TileLayer({
        title: 'Streets',
        baseLayer: true,
        source: new XYZ({
          url: `https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=${mapBoxKey}`
        })
      }),
      new TileLayer({
        title: 'Satellite',
        baseLayer: true,
        visible: false,
        source: new XYZ({
          url: `https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=${mapBoxKey}`
        })
      }),
      new TileLayer({
        title: 'Gray Scale',
        baseLayer: true,
        visible: false,
        source: new XYZ({
          url: `https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=${mapBoxKey}`
        })
      }),
      new VectorLayer({
        title: 'Education',
        source: new VectorSource({
          format: new GeoJSON(),
          features: education,
        })
      }),
      new VectorLayer({
        title: 'Work',
        source: new VectorSource({
          format: new GeoJSON(),
          features: work,
        })
      }),
      new VectorLayer({
        title: 'Residence',
        source: new VectorSource({
          format: new GeoJSON(),
          features: residence,
        })
      })
    ]

    // Map Object
    this.map = new Map({
      layers: this.layers,
      controls: [],
    });

    // Layer switcher extension
    this.layerSwitcher = new LayerPopup();
    this.map.addControl(this.layerSwitcher);
  }

  render(){
    return (
      <div className='lifemap-container'>
        <h2>Life map</h2>
        <BasicMap
          zoom={2}
          viewOptions = {
            { minZoom: 2 }
          }
          map={this.map}
        />
      </div>
    )
  }

}

export default LifeMap;
