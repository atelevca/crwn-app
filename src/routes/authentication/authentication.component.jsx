import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import {
  auth,
  // signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./authentication.component.scss";

const Authentication = () => {
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);

      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    })();
  }, []);

  // const logGooglePopupUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
