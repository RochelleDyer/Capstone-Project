import Home from '../pages/Home';
import AltDashboard from '../pages/AltDashboard';
import Genres from '../pages/Genres';
import Contact from '../pages/Contact';
import Favs from '../pages/Favs'
import BluDashboard from '../pages/BluDashboard';
import CountryDashboard from '../pages/CountryDashboard';
import HiphopDashboard from '../pages/HiphopDashboard';
import MetalDashboard from '../pages/MetalDashboard';
import RnbDashboard from '../pages/RnbDashboard';
import Profile from '../pages/Profile';
import SignUp from '../pages/SignUp';
import Spotify from '../pages/Spotify';

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false,
      
    },

    {
      path: '/spotify',
      component: Spotify,
      name: "Spotify",
      protected: false,
    },

    {
      path: '/signup',
      component: SignUp,
      name: 'Sign Up',
      protected: false
    },

    {
      path: "/altdashboard",
      component: AltDashboard,
      name: "Alternative Music",
      protected: false,
      
    },

    {
        path: "/bludashboard",
        component: BluDashboard,
        name: "Blues Music",
        protected: false,
        
      },

    {
        path: "/countryDashboard",
        component: CountryDashboard,
        name: "Country Music",
        protected: false,
        
      },

    {
        path: "/hiphopDashboard",
        component: HiphopDashboard,
        name: "Hip Hop Music",
        protected: false,
        
      },

    {
        path: "/metalDashboard",
        component: MetalDashboard,
        name: "Heavy Metal Music",
        protected: false,
        
      },

    {
        path: "/rnbDashboard",
        component: RnbDashboard,
        name: "R&B Music",
        protected: false,
        
      },

    {
        path: "/favs",
        component: Favs,
        name: "Staff Picks",
        protected: false
        
    },

    {
        path: "/contact",
        component: Contact,
        name: "Contact Us",
        protected: false
        
    },

    {
        path: "/genres",
        component: Genres,
        name: "Music Genres",
        protected: true
        
    },

    {
        path: "/profile",
        component: Profile,
        name: "Profile",
        protected: true
      
  },
 
  ];

  export default routes