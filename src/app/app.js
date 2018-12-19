import { module } from "angular"
import uiRoter from "@uirouter/angularjs";
import oclazyload from "oclazyload";
import { AppRootComponent } from "./components/app-root/app-root-component";
import { AppMenuComponent } from "./components/app-menu/app-menu-component";
import { AboutModuleInitialization } from "./modules/about"

let requires = [uiRoter, oclazyload];

let config = ($locationProvider, $stateProvider) => {
    $locationProvider
        .html5Mode(true)
        .hashPrefix('!');

    let helloState = {
        name: 'hello',
        url: '/hello',
        template: '<h3>hello world!</h3>'
    }

    AboutModuleInitialization($stateProvider);

    $stateProvider.state(helloState);
};

let run = () => {

};



export const app = module("angularjs.starter", requires)
    .config(config)
    .run(run)
    .component('appRoot', AppRootComponent)
    .component('appMenu', AppMenuComponent);





