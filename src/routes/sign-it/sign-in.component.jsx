import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    console.log(res);
  };

  return (
    <div>
      <h1>Sign In!</h1>
      <button onClick={logGoogleUser}> Sign in Google</button>
    </div>
  );
};

export default SignIn;
