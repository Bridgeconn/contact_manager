import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import ContactPage from './containers/ContactPage.jsx';
import ContactListPage from './containers/ContactListPage.jsx';
import ContactShowPage from './containers/ContactShowPage.jsx';
import AfterLogin from './components/AfterLogin.jsx';
import Auth from './modules/Auth';


const routes = {
  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, AfterLogin);
        } else {
          callback(null, HomePage);
        }
      }
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },
    {
      path: '/contacts/add_contact',
      component: ContactPage
    },
    {
      path: '/contact_list',
      component: ContactListPage
    },
    {
      path: '/contact_details',
      component: ContactShowPage
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        replace('/');
      }
    }
    
  ]
};

export default routes;
