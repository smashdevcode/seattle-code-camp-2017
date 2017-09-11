"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
// Use parameter destructuring and defaults for easy definition of 'props' type.
var Greeter = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'world' : _b;
    return React.createElement("div", null, 
        "Hello, ", 
        name, 
        "!");
};
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        _super.apply(this, arguments);
    }
    Hello.prototype.render = function () {
        return React.createElement("h1", null, 
            "Hello from ", 
            this.props.compiler, 
            " and ", 
            this.props.framework, 
            " v", 
            this.props.version, 
            "!", 
            React.createElement(Greeter, {name: 'TypeScript 1.8'}), 
            React.createElement("foo", null));
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;
//# sourceMappingURL=Hello.js.map