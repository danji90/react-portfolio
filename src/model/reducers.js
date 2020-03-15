import { SET_MENU_OPEN } from './actions';
import { SET_ACTIVE_SECTION } from './actions';
import { SET_XP_OPEN } from './actions';

const initialState = {
  activeSection: {
    id: 'home',
    name: 'Home',
    nav: 'home',
    tab: true,
  },
  menuOpen: false,
  xpOpen: false,
  sections: [
    {
      id: 'home',
      name: 'Home',
      nav: 'home',
      tab: true,
    },
    {
      id: 'basic',
      name: 'Basic Information',
      nav: 'home',
      tab: false,
    },
    {
      id: 'about',
      name: 'About Me',
      nav: 'about',
      tab: true,
    },
    {
      id: 'lifeMap',
      name: 'Life Map',
      nav: 'lifeMap',
      tab: true,
    },
    {
      id: 'projects',
      name: 'Projects',
      nav: 'projects',
      tab: true,
    },
    {
      id: 'experience',
      name: 'Experience',
      nav: 'experience',
      tab: true,
    },
    {
      id: 'education',
      name: 'Education',
      nav: 'experience',
      tab: false,
    },
    {
      id: 'github',
      name: 'My Github',
      nav: 'github',
      tab: true,
    },
  ],
  educationItems: [
    {
      title: 'MSc Geospatial Technologies',
      details: {
        facility: 'Universität Münster - Universitat Jaume I - Universidade Nova de Lisboa',
        note_1: 'Erasmus Mundus Joint Master Degree (2017-2019)',
        note_2: 'Erasmus Mundus Scholarship Holder',
        thesis: 'Thesis: Interoperability Enhancement of IoT Sensor Network Applications for Environmental Monitoring Using Open Web Standards',
      }
    },
    {
      title: 'BSc Environmental Systems Sciences - Focus on Geography',
      details: {
        facility: 'Universität Graz (2011-2016)',
        thesis: 'Thesis: Investigating rockfall at alpine rock walls using Terrestial Laser Scanning'
      }
    },
    {
      title: 'Certificate in English Language Teaching to Adults (CELTA)',
      details: {
        facility: 'ITTC Bournemouth (July 2015)',
      }
    },
    {
      title: 'Certificate of Bilingualism (Italian-German): Patentino A',
      details: {}
    }
  ],
  projects: [
    {
      name: 'Mapset - Editor',
      facility: 'geOps - Spatial Web',
      description: 'Mapset allows the easy creation of clear and visually appealing layout graphics. With just a few clicks, you can visualize plans for changed stops, communicate the situation with construction projects, ensure customer management at events or provide information about special operational cases on site.',
      images: [
        {
          name: 'plan_editor2.png',
          latest: true,
        },
        {
          name: 'plan_editor1.png'
        },
      ],
      tools: [
        {
          name: 'ReactJs',
          webLink: 'https://reactjs.org/',
        },
        {
          name: 'OpenLayers',
          webLink: 'https://openlayers.org/',
        },
        {
          name: 'Redux',
          webLink: 'https://redux.js.org/',
        },
        {
          name: 'OpenId',
          webLink: 'https://openid.net/',
        },
        {
          name: 'SASS',
          webLink: 'https://sass-lang.com/',
        },
      ],
      keyWords: ['Sensors, Internet of Things, Environmental Monitoring, Smart Farming, MQTT, OGC, Interoperability, SensorThings API, SOS, Mozilla IoT, Pika'],
      webLink: 'https://mapset.io',
      latest: true,
    },
    {
      name: 'SEnviro for Agriculture',
      facility: 'Universitat Jaume I',
      description: 'This project emerged at Universitat Jaume I and focuses on the development of an IoT full stack for monitoring vineyards. In the scope of my Master Thesis (Interoperability Enhancement of IoT Sensor Network Applications for Environmental Monitoring Using Open Web Standards), my work consisted of the deployment and comparison of open source Sensor Web Standard implementations to increase the potential interoperability for agricultural IoT applications.',
      images: [
        {
          name: 'senviro3.jpg'
        },
        {
          name: 'senviroConnect.jpg'
        }
      ],
      tools: [
        {
          name: 'Linux - Ubuntu',
          webLink: undefined,
        },
        {
          name: 'Docker',
          webLink: 'https://www.docker.com/',
        },
        {
          name: 'Python',
          webLink: undefined,
        },
        {
          name: 'RabbitMQ',
          webLink: 'https://www.rabbitmq.com/',
        },
        {
          name: 'Frost-Server',
          webLink: 'https://www.iosb.fraunhofer.de/servlet/is/80113/',
        },
        {
          name: '52North-SOS',
          webLink: 'https://52north.org/software/software-projects/sos/',
        },
        {
          name: 'WebThing API',
          webLink: 'https://iot.mozilla.org/wot/',
        },
        {
          name: 'Google Cloud Platform',
          webLink: 'https://cloud.google.com/',
        },
        {
          name: 'Postman',
          webLink: 'https://www.postman.com/',
        },
      ],
      keyWords: ['Sensors, Internet of Things, Environmental Monitoring, Smart Farming, MQTT, OGC, Interoperability, SensorThings API, SOS, Mozilla IoT, Pika'],
      webLink: 'http://www.senviro.uji.es/',
    },
    {
      name: 'GeoMundus Conference 2018',
      facility: 'Universidade Nova de Lisboa',
      description: "GeoMundus is a free international symposium organised by the students from the Erasmus Mundus Master's of Science in Geospatial Technologies. The conference aims to share cutting-edge scientific research, knowledge, and skills in the fields of Geospatial Technologies, Geoinformatics, and Geosciences, including but not limited to geographic information systems and sciences, spatial cognition, geography, and spatial data sciences. </br> As part of the GeoMundus web team, I was in charge of the GeoMundus website development and maintenance. This included collaborating with all the other teams and regularly updating website content.",
      images: [
        {
          name: 'geomundus.jpg'
        },
        {
          name: 'geomundus1.jpg'
        }
      ],
      tools: [
        {
          name:'HTML5',
          webLink: undefined,
        },
        {
          name:'javaScript',
          webLink: undefined,
        },
        {
          name:'CSS',
          webLink: undefined,
        },
        {
          name:'Google Maps API',
          webLink: undefined,
        },
        {
          name:'Google Forms',
          webLink: undefined,
        },
      ],
      keyWords: [],
      webLink: 'http://geomundus.org/2019/',
    },
    {
      name: 'ELIPPSS Data Portal',
      facility: 'University of Münster - Institute for Geoinformatics',
      description: "This project emerged from the Unmanned Aerial Systems course at the Institute for GeoInformatics in the University of Münster. The main objective of the project was the development and application of exploratory approaches using several geospatial technologies to monitor the renaturation process in the Aa River, which flows through Münster. I was part of the Web Portal team, one of seven collaborating teams. Our objective was to use mostly open-source technologies to create a data exploration portal for heterogenous data created in the scope of the project.",
      images: [
        {
          name: 'elippss.jpg',
        },
        {
          name: 'elippss1.jpg'
        }
      ],
      tools: [
        {
          name:'javaScript',
          webLink: undefined,
        },
        {
          name:'Nodejs',
          webLink: 'https://nodejs.org/en/',
        },
        {
          name:'AngularJS',
          webLink: 'https://angularjs.org/',
        },
        {
          name:'AngularHTTPAuthentication',
          webLink: 'https://github.com/cornflourblue/angular-authentication-example',
        },
        {
          name:'HTML5',
          webLink: undefined,
        },
        {
          name:'CSS',
          webLink: undefined,
        },
        {
          name:'Bootstrap',
          webLink: 'https://getbootstrap.com/',
        },
        {
          name:'LeafletJS',
          webLink: 'leafletjs.com/',
        },
        {
          name:'Heroku',
          webLink: 'https://www.heroku.com/',
        },
        {
          name:'Google Fusion Table',
          webLink: 'https://support.google.com/fusiontables/answer/9551050?visit_id=637197861880426997-2146411836&rd=1',
        },
      ],
      keyWords: [],
      webLink: 'http://elippss.herokuapp.com/',
    },
  ]
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case SET_MENU_OPEN:
      return {
        ...state,
        menuOpen: action.data,
      };
    case SET_ACTIVE_SECTION:
      return {
        ...state,
        activeSection: action.data,
      };
    case SET_XP_OPEN:
      return {
        ...state,
        xpOpen: action.data,
      };
    default:
        return {
          ...state,
        };
    }
}