import React, {useRef, useEffect} from 'react';
import "./header.css";
import SOM from "../../assets/SOM.png"

const nav__links = [
    {
        path:'#home',
        display: 'Home'
    },
    {
        path:'#masters',
        display: 'Masters'
    },
    {
        path:'#services',
        display: 'Services'
    },
    {
        path:'#Gallery',
        display: 'Gallery'
    },
    {
        path:'#testmonials',
        display: 'Testmonials'
    },
    {
        path:'#contactus',
        display: 'Contact us'
    },
]


const Header= ({theme,toggleTheme}) => {
    
    const headerRef = useRef(null)

    const menuRef = useRef(null)

    const headerFunc = ()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop>80){
            headerRef.current.classList.add('header__shrink')
        }
        else{
            headerRef.current.classList.remove('header__shrink')
        }
    }
    
    useEffect(()=>{
        window.addEventListener('scroll', headerFunc)

        return ()=>window.removeEventListener('scroll', headerFunc)
    },[])


    const handleClick = e =>{
              e.preventDefault ()

              const targetAttr = e.target.getAttribute('href')

              const location  = document.querySelector(targetAttr).offsetTop;

              window.scrollTo(
                {
                    left:0,
                    top: location  - 80,
                }
              )
    }

    const toggleMenu = ()=> menuRef.current.classList.toggle('menu__active')

    return (
        <header className="header" ref={headerRef}>
            <div className="container">
                <div className="nav__wrapper">
                    <div className="logo">
                        <img src={SOM} style={{width:"100px", height: "100px"}} alt=""/>
                    </div>
                    {/*=====================Nav==============*/}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className='menu'>
                            {
                                nav__links.map((item,index)=>(
                                    <li className="menu__item" key={index}>
                                        <a 
                                        href={item.path} 
                                        onClick={handleClick} 
                                        className="menu__link"
                                        >
                                            {item.display}
                                         </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                              {/*=====================Lightmode==============*/}
                              <div className="light__mode" >
                            <span onClick={toggleTheme}>
                                {
                                    theme==='light-theme' ? (<span>  Dark </span> ):(<span> Light </span>
                                   ) }
                              
                            </span>
                         </div>
                         <span className="mobile__menu" onClick={toggleMenu}>
                            <i class="ri-menu-line"></i>
                        </span>
                </div>
            </div>
        </header>
    );
};

export default Header