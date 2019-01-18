import { module } from "angular";
import { AboutStatesModule } from "./states/states";
import oclazyload from "oclazyload";

const AboutModule = "AboutModule";

module(AboutModule, [oclazyload, AboutStatesModule]);

export { AboutModule };