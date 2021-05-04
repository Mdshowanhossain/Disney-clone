import React from 'react';
import styled from 'styled-components';
const Header = () => {
    return (
        <div>
            <Nav>
                <Logo src="/images/logo.svg" alt="" />

                <NavMenu>
                    <a  >
                        <img src="/images/home-icon.svg" alt="" />
                        <span>HOME</span>
                    </a>

                    <a>
                        <img src="/images/search-icon.svg" alt="" />
                        <span>SEARCH</span>
                    </a>

                    <a>
                        <img src="/images/watchlist-icon.svg" alt="" />
                        <span>WATCHLIST</span>
                    </a>

                    <a>
                        <img src="/images/original-icon.svg" alt="" />
                        <span>ORIGINALS</span>
                    </a>

                    <a>
                        <img src="/images/movie-icon.svg" alt="" />
                        <span>MOVIES</span>
                    </a>

                    <a>
                        <img src="/images/series-icon.svg" alt="" />
                        <span>SERIES</span>
                    </a>
                </NavMenu >
                <UserImg src="/images/profile.jpg" />

            </Nav>
        </div>
    );
};

export default Header;

const Nav = styled.nav`
    height:70px;
    background:#090b31;
    display:flex;
    align-items:center;
    padding: 0 36px;
    overflow- x:hidden;
`

const Logo = styled.img`
    width:80px;

`

const NavMenu = styled.div`
display:flex;
flex:1;
margin-left:20px;
align-items:center;
a{
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;
 
    img{
        height:20px;
    }
    span{
        font-size:13px;
        letter-spacing: 1.42px;
        position:relative;
        &:after{
            content:"";
            height:2px;
            background:white;
            position:absolute;
            // top:0;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transform-origin:left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.96) 0s;
            transform: scaleX(0);
        }
    }
    
    &:hover{
        span:after{
            transform:scaleX(1);
            opacity:1;
        }
    }

}

`
const UserImg = styled.img`
width:50px;
height:50px;
border-radius:50%;
background-color:white;
cursor:pointer;



`