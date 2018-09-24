import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/login'
import Buttons from './pages/ui/Butttons'
import Modals from './pages/ui/Modals'
import Loadings from './pages/ui/Loadings'
import Notice from './pages/ui/Notice'
import Messages from './pages/ui//Messages'
import Tabs from './pages/ui/Tabs'
import Gallery from './pages/ui/Gallery'
import Carousels from './pages/ui/Carousel'
import NoMatch from './pages/nomatch'
import Home from './pages/home'
export default class IRouter extends React.Component {
    render() {
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/" render={() => (
                            <Admin>
                                <Switch>
                                    <Route path="/home" component={Home}></Route>
                                    <Route path="/ui/buttons" component={Buttons}></Route>
                                    <Route path="/ui/modals" component={Modals}></Route>
                                    <Route path="/ui/loadings" component={Loadings}></Route>
                                    <Route path="/ui/notification" component={Notice}></Route>
                                    <Route path="/ui/messages" component={Messages}></Route>
                                    <Route path="/ui/tabs" component={Tabs}></Route>
                                    <Route path="/ui/gallery" component={Gallery}></Route>
                                    <Route path="/ui/carousel" component={Carousels}></Route>
                                    <Route component={NoMatch}></Route>
                                </Switch>
                            </Admin>
                        )}></Route>
                        <Route path="/order/detail" component={Login}></Route>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}