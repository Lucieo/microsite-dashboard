import React from "react";
import MicrositeCreator from "./layouts/MicrositeCreator"
import MicrositeDashboard from "./layouts/MicrositeDashboard"
import CoursesDashboard from "./layouts/CourseDashboard"
import Home from "./layouts/Home"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/navBar"
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#ffffff"
    },
    primary: {
      main: window.props.tma_primary_color || "#009CDF",
    },
    secondary: {
      main: window.props.tma_secondary_color || "#001640",
    },
  },
});


export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <div>
      <NavBar/>
        <Switch>
          <Route path="/microsite-create">
            <MicrositeCreator/>
          </Route>
          <Route path="/microsite-dashboard">
            <MicrositeDashboard/>
          </Route>
          <Route path="/course-dashboard">
            <CoursesDashboard/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    </ThemeProvider>
  );
}
