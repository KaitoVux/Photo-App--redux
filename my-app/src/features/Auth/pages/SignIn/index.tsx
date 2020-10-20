import firebase from "firebase";
import React, { FC, useState } from "react";
import { StyledFirebaseAuth } from "react-firebaseui";

export const SignIn: FC = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: "redirect",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    signInSuccessUrl: '/photos',
  };
  return (
    <div>
      <div className="text-center">
        <h2>Login Form</h2>

        <p>or login with social account</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    </div>
  );
};
