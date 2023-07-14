import React, {useEffect, useState} from "react"
import './Header.css'
import {Link, useNavigate} from "react-router-dom"

const Header = ({titles, setLoading}) => {

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
                   return <NewLink key={index} setLoading={setLoading} title={title}/>
                })
            }
            <Link to='about'>
                <li>About</li>
            </Link>
        </ul>
    </header>
  )
};

const NewLink = ({title, setLoading}) => {
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
                setLoading(true)
            }

        }}>
        <li style={subMenu ? {color:'black'} : {}}>{title.pagina}</li>
        {subMenu ? <SubMenu titles={title.subpaginas} setLoading={setLoading} navigate={navigate}/> : ''}
        </div>
    )
}

const SubMenu = ({titles, navigate, setLoading}) => {


    return (
        <ul className="subMenu">
            {
                titles.map((title, index) => {
                    return <li  key={index} onClick={() =>{
                        navigate(title.path)
                        setLoading(true)}}
                    > {title.subpagina} </li>
                })
            }
        </ul>
    )


}

export default Header;
