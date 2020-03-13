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
      id: 'lifeMap',
      name: 'Life Map',
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