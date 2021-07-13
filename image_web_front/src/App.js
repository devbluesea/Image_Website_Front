import './App.css';
import NavBar from './components/NavBar/NavBar';
import Posts from './features/posts/Posts';

function App() {
  return (
    <div className="App">
			<NavBar/>
			<Posts/>
    </div>
  );
}

export default App;
