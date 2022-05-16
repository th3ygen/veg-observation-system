import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Topbar></Topbar>
    </div>
  );
}

export default App;
