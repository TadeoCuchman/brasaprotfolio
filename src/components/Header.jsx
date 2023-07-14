import React, {useEffect, useState} from "react"
import './Header.css'
import {Link, useNavigate} from "react-router-dom"

const Header = ({titles}) => {

  return (
    <header>
        <h1>
            mateobraselli
        </h1>
        <ul>
            <Link to='/'>
                <li>Home</li>
            </Link>
            {
                titles.map((title, index) => {
                   return <NewLink key={index} title={title}/>
                })
            }
            <Link to='about'>
                <li>About</li>
            </Link>
        </ul>
    </header>
  )
};

const NewLink = ({title}) => {
    const [subMenu, setSubMenu] = useState(false)
    const navigate = useNavigate();

    return (
        <div onMouseEnter={(e) => {
            if(title.subpaginas.length > 0){
                setSubMenu(true);
            }
        }}
        onMouseLeave={(e) => {
            setSubMenu(false);
        }}
        onClick={()=> {
            if(title.subpaginas.length == 0){
                navigate(title.path)
                setSubMenu(false);
            }

        }}>
        <li style={subMenu ? {color:'black'} : {}}>{title.pagina}</li>
        {subMenu ? <SubMenu titles={title.subpaginas} setSubMenu={setSubMenu}/> : ''}
        </div>
    )
}

const SubMenu = ({titles, setSubMenu}) => {

    return (
        <ul className="subMenu">
            {
                titles.map((title, index) => {
                    return <Link to={title.path} key={index}><li> {title.subpagina} </li></Link>
                })
            }
        </ul>
    )


}

export default Header;
