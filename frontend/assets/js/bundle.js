/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/aula19_exercicio/validateForm.ts":
      /*!**********************************************!*\
  !*** ./src/aula19_exercicio/validateForm.ts ***!
  \**********************************************/
      /***/ () => {
        throw new Error(
          'Module parse failed: Unexpected token (9:57)\nFile was processed with these loaders:\n * ./node_modules/ts-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\n| const password2 = document.querySelector(".password2");\n| function showError(message) {\n>     const campoComErro = document.querySelectorAll("." + );\n| }\n| form.addEventListener("submit", function (e) {',
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
  (() => {
    "use strict";
    var exports = __webpack_exports__;
    /*!***************************************!*\
  !*** ./src/aula19_exercicio/index.ts ***!
  \***************************************/

    Object.defineProperty(exports, "__esModule", { value: true });
    __webpack_require__(
      /*! ./validateForm */ "./src/aula19_exercicio/validateForm.ts",
    );
  })();

  /******/
})();
//# sourceMappingURL=bundle.js.map
