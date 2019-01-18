export const lazyLoad = ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

    try {
        return import(/* webpackChunkName: "about" */ "../components")
            .then(mod => {
                return $ocLazyLoad.inject(mod.AboutComponentsModule);
            });
    } catch (err) {
        throw new Error("Ooops, something went wrong, " + err);
    }

};

export const AboutState = {
    name: 'about',
    abstract: true,
    lazyLoad: lazyLoad
};