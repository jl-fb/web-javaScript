import React from "react";
// dependencias do react-router
import {Switch, Route, Redirect} from "react-router";

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

export default props =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={UserCrud} />
        <Redirect from="*" to="/" />
    </Switch>