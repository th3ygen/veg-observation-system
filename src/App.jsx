import GrowthChart from './components/GrowthChart';
import './App.scss';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
function App() {
  return (
    <div className="App">
      <GrowthChart height="300" width="800"/>
      <Sidebar></Sidebar>
      <Topbar></Topbar>
    </div>
  );
}

export default App;
