import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import data from "./data.json";
import moment from "moment";

const drawerWidth = 240;

const Section = (props) => {
  const [getData, setGetData] = useState([]);

  // const fetchData = () => {
  //   setGetData(data);
  //   console.log(data);
  // };

  console.log(data);

  const showAvailableDate = () => {
    setGetData(data);
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["Home", "Profile"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: "white" }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            style={{ color: "blue" }}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ color: "black" }}
          >
            MentorPlus
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography variant="h4" component="h4" style={{ textAlign: "left" }}>
          Book Demo Session Slot
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          style={{
            textAlign: "left",
            paddingBottom: "20px",
            paddingTop: "30px",
          }}
        >
          Select Date
        </Typography>
        {data.map((item, index) => (
          <Button
            variant="outlined"
            sx={{ m: 1 }}
            key={index}
            onClick={showAvailableDate}
          >
            {moment(item.date).format("llll").slice(0, 3)}
            <br />
            {moment(item.date).format("llll").slice(9, 11)}
            <br />
            {moment(item.date).format("llll").slice(4, 8)}
          </Button>
        ))}
        <Typography
          variant="h6"
          component="h6"
          style={{
            textAlign: "left",
            paddingBottom: "20px",
            paddingTop: "30px",
          }}
        >
          Select Slot
        </Typography>
        <div style={{ textAlign: "left" }}>
          <Button variant="outlined" sx={{ mr: 1.5 }}>
            6PM - 7.30PM
          </Button>
          <Button variant="outlined">7PM - 8PM</Button>
        </div>
        <div style={{ textAlign: "left", marginTop: "30px" }}>
          <Button variant="contained">Proceed to Pay</Button>
        </div>
      </Box>
    </Box>
  );
};

Section.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Section;
