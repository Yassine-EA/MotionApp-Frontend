import Home from "./pages/Home/index";
import Contact from "./pages/Contact";
import Movies from "./pages/Movies";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TvShows from "./pages/TvShows";
import Actors from "./pages/Actors";


export const appRoutes = [
    { path: "", element: <Home /> },
    { path: "movies", element: <Movies /> },
    { path: "tv", element: <TvShows /> },
    { path: "actors", element: <Actors /> },
    { path: "signin", element: <SignIn /> },
    { path: "signup", element: <SignUp /> },
    { path: "contact", element: <Contact /> }
];


