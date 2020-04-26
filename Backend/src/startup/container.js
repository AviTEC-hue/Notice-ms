const {
    createContainer,
    asClass,
    asFunction,
    asValue
} = require("awilix");

//config
const config = require("../config");
const app = require('.');

//services
const {
    NotifyService,
    HomeService
} = require("../services");

//controllers
const {
    NotifyController,
    HomeController
} = require("../controllers");

//models
const { Notify } = require('../models');

//repositories
const { NotifyRepository } = require("../repositories");

//routes
const {
    NotifyRoutes,
    HomeRoutes
} = require("../routes/index.routes");
const Routes = require('../routes');

const container = createContainer();

container
    .register({
        NotifyService: asClass(NotifyService).singleton(),
        HomeService: asClass(HomeService).singleton()
    })
    .register({
        NotifyRepository: asClass(NotifyRepository).singleton()
    })
    .register({
        Notify: asValue(Notify)
    })
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        NotifyController: asClass(NotifyController.bind(NotifyController)).singleton(),
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton(),
        NotifyRoutes: asFunction(NotifyRoutes).singleton()
    })
module.exports = container;