import React from 'react';
import styled from 'styled-components';
import Sidebar from "../Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {appActions} from "../../../redux/actionCreators";

const Appbar = () => {

    const app= useSelector(state=> state.app);

    return (
        <Container>

            <Logo>Logo</Logo>
            <Gnb>
            <Nav>
                <NavItem to={"/"}>Home</NavItem>
                <NavItem to={"/user"}>User</NavItem>
            </Nav>
            <ButtonMenu onClick={()=> appActions.updateState({
                openSidebar: !app.openSidebar
            })}>메뉴</ButtonMenu>
            </Gnb>
            <Sidebar openSidebar={app.openSidebar}/>
        </Container>
    )
}

const Container = styled.div`   
    height: 70px; 
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;  
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.15);
  
`;

const Logo = styled.div`
    
`;

const Gnb = styled.div`
  display: flex;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 25px;  
  cursor:pointer;
  
`;

const ButtonMenu = styled.div`
  cursor:pointer;
  display: flex;
  align-items: center;  
  padding: 0 20px;
  margin-left: 20px;
`;
export default Appbar;