import React from 'react';
import styled from 'styled-components';
import {appActions} from "../../../redux/actionCreators";

const Visual = () => {


    return (
        <Container>
            <StyledContentContainer>
                <Text>

                    <h1>Hello</h1>
                    <Button onClick={() => appActions.updateState({
                        popup: {
                            title:"Lorem ipsum dolor sit.",
                            description: "consectetur adipisicing elit. Aliquam consequuntur culpa cum cumque debitis dolore doloremque eum excepturi, fugiat in inventore laboriosam modi nemo, nostrum odit, quasi quos sint tenetur?   "
                        }
                    })}>팝업</Button>
                </Text>
            </StyledContentContainer>
        </Container>
    )
}

const Container = styled.div`
  height: 700px;
  background: url("https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60") 50% 100% /cover no-repeat;
  position: relative;
  &:before{
    content: '';
    position:absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background:rgba(0,0,0,0.5);
  }
`;

const StyledContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Text = styled.div`
  color:#fff;
  text-align:center;
    h1{
      font-size: 40px;
      margin-bottom: 10px;
      text-transform: capitalize;
     
    }
`;

const Button = styled.div`
  height: 40px;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border:1px solid #fff;
  border-radius: 6px;
  cursor: pointer;
`;
export default Visual;