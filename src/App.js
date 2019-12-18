import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  HashRouter
} from "react-router-dom";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Home from "./pages/Home";
import Data from "./pages/Data";
import Maps from "./pages/Maps";
import About from "./pages/About";
function App() {
  return (
    <HashRouter>
    <div className="App">
      <div>
      <SideNav
          onSelect={(selected) => {
              // Add your code here
          }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                <NavLink to="/">
                    <img src={require('./icon/iconHome.png')}/>
                </NavLink>
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
            <NavItem eventKey="Data">
                <NavIcon>
                <NavLink to="/Data">
                <img src={require('./icon/iconData.png')}/>
                </NavLink>
                </NavIcon>
                <NavText>
                    Data Source
                </NavText>
            </NavItem>
            <NavItem eventKey="Map">
                <NavIcon>
                <NavLink to="/Maps">
                <img src={require('./icon/iconMap.png')}/>
                </NavLink>
                </NavIcon>
                <NavText>
                    Maps
                </NavText>
            </NavItem>
            <NavItem eventKey="about">
                <NavIcon>
                <NavLink to="/About">
                <img src={require('./icon/iconAbout.png')}/>
                </NavLink>
                </NavIcon>
                <NavText>
                    About
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
      </div>
      <header className="App-header" style={{backgroundColor:"#242628", padding:"16px"}}>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    <body style={{backgroundColor: "#282c34",padding: "40px"}}>
        <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Data" component={Data}/>
            <Route path="/Maps" component={Maps}/>
            <Route path="/About" component={About}/>
        </div>
    </body>
    <footer>
      <p>@Copyright reserved to @Leony_FeiShang</p>
    </footer>
    </div>
    </HashRouter>
    
  );
}

export default App;
