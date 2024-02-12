import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { setWindowWidthHeight } from './context/GlobalContext/globalSlice';
import { useEffect } from 'react';



function App() {
  const dispatch = useDispatch();
  const handlResize = () => dispatch(setWindowWidthHeight());
  
  useEffect(() => {
    window.addEventListener('resize', handlResize);
    return () => window.removeEventListener('resize', handlResize);
  }, [])

  return (
    <div className="w-full h-full min-h-screen bg-primary-color text-primary-color font-primary-font-regular overflow-hidden">
      <Routes>
        <Route path='/' element={ <Home />} />
      </Routes>
    </div>
  );
}

export default App;
