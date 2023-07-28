import React, { useEffect, useState } from "react"
import './Header.css'
import { Link, useNavigate } from "react-router-dom"

const Header = ({ titles, setLoading }) => {

    const navigate = useNavigate();

    useEffect(() => {

        if (titles.length > 0) {
            navigate(titles[0].path)
        }
    }, [titles])

    return (
        <header>
            <h1>
                mateobraselli
            </h1>
            <h5>Photographer</h5>
            <ul>
                {
                    titles.map((title, index) => {
                        return <NewLink key={index} setLoading={setLoading} title={title} navigate={navigate} />
                    })
                }
                <Link to='about'>
                    <li>About</li>
                </Link>
            </ul>
        </header>
    )
};

const NewLink = ({ title, setLoading, navigate }) => {
    const [subMenu, setSubMenu] = useState(false)

    return (
        <li style={{ position: 'relative' }}
            onMouseEnter={(e) => {
                if (title.subpaginas.length > 0) {
                    setSubMenu(true);
                }
            }}
            onMouseLeave={(e) => {
                if (title.subpaginas.length > 0) {
                    setSubMenu(false);
                }
            }}
            onClick={() => {
                if (title.subpaginas.length == 0) {
                    navigate(title.path)
                    setSubMenu(false);
                    setLoading(true)
                }

            }}>
            <div style={subMenu ? { color: 'black' } : {}}>{title.pagina}</div>
            {subMenu ? <SubMenu titles={title.subpaginas} setLoading={setLoading} navigate={navigate} /> : ''}
        </li>
    )
}

const SubMenu = ({ titles, navigate, setLoading }) => {


    return (
        <ul className="subMenu">
            {
                titles.map((title, index) => {
                    return <li key={index} onClick={() => {
                        navigate(title.path)
                        setLoading(true)
                    }}
                    > {title.subpagina} </li>
                })
            }
        </ul>
    )


}

export default Header;
