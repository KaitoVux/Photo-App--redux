import { SignIn } from 'features/Auth/pages/SignIn';
import firebase from 'firebase';
import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from './components/NotFound';


// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
}
firebase.initializeApp(firebaseConfig);

function App() {

useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(
    async (user: any) => {
        if (!user) {
        console.log('not logged in');
        return;
        }
        console.log('logged in user: ', user.displayName);
        const token = await user.getIdToken();
        console.log(token);

    });
    return () => unregisterAuthObserver();
}, [])

return (
    <div className="photo-app">
        <Suspense fallback={<div>Loading ...</div>}>
            <Router>
            <Switch>
                <Redirect exact from="/" to="/photos" />
                <Route path="/photos" component={Photo} />
                <Route path='/sign-in' component={SignIn} />
                <Route component={NotFound} />
            </Switch>
            </Router>
        </Suspense>
    </div>
    );
}

export default App;