import React,{useState} from 'react';
import {Button} from'@material-ui/core';
import css from './Sidebar.css';
import {Link} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { styled } from 'styled-components';
import {SidebarData} from './SidebarData'
import SubMenu from './SubMenu';
import { AiOutlineUser , AiOutlineMenu} from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const Nav = styled.div`
// background-image: linear-gradient(to bottom right, rgb(180, 222, 247), rgb(245, 157, 226));
height : 80px;
display:flex;
justify-content: flex-end;
align-items: center;


`;

const NavIcon = styled(Link)`
// margin-right: 1rem;
font-size: 2rem;
height:60px;
gap:2rem;
display:flex;
align-items: center;
text-decoration:none;
justify-content:space-between;

@media screen and (max-width:330px){
    
        flex:75%;
        max-width: 75%;
        flex-wrap: wrap;
        vertical-align: middle;
        justify-content: flex-end;
    
}

`;

const SidebarNav = styled.nav`
background: rgb(200, 229, 245);
color : #0000FF;
width:250px;
height:100vh;
display:flex;
position:fixed;
top:0;
right:${({ sidebar }) => (sidebar ? '0' : '-100%')};
transition:350ms;
z-index:100%;
`;

const SidebarWrap = styled.div`
width:100%;
color : #0000FF;
justify-content:flex-end;
`;

const Title = styled.div`
// padding-left:5px;
align-items: center;
display:flex;
justify-content:flex-start;
flex:25%;
max-width:25%;


`;

const Header = styled.div`
// padding-left: 1.5rem;
// padding-right: 1.5rem;
display: flex;
background-color: linear-gradient(to bottom right, rgb(180, 222, 247), rgb(245, 157, 226));
margin-top: -2rem;
margin-bottom: -2rem;
align-items:center;
flex:75%;
max-width:75%;
justify-content:flex-end;





`;

const Search = styled.h6`
 color:blue;

 @media screen and (max-width:585px){
    
	display:none;

}

`;

const Head = styled.div`
 display:flex;
 position:fixed;
 background-image: linear-gradient(to bottom right, rgb(180, 222, 247), rgb(245, 157, 226));
 height : 80px;
 width:100%;
 align-items:center;
 top:0;
 padding:0px 20px;


`;

const Packup = styled.h1`
font-color: linear-gradient(to bottom right, rgb(180, 222, 247), rgb(245, 157, 226));

`;






function Sidebar() {

	const [sidebar,setSidebar] = useState(false)

	const showSidebar = ()=>setSidebar(!sidebar);

	return (
		<Head>

<Title>
        <Packup className='high'>Packup</Packup>
		
      </Title>
	  
		<Header>
		
	  <Nav>
	  
		<NavIcon to = '#'>
			<input placeholder='Search'></input>
			<Search>Search</Search>
			
		<AiOutlineUser / >
               <FiShoppingCart />
          <FaIcons.FaBars onClick={showSidebar} />
		</NavIcon>
	  </Nav>
	  </Header>
	  
	  <SidebarNav sidebar={sidebar}>
       <SidebarWrap>
	   
		<NavIcon to = '#'>
		
			<AiIcons.AiOutlineClose onClick={showSidebar}/>
		</NavIcon>
		{SidebarData.map((item,index)=>{
			return <SubMenu item={item} key={index} />;
		})}
		</SidebarWrap>
	  </SidebarNav>
	  </Head>
	);
  }
  
  export default Sidebar;