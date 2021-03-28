import React from 'react';
import styled from 'styled-components';


const Sidebar = (props) => {

    const {
        openSidebar
    } = props;

    return (
        <Container openSidebar={openSidebar}>
          <Menu>
              <MenuItem>메뉴1</MenuItem>
              <MenuItem>메뉴2</MenuItem>
              <MenuItem>메뉴3</MenuItem>
              <MenuItem>메뉴4</MenuItem>
              <MenuItem>메뉴5</MenuItem>
          </Menu>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0; 
  left: 0;
  z-index: 1000;
  width: 300px;
  background:#fff;
  padding: 80px 0;
  overflow-y: auto;
  transition: 0.4s;
  transform: ${props => props.openSidebar ? 'none' : 'translateX(-100%)' }; 
  border-right:1px solid #ddd;
  
`;

const Menu = styled.div`
    padding: 10px 20px;
`;

const MenuItem = styled.div`
    
`;
export default Sidebar;