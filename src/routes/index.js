import Home from "../pages/Home";
import Following from "../pages/Following";
import Upload from "../pages/Upload";
import Search from "../pages/Search";
import Profile from "../pages/Profile";
import routesConfig from "../config/routes";
import Live from "../pages/Live/Live";


const publicRoutes = [
  {path: routesConfig.home, component: Home },
  {path: routesConfig.following, component:Following},
  {path: routesConfig.profile, component:Profile},
  {path: routesConfig.live, component:Live },
  {path: routesConfig.upload, component:Upload, layout: null },
  {path: routesConfig.search, component:Search, layout: null },

]
const privateRoutes = [

]
export {privateRoutes, publicRoutes}