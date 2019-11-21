"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG_A = "ABC";
function doFunction(p) {
    console.log(p);
}
exports.doFunction = doFunction;
var SomeUtil = /** @class */ (function () {
    function SomeUtil() {
    }
    SomeUtil.prototype.doUtil = function (a) {
        return (a || "") + "some";
    };
    return SomeUtil;
}());
exports.SomeUtil = SomeUtil;
//# sourceMappingURL=utils.js.map