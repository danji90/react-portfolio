import React, { Component } from 'react';
import BasicMap from 'react-spatial/components/BasicMap';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import CircleStyle from 'ol/style/Circle';
import Stroke from 'ol/style/Stroke';
import Fill from 'ol/style/Fill';
import Icon from 'ol/style/Icon';
import Map from 'ol/Map';
import LayerPopup from 'ol-ext/control/LayerPopup';
import GeoJSON from 'ol/format/GeoJSON';
import 'react-spatial/themes/default/index.scss';
import Stamen from 'ol/source/Stamen';
import View from 'ol/View';
import {fromLonLat} from 'ol/proj';

import './LifeMap.scss';
import { FaGraduationCap } from "../../../node_modules/react-icons/fa";

const mapData = require('../../assets/data/mapFeatures.json')

const geticonStyle = (features, iconPath) => {
  features.map((f, index) => f.setStyle(
    // new Style({
    //   image: new CircleStyle({
    //     radius: 5,
    //     stroke: new Stroke({color: '#fff'}),
    //     fill: new Fill({color: 'red'})
    //   })
    // }),
    new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: iconPath,
      })
    })
  )
)}

const map = new Map({
  layers: [
    new TileLayer({
      source: new Stamen({
        layer: 'watercolor',
      }),
    }),
    new TileLayer({
      source: new Stamen({
        layer: 'terrain-labels',
      }),
    }) ],
  target: 'map',
  view: new View({
    center: fromLonLat([-122.416667, 37.783333]),
    zoom: 12,
  }),
});

class LifeMap extends Component {
  constructor(props) {
    super(props) 

    const education = new GeoJSON({featureProjection: 'EPSG:3857'}).readFeatures(mapData.education)
    const work = new GeoJSON({featureProjection: 'EPSG:3857'}).readFeatures(mapData.work)
    const residence = new GeoJSON({featureProjection: 'EPSG:3857'}).readFeatures(mapData.residence)


    geticonStyle(education, 'images/icons/edu.png');

    // Map Layers
    this.layers = [
      new TileLayer({
        title: 'Streets',
        baseLayer: true,
        source: new Stamen({
          layer: 'watercolor',
        }),
      }),
      // new TileLayer({
      //   title: 'Satellite',
      //   baseLayer: true,
      //   visible: false,
      //   source: new XYZ({url: `https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=${mapBoxKey}`})
      // }),
      // new TileLayer({
      //   title: 'Gray Scale',
      //   baseLayer: true,
      //   visible: false,
      //   source: new XYZ({url: `https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=${mapBoxKey}`})
      // }),
      // new VectorLayer({
      //   title: 'Education',
      //   visible: false,
      //   source: new VectorSource({format: new GeoJSON(), features: education}),
      // }),
      // new VectorLayer({
      //   title: 'Work',
      //   visible: false,
      //   source: new VectorSource({format: new GeoJSON(), features: work})
      // }),
      // new VectorLayer({
      //   title: 'Residence',
      //   visible: false,
      //   source: new VectorSource({format: new GeoJSON(), features: residence})
      // })
    ]

    // Map Object
    // this.map = new Map({
    //   layers: [
    //     new TileLayer({
    //       source: new Stamen({
    //         layer: 'watercolor',
    //       }),
    //     }),
    //     new TileLayer({
    //       source: new Stamen({
    //         layer: 'terrain-labels',
    //       }),
    //     }) ],
    //   target: 'map',
    //   view: new View({
    //     center: fromLonLat([-122.416667, 37.783333]),
    //     zoom: 12,
    //   }),
    // });

    // Layer switcher extension
    // this.layerSwitcher = new LayerPopup();
    // this.map.addControl(this.layerSwitcher);
  }

  componentDidMount() {

  }

  render(props) {
    const { section } = this.props
    return (
    <div className='lifemap container' id={section.id}>
      <h2>Life map</h2>
      {/* <BasicMap zoom={2} viewOptions={{
          minZoom: 2
        }} map={this.map}/> */}
        <div id='map' className='map'>

        </div>
    </div>)
  }

}

export default LifeMap;
