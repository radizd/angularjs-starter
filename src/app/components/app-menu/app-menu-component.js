import { AppMenuController } from "./app-menu-controller";
import AppMenuTemplate from "./app-menu-template.html"

export class AppMenuComponent {
    static get template() {
        return AppMenuTemplate;
    };

    static get controller() {
        return AppMenuController;
    };

    static get controllerAs() {
        return 'AppMenuComponent';
    }
}