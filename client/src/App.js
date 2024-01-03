import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <div className="w-full h-full min-w-[400px] min-h-screen bg-primary-color text-primary-color font-primary-font-regular px-2 xl:px-12">
      <Routes>
        <Route path='/' element={ <Home />} />
      </Routes>
    </div>
  );
}

export default App;
