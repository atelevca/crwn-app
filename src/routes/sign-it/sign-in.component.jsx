import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);

      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    })();
  }, []);

  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In!</h1>
      <button onClick={logGooglePopupUser}> Sign in Google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        {" "}
        Sign in Google redirect
      </button>
    </div>
  );
};

export default SignIn;
