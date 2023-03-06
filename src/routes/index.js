import Home from "../pages/Home";
import Following from "../pages/Following";
import Upload from "../pages/Upload";
import Search from "../pages/Search";
import Profile from "../pages/Profile";

const publicRoutes = [
  {path: "/", component: Home },
  {path: "/following", component:Following},
  {path: "/:nickname", component:Profile},
  {path: "/upload", component:Upload, layout: null },
  {path: "/search", component:Search, layout: null }

]
const privateRoutes = [

]
export {privateRoutes, publicRoutes}