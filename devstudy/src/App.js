import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
  const htmlcss = encodeURIComponent('HTML/CSS');
  return (
    <div className="App">
      <Nav/>
      
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path={"/"+htmlcss} element={ <div>HTML / CSS</div> } />
        <Route path="/JavaScript" element={ <div>JavaScript</div> } />
        <Route path="/DataBase" element={ <div>DataBase</div> } />
        <Route path="/JSP" element={ <div>JSP</div> } />
        <Route path="/Spring" element={ <div>Spring</div> } />
        <Route path="/RegisterClass" element={ <div>Register Class</div> } />
        <Route path="/Archive" element={ <div>Archive</div> } />
        <Route path="/ManagerMode" element={ <div>Manager Mode</div> } />
        <Route path="*" element={ <div>404 Not Found</div> } />
      </Routes>

    </div>
  );
}

export default App;
