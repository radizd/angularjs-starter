const lazyLoad = ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

    return import(/* webpackChunkName: "about.module" */ "./about-module")
        .then(mod => $ocLazyLoad.load(mod.AboutModule))
        .catch(err => {
            throw new Error("Ooops, something went wrong, " + err);
        });
}

export const AboutState = {
    name: 'about',
    url: '/about',
    template: 'aboutComponent',
    lazyLoad: lazyLoad
}