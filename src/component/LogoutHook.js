import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { AuthContext } from "./context";

const clientId =
"621066569678-be1gnmtpcso8mft05aar9dcro217ro4e.apps.googleusercontent.com";

function LogoutHooks() {

  const{SignOut} = React.useContext(AuthContext);
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
    SignOut();
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default LogoutHooks;