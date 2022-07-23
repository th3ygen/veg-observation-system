import { Routes, Route } from 'react-router-dom';

import GrowthChart from './components/GrowthChart';
import UserLayout from './layout/User';

import './App.scss';

function App() {
  return (
    <div className="App">
      {/* <GrowthChart height="300" width="800"/> */}
      <Routes >
        <Route path="/" element={<UserLayout />} >
          <Route path="/test" element={<GrowthChart height="300" width="800"/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
