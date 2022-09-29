import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './hocs/Layout';
import Login from './containers/Login';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';


import PrivateRoute from './hocs/privateRoute';

import store from './store';


// const App = () =>{
  
//   <Provider store={store}>
//     <h1>bien</h1>
//     <Router> 
//       <Layout>
//         <Switch>
//           <Route exact path='/' component={Home} />
//           <Route exact path='/login' component={Login} />
//           <PrivateRoute exact path='/dashboard' component={Dashboard} />
//         </Switch>
//       </Layout>
//     </Router>
//   </Provider>
// }
function App() {
  
  return (
  <Provider store={store}>
    <h1>bien</h1>
    <Router> 
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
  )
}
export default App;
