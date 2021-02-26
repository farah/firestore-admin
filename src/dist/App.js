"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var history_1 = require("history");
var jss_1 = require("jss");
var jss_rtl_1 = require("jss-rtl");
var moment_1 = require("@date-io/moment");
var notistack_1 = require("notistack");
var core_1 = require("@material-ui/core");
var pickers_1 = require("@material-ui/pickers");
var GlobalStyles_1 = require("src/components/GlobalStyles");
var ScrollReset_1 = require("src/components/ScrollReset");
var CookiesNotification_1 = require("src/components/CookiesNotification");
var GoogleAnalytics_1 = require("src/components/GoogleAnalytics");
var SettingsNotification_1 = require("src/components/SettingsNotification");
var JWTAuthContext_1 = require("src/contexts/JWTAuthContext");
var useSettings_1 = require("src/hooks/useSettings");
var theme_1 = require("src/theme");
var routes_1 = require("src/routes");
var jss = jss_1.create({ plugins: __spreadArrays(core_1.jssPreset().plugins, [jss_rtl_1["default"]()]) });
var history = history_1.createBrowserHistory();
var App = function () {
    var settings = useSettings_1["default"]().settings;
    var theme = theme_1.createTheme({
        direction: settings.direction,
        responsiveFontSizes: settings.responsiveFontSizes,
        theme: settings.theme
    });
    return (react_1["default"].createElement(core_1.ThemeProvider, { theme: theme },
        react_1["default"].createElement(core_1.StylesProvider, { jss: jss },
            react_1["default"].createElement(pickers_1.MuiPickersUtilsProvider, { utils: moment_1["default"] },
                react_1["default"].createElement(notistack_1.SnackbarProvider, { dense: true, maxSnack: 3 },
                    react_1["default"].createElement(react_router_dom_1.Router, { history: history },
                        react_1["default"].createElement(JWTAuthContext_1.AuthProvider, null,
                            react_1["default"].createElement(GlobalStyles_1["default"], null),
                            react_1["default"].createElement(ScrollReset_1["default"], null),
                            react_1["default"].createElement(GoogleAnalytics_1["default"], null),
                            react_1["default"].createElement(CookiesNotification_1["default"], null),
                            react_1["default"].createElement(SettingsNotification_1["default"], null),
                            routes_1.renderRoutes(routes_1["default"]))))))));
};
exports["default"] = App;
