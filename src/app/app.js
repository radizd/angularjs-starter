import { module } from "angular"
import uiRoter from "@uirouter/angularjs";
import { AppRootComponent } from "./components/app-root/app-root-component";
import { AppMenuComponent } from "./components/app-menu/app-menu-component";

let requires = [uiRoter];

let config = ($locationProvider, $stateProvider) => {
    $locationProvider
        .html5Mode(true)
        .hashPrefix('!');

    let helloState = {
        name: 'hello',
        url: '/hello',
        template: '<h3>hello world!</h3>'
    }

    let aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>It`s the angularjs.starter app!</h3>'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
};

let run = () => {

};



export const app = module("angularjs.starter", requires)
    .config(config)
    .run(run)
    .component('appRoot', AppRootComponent)
    .component('appMenu', AppMenuComponent)
    .name;





