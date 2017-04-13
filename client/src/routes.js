import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import ContactPage from './containers/ContactPage.jsx';
import ContactListPage from './containers/ContactListPage.jsx';



const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      component: HomePage
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
      path: '/contact',
      component: ContactPage
    },
     {
      path: '/contactlist',
      component: ContactListPage
    }


  ]
};

export default routes;
