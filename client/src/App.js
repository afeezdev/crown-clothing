import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';



import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from "./components/header/header.component";
import ContactPage from './pages/contactPage/contactPage.component';

import { GlobalStyle } from './global.styles';

import { 
  auth, 
  createUserProfileDocument,
  // addCollectionAndDocuments 
  } from './firebase/firebase.utils';

import { selectCollectionsForPreview } from './redux/shop/shop.selector';

import { setCurrentUser } from './redux/user/user.action'; 
import { selectCurrentUser } from './redux/user/user.selector';

import './App.scss'

class App extends Component {
  
  unsubScribeFromAuth = null;


  componentDidMount() {
    const { setCurrentUser,
      //  collectionsArray 
      } = this.props; 

    this.unsubScribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>   {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
         console.log(snapShot.data())
        });
      } 
      
        setCurrentUser(userAuth);
      // addCollectionAndDocuments('collections', collectionsArray.map(({ title, items, linkUrl})=> ({title, items, linkUrl})))
    });
  }

  componentWillUnmount() {
    this.unsubScribeFromAuth(); 
  }



  render() { 
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
 collectionsArray: selectCollectionsForPreview

})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

  
export default connect(
  mapStateToProps,
  mapDispatchToProps 
  )(App); 