import "./App.css";
import { react, useEffect, useReducer, useMemo } from "react";
import { Levels } from "react-activity";
import { AuthContext } from "./component/context";
import WelcomePage from "./page/WelcomePage";
import LoginPage from "./page/LoginPage";
import RegistrationPage from "./page/Registrationpage";
import "react-activity/dist/Levels.css";

import { Route, BrowserRouter as Router ,Switch} from "react-router-dom";

function App() {

  const initialLoginState = {
    isLoading: true,
    userToken: null,
    userName: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      default:
        return {
          ...prevState,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      SignIn: (foundUser) => {
        // setUserToken('fgkj');
        // setIsLoading(false);
        const userToken = String(foundUser[4]);
        const userName = foundUser[1];

        console.log("yes");
        // const userToken = String(foundUser[4]);

        // const userName = foundUser[3];

        localStorage.setItem("userToken", userToken);
        localStorage.setItem("userName", userName);
        // localStorage.setItem('userToken', userToken);

        // console.log('user token: ', userToken);
        dispatch({
          type: "LOGIN",
          id: userName,
          token: userToken,
        });
      },
      SignOut: () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userName");
        // localStorage.multiRemove(['tasksItems', 'email', 'password', 'data'])

        dispatch({
          type: "LOGOUT",
        });
      },
      signUp: () => {
        // setUserToken('fgkj');
        // setIsLoading(false);

        dispatch({
          type: "REGISTER",
        });
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(() => {
      let userToken;
      userToken = null;
      userToken = localStorage.getItem("userToken");

      // console.log('user token: ', userToken);
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    
    return (
      <div className="Levels">

        <Levels color="#DC7633" size={50}/>
    
      </div>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      {loginState.userToken === null ? (
        <div>
          <Router>
            <Switch>
              <Route path="/" exact={true} component={LoginPage} />
              <Route path="/Registration" component={RegistrationPage} />
            </Switch>
          </Router>
        </div>
      ) : (
        <div className="App">
          <Router>
            <Switch>
              <Route path="/" exact={true}>
                <WelcomePage />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </AuthContext.Provider>
  );
}

export default App;
