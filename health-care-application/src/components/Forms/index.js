import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Mainmenu from "./MainMenu";
import { sec2 } from "../Forms/Sections2";
import { sec3 } from "../Forms/Sections3";
import { sec4 } from "../Forms/Sections4";
import { sec5 } from "../Forms/Sections5";
import { sec6, tai } from "../Forms/Sections6";

import { mmsi, sec7 } from "../Forms/Sections7";
import { sec8_1, sec8_9q } from "../Forms/Sections8";
import { sec9, sec9_2 } from "../Forms/Sections9";
import { sec10 } from "../Forms/Sections10";

export default function Index() {
  const { path } = useRouteMatch();
  const redirectToMainmenu = () => {
    return <Redirect to={`${path}/`} />;
  };

  return (
    <React.Fragment>
      <Switch>
        <Route path={`${path}/sec2`} component={sec2} />
        <Route path={`${path}/sec3`} component={sec3} />
        <Route path={`${path}/sec4`} component={sec4} />
        <Route path={`${path}/sec5`} component={sec5} />
        <Route path={`${path}/sec6`} component={sec6} />
        <Route path={`${path}/tai`} component={tai} />
        <Route path={`${path}/sec7`} component={sec7} />
        <Route path={`${path}/mmsi`} component={mmsi} />
        <Route path={`${path}/sec8_1`} component={sec8_1} />
        <Route path={`${path}/sec8-9q`} component={sec8_9q} />
        <Route path={`${path}/sec9`} component={sec9} />
        <Route path={`${path}/sec9-2`} component={sec9_2} />
        <Route path={`${path}/sec10`} component={sec10} />
        <Route path={`${path}/`} component={Mainmenu} />
        <Route exact={true} path={`${path}/`} component={redirectToMainmenu} />
      </Switch>
    </React.Fragment>
  );
}
