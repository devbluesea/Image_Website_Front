import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Posts from './features/posts/Posts';
import Signup from './features/signup/Signup';
import Login from './features/login/Login';
import Write from './features/posts/Write';
import MyPageList from './components/NavBar/MyPageList';

function App() {
  return (
    <div className="App">
			<NavBar/>
			<Route path="/" component={Posts} exact={true} />
			<Route path="/signup" component={Signup} />
			<Route path="/login" component={Login} />
			<Route path="/write" component={Write} />
			<Route path="/mypage" component={MyPageList}/>
    </div>
  );
}

export default App;
