import './styles/App.css';
import { Routes, Route, NavLink, useParams } from 'react-router-dom'
import Home from './pages/Home';
import datas from './components/datas';
import Data from './components/Data';

function App() {
  const activeStyle = {
    color: 'black',
  }
  const deactiveStyle = {
      color: '#898989',
  }
  const style=({isActive}) => isActive ? activeStyle : deactiveStyle

  return (
    <div className="App">
      <ul className='list'>
        <li>
          <NavLink to="/" className='main'><h1>DevStudy</h1></NavLink>
        </li>
        {datas.map(data=>(
          <li key={data.id}>
            <NavLink to={`/datas/${data.id}`} style={style}>{data.title}</NavLink>
          </li>
        ))}


      </ul>
      
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route path={"/datas/:dataId"} element={<Data/>} />
      </Routes>

    </div>
  );
}

export default App;
