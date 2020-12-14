import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../pages/home";

export const AppRoutes = {
  intro: (): string => "/",
  plp: (): string => "/products/",
};

export const Routes: React.FC = () => {
  return (
    <BrowserRouter basename={"/"}>
      <Switch>
        <Route exact path={AppRoutes.intro()} component={Home} />
        <Route exact path={AppRoutes.plp()} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
