import React, {useEffect} from 'react';
import styled from 'styled-components';
import {userActions} from "../../../redux/actionCreators";
import {useSelector} from "react-redux";

const User = () => {

    useEffect( () => {
        userActions.getUsers();
    }, [])

    const {users}= useSelector(state => state.user);

    return (
        <Container>
            {
                users.map(user => {
                    return(
                        <div key={user.id}>
                        <div className="name">{user.name}></div>
                        <div className="email">{user.email}</div>
                        </div>
                    )
                })
            }
        </Container>
    )
}

const Container = styled.div`

`;

export default User;