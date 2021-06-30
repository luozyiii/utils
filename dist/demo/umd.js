(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Demo = {}));
}(this, (function (exports) { 'use strict';

    function add(a, b) {
        return a + b;
    }

    exports.add = add;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
