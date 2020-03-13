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