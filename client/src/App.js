import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <div className="w-full h-full min-h-screen bg-primary-color text-primary-color font-primary-font-regular overflow-hidden">
      <Routes>
        <Route path='/' element={ <Home />} />
      </Routes>
    </div>
  );
}

export default App;
