import { module } from "angular";
import { AboutState } from "./about-state";
import { AboutDetailsState } from "./about-details-state";

const AboutStatesModule = "AboutStatesModule";

module(AboutStatesModule, [])
    .config($stateProvider => {
        $stateProvider.state(AboutState);
        $stateProvider.state(AboutDetailsState);
    });

export { AboutStatesModule };