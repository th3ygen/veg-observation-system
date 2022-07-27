import { Routes, Route } from 'react-router-dom';

import GrowthChart from './components/GrowthChart';
import UserLayout from './layout/User';
import Dashboard from './pages/Dashboard';

import './App.scss';

function App() {
  return (
    <div className="App">
      {/* <GrowthChart height="300" width="800"/> */}
      <Routes>
        <Route path="user" element={<UserLayout />} >
          <Route path="test" element={<GrowthChart height="300" width="800"/>} />
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
