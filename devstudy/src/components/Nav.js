import { NavLink } from 'react-router-dom'


function Nav(){
    const htmlcss = encodeURIComponent('HTML/CSS');
    const activeStyle = {
        color: 'black',
    }
    const deactiveStyle = {
        color: '#898989',
    }
    const style=({isActive}) => isActive ? activeStyle : deactiveStyle

    return(
        <div>
            <NavLink to="/" className='main'><h1>DevStudy</h1></NavLink>
            <NavLink to={"/"+htmlcss} style={style}>HTML / CSS</NavLink>
            <NavLink to="/JavaScript" style={style}>JavaScript</NavLink>
            <NavLink to="/DataBase" style={style}>DataBase</NavLink>
            <NavLink to="/JSP" style={style}>JSP</NavLink>
            <NavLink to="/Spring" style={style}>Spring</NavLink>
            <NavLink to="/RegisterClass" style={style}>Register Class</NavLink>
            <NavLink to="/Archive" style={style}>Archive</NavLink>
            <NavLink to="/ManagerMode" style={style}>Manager Mode</NavLink>
        </div>
    )
}

export default Nav;