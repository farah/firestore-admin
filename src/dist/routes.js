"use strict";
exports.__esModule = true;
exports.renderRoutes = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var MainLayout_1 = require("src/layouts/MainLayout");
var HomeView_1 = require("src/views/home/HomeView");
var LoadingScreen_1 = require("src/components/LoadingScreen");
var NotFoundView = react_1.lazy(function () { return Promise.resolve().then(function () { return require('src/views/errors/NotFoundView'); }); });
function App() {
    return (react_1["default"].createElement(react_router_dom_1.Routes, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(MainLayout_1["default"], null) },
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(HomeView_1["default"], null) })),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "*", element: NotFoundView })));
}
exports["default"] = App;
exports.renderRoutes = function (routes) {
    if (routes === void 0) { routes = []; }
    return (react_1["default"].createElement(react_1.Suspense, { fallback: react_1["default"].createElement(LoadingScreen_1["default"], null) }));
};
