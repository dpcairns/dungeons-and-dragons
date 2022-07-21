import './App.css';
import Auth from './AuthPage';
import { useState } from 'react';
import CreateCharacter from './CreateCharacter';
import Profile from './Profile';
import { client } from './services/client';
import Detail from './Detail';
import CreateCampaign from './CreateCampaign';
import { logout } from './services/fetch-utils';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';


function App() {
  const [user, setUser] = useState(client.auth.user());

  async function handleLogoutClick() {
    await logout();
    setUser('');

  }

  return (
    <div className="App">
      <Router>
        <div className='navigation'>
          <nav>
            <span id='profile-link'><Link to ="/profile">Profile</Link></span>
            <span id='charcreate-link'></span><Link to = "/createcharacter">Create a new character</Link>
            <Link to="/createcampaign">Create a new campaign</Link>
            {user && 
          <button id='logout-button' onClick={handleLogoutClick}>Logout</button>}
          </nav>
        </div>
        <img className='die' src='./assets/die.png' alt='die'></img>
        <Switch>
          <Route exact path="/">
            {
              !user ? <Auth setUser={setUser} /> : <Redirect to="/profile" />
            }
          </Route>
          <Route exact path="/createcharacter">
            {
              user ? <CreateCharacter /> : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/profile">
            {
              user ? <Profile /> : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/detail/:id">  
            {
              user ? <Detail/> : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/createcampaign">
            {
              user ? <CreateCampaign /> : <Redirect to="/" />
            }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;