import { Switch, Route, Redirect } from "react-router-dom";
import React, { Suspense, useContext } from "react";
import { IdTokenn } from "./components/ContextAPI/IdToken";

import Layout from "./components/Layout/Layout";
// import UserProfile from './components/Profile/UserProfile';
// import AuthPage from './pages/AuthPage';
import HomePage from "./pages/HomePage";
import { IdTokenProvider } from "./components/ContextAPI/IdToken";
import AxiosUse from "./Axioos";
import FetchUse from "./pages/FetchUse";
import AuthUse from "./pages/AuthUse";

const AuthPage = React.lazy(() => import("./pages/AuthPage"));
const UserProfile = React.lazy(() =>
  import("./components/Profile/UserProfile")
);

function App() {
  const [idToken, setIdToken] = useContext(IdTokenn);
  return (

    <Layout>

        <AuthUse/>
      {/* <AxiosUse/> */}
      <FetchUse/>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          {/* <Route path='/auth/:id'> */}
          <Route path="/auth">{!idToken.bool && <AuthPage />}</Route>
          <Route path="/profile">
            {idToken.bool ? <UserProfile /> : <AuthPage />}
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
