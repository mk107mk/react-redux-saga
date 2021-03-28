import React from 'react';
import styled from 'styled-components';
import Appbar from "./views/components/Appbar";
import {useSelector} from "react-redux";
import {Route,Switch} from 'react-router-dom';
import Home from "./views/pages/Home";
import User from "./views/pages/User";
import Popup from "./views/components/Popup";


const App = () => {

    const app =useSelector(state => state.app);
    console.log('@@app', app);


    return (
        <Container>
            <Appbar/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/user"} component={User}/>
            </Switch>

            {
                app?.popup?.title &&
                <Popup title={app.popup.title}
                    description={app.popup.description}
                />
            }

        </Container>
    )
}

const Container = styled.div`

`;

export default App;