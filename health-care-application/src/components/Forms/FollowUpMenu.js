import React from "react";
import Header from "../volunteer/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, ListItem, ListItemIcon } from "@material-ui/core";
import { Link, useHistory, useRouteMatch, Route } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 700,
    fontSize: 20,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    marginTop: 50,
  },
  a: {
    textDecoration: "none",
    fontSize: 20,
    color: "red",
  },
});

export default function FollowUpMenu() {
    const classes = useStyles();
  return (
    <React.Fragment>
      <Header /> <br />
      <Card className={classes.root}>
        <h4 style={{ textAlign: "center" }}>
          การติดตามผลการตรวจ
        </h4>
        <CardContent>
          <Link
            onClick={() => {
            //   getData("sec2");
            }}
          >
            <ListItem button>
              <ListItemIcon>
                {/* <CheckCircleIcon className={colorIcon.i2} /> */}
              </ListItemIcon>
              แบบคัดกรองสภาวะสุขภาพ
            </ListItem>
          </Link>{" "}
          <hr />
          <Link
            onClick={() => {
            //   getData("sec3");
            }}
          >
            <ListItem button>
              <ListItemIcon>
                {/* <CheckCircleIcon className={colorIcon.i3} /> */}
              </ListItemIcon>
              ความเสี่ยงต่อโรคหัวใจและหลอดเลือด
            </ListItem>
          </Link>{" "}
          
          <hr />
          <Link
            onClick={() => {
            //   getData("sec5");
            }}
          >
            <ListItem button>
              <ListItemIcon>
                {/* <CheckCircleIcon className={colorIcon.i5} /> */}
              </ListItemIcon>
              การประเมินสุขภาพช่องปาก
            </ListItem>
          </Link>{" "}
          
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
