"use strict";
var router_1 = require('@angular/router');
var search_component_1 = require('./components/search/search.component');
var about_component_1 = require('./components/about/about.component');
//import {ArtistComponent} from './components/artist/artist.component';
//import {AlbumComponent} from './components/album/album.component';
var routes = [
    { path: '', component: search_component_1.SearchComponent },
    { path: 'about', component: about_component_1.AboutComponent },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.route.js.map