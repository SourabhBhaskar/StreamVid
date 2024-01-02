import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <div className="border-2 border-red-600 w-full h-full min-w-screen min-h-screen bg-primary-color text-primary-color font-primary-font-regular">
      <Routes>
        <Route path='/' element={ <Home />} />
      </Routes>
    </div>
  );
}

export default App;
