import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Avatar,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import "./volunteer.css";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  appBar: {
    top: "auto",
    bottom: 0,
    background: "#fff",
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  table: {
    width: 350,
  },
  tab: {
    marginTop: 50,
    margin: "0 auto",
  },
});

export default function History() {
  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            {" "}
            <Avatar>U</Avatar>{" "}
          </ListItemIcon>
          <ListItemText primary="Volunteer User Name" />
        </ListItem>
      </List>
      <Divider />
      <List className="link">
        <ListItem button>
          <ListItemIcon>
            {" "}
            <VpnKeyIcon />{" "}
          </ListItemIcon>
          <ListItemText primary="เปลี่ยนรหัสผ่าน" />
        </ListItem>
        <Link to="/login">
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="ออกจากระบบ" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
  function createData(name, calories) {
    return { name, calories };
  }

  const rows = [
    createData("01/11/2563 ", "Frozen yoghurt"),
    createData("30/10/2563 ", "Ice cream sandwich"),
    createData("20/9/2563 ", "Eclair"),
    createData("10/8/2563 ", "Cupcake"),
    createData("01/7/2563 ", "Gingerbread"),
  ];
  return (
    <div className="vtcontainer">
      <div className="nav-vtcontainer linkicon">
        <div className={classes.root}>
          <AppBar position="fixed">
            <Toolbar>
              <Button onClick={toggleDrawer("left", true)} color="inherit">
                <MenuIcon />
              </Button>
              <Drawer
                anchor="left"
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
              >
                {list("left")}
              </Drawer>
              <Typography variant="h6" className={classes.title}>
                Project Name
              </Typography>
              <Link to="/login">
                <Button color="inherit">
                  <ExitToAppIcon />
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
      </div>
      <br></br>
      <div className={classes.tab}>
        <h2>ประวัติการเก็บข้อมูลสุขภาพ</h2>
        <div className="table-layout">
          <Table
            className={classes.table}
            component={Paper}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow className="col-6">
                <TableCell className="cell">
                  <b>วันที่เก็บข้อมูล</b>
                </TableCell>
                <TableCell className="cell">
                  <b>ผู้ตรวจ</b>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell className="cell">{row.name}</TableCell>
                  <TableCell className="cell">{row.calories}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="inner-seach2">
          <div className="bt-history">
            <Link to="/volunteer">
              {/* <Button className="bt1" onClick={saveSelected}> */}
              <Button className="bt3">กลับหน้าหลัก</Button>
            </Link>
            <Link to="/mainmenu">
              {/* <Button className="bt2" onClick={saveSelected} > */}
              <Button className="bt2">เก็บข้อมูลสุขภาพ</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
