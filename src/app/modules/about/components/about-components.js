import { module } from "angular";
import { aboutDetailsComponent } from "./about-details/about-details";

export const AboutComponentsModule = "AboutComponentsModule";

module(AboutComponentsModule, [])
    .component("aboutDetails", aboutDetailsComponent);
