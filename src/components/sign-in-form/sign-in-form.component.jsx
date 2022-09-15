import { async } from "@firebase/util";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in-form.style.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password!");
          break;
        case "auth/user-not-found":
          alert("User not found!");
          break;
        default:
          break;
      }

      if (error.code === "auth/wrong-password") alert("Incorrect password!");
      if (error.code === "auth/user-not-found") alert("User not found!");
    }
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-up-container">
      <h2>I already have an account</h2>
      <span>Sing in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={changeHandler}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={changeHandler}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In!</Button>
          <Button
            type="button"
            buttonType="google"
            onClick={logGooglePopupUser}
          >
            Google!
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
