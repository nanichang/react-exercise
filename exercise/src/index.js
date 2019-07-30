import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './routes/Landing';
import Home from './routes/Home';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import UserList from './routes/UserList';
import UserDatail from './routes/User/UserDatail';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Landing}/>
      <Route path="/home" component={Home}/>
      <Route path="/users" component={UserList}/>
      <Route path="/user-detail/:id" component={UserDatail}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
