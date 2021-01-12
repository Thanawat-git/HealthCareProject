import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Mainmenu from "./MainMenu";
import { Sec2 } from "../Forms/Sections2";
import { Sec3 } from "../Forms/Sections3";
import { Sec4 } from "../Forms/Sections4";
import { Sec5 } from "../Forms/Sections5";
import { Sec6, Tai } from "../Forms/Sections6";

import { Mmsi, Sec7 } from "../Forms/Sections7";
import { Sec8_1, Sec8_9q } from "../Forms/Sections8";
import { Sec9, Sec9_2 } from "../Forms/Sections9";
import { Sec10 } from "../Forms/Sections10";

export default function Index() {
  const { path } = useRouteMatch();
  const redirectToMainmenu = () => {
    return <Redirect to={`${path}/`} />;
  };

  return (
    <React.Fragment>
      <Switch>
        <Route path={`${path}/sec2`} component={Sec2} />
        <Route path={`${path}/sec3`} component={Sec3} />
        <Route path={`${path}/sec4`} component={Sec4} />
        <Route path={`${path}/sec5`} component={Sec5} />
        <Route path={`${path}/sec6`} component={Sec6} />
        <Route path={`${path}/tai`} component={Tai} />
        <Route path={`${path}/sec7`} component={Sec7} />
        <Route path={`${path}/mmsi`} component={Mmsi} />
        <Route path={`${path}/sec8_1`} component={Sec8_1} />
        <Route path={`${path}/sec8-9q`} component={Sec8_9q} />
        <Route path={`${path}/sec9`} component={Sec9} />
        <Route path={`${path}/sec9-2`} component={Sec9_2} />
        <Route path={`${path}/sec10`} component={Sec10} />
        <Route path={`${path}/`} component={Mainmenu} />
        <Route exact={true} path={`${path}/`} component={redirectToMainmenu} />
      </Switch>
    </React.Fragment>
  );
}
