    import React, {useRef, useEffect} from 'react';
import "./header.css";
import SOM from "../../assets/SOM.png"
import bootstrap from 'bootstrap'

const nav__links = [
    {
        path:'/',
        display: 'Home'
    },
    {
        path:'/masters',
        display: 'Masters'
    },
    {
        path:'/services',
        display: 'Services'
    },
    {
        path:'/about',
        display: 'AboutUs'
    },
    {
        path:'#testmonials',
        display: 'Testmonials'
    },
    {
        path:'/Contact ',
        display: 'Contact Us'
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

    const handleClick = (e) => {
        e.preventDefault();
        const targetAttr = e.target.getAttribute('href');
      
        if (targetAttr) {
          if (targetAttr.startsWith('/')) {
            // Handle URL navigation
            window.location.href = targetAttr;
          } else if (targetAttr.startsWith('#')) {
            // Handle anchor link scrolling
            const targetElement = document.querySelector(targetAttr);
            if (targetElement) {
              const location = targetElement.offsetTop;
              window.scrollTo({
                left: 0,
                top: location - 80,
                behavior: 'smooth', // Add smooth scrolling effect
              });
            }
          }
        }
      };
      

    const toggleMenu = ()=> menuRef.current.classList.toggle('menu__active')

    return (
        <header className="header" ref={headerRef}>
            <div className="container">
                <div className="nav__wrapper">
                <div className="logo">
  <a href="/" onClick={() => (window.location.href = '/')}>
    <img src={SOM} style={{ width: "130px", height: "auto", marginTop: "0px" }} alt="" />
  </a>
    
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

                         <span className="mobile__menu" onClick={toggleMenu}>
                                
                      
<i class="ri ri-menu-line" style={{fontSize: "2rem", marginRight:"20px"}}></i>
                        </span>
                </div>
            </div>
        </header>
    );
};

export default Header