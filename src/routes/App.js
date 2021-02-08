import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OverlayFullPage from "components/OverlayFullPage";
import { GifProvider } from "context/GifContext";
import { AuthProvider } from "context/AuthContext";
import Error404 from "pages/Error/Error404";
import { HelmetProvider } from "react-helmet-async";

const Home = React.lazy(() => import("pages/Home"));
const Search = React.lazy(() => import("pages/Search"));
const Favs = React.lazy(() => import("pages/Favs"));
const Login = React.lazy(() => import("pages/Login"));
const SignUp = React.lazy(() => import("pages/SignUp"));

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <GifProvider>
          <HelmetProvider>
            <Suspense fallback={OverlayFullPage}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/gifs/search/:keyword" component={Search} />
                <Route path="/gifs" component={Favs} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/" component={Error404} />
              </Switch>
            </Suspense>
          </HelmetProvider>
        </GifProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
