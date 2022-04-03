import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import loginImage from "./Img/google.svg";
import { AuthContext } from "./context";
import { refreshTokenSetup } from '../utils/refreshToken';




const clientId ="621066569678-be1gnmtpcso8mft05aar9dcro217ro4e.apps.googleusercontent.com";

function LoginHooks() {

  const { SignIn } = React.useContext(AuthContext);
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    SignIn(Object.values(res));
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button">
        <div className='googleImg'>
        <img src={loginImage} alt="google login" className="icon"></img>
      </div>
    </button>

  );
}

export default LoginHooks;