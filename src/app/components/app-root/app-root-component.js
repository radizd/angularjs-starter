import { AppRootController } from "./app-root-controller";
import AppRootTemplate from "./app-root-template.html"

export class AppRootComponent {
    static get template() {
        return AppRootTemplate;
    };

    static get controller() {
        return AppRootController;
    };

    static get controllerAs() {
        return 'AppRootComponent';
    }
}