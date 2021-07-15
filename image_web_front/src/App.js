import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Posts from './features/posts/Posts';
import Signup from './features/signup/Signup';
import Login from './features/login/Login';

function App() {
  return (
    <div className="App">
			<NavBar/>
			<Route path="/" component={Posts} exact={true} />
			<Route path="/signup" component={Signup} />
			<Route path="/login" component={Login} />
    </div>
  );
}

export default App;
