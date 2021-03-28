import React from 'react';
import styled from 'styled-components';
import {AiOutlineClose} from "react-icons/ai";
import {appActions} from "../../../redux/actionCreators";

const Popup = (props) => {

    const {
        title,
        description,
    } = props;

    return (
        <Container>
            <Content>
            <Title>{title}</Title>
            <Description>{description}</Description>
                <Close onClick={ () => appActions.updateState({
                    popup: {}
                })}>
                    <AiOutlineClose/>
                </Close>
            </Content>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1100;
  background:rgba(0,0,0,0.7);
  display: flex;
  align-items:center;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  width: 300px; 
  min-height: 400px;
  background:#fff;
  padding:30px;
`;

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 15px;  
  font-weight: 600;
`;

const Description = styled.div`
  font-size: 18px;
  line-height: 1.6;
`;

const Close = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  font-size: 22px;
  cursor:pointer;
`;

export default Popup;