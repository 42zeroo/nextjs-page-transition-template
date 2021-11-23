"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _query = require("@reduxjs/toolkit/query");

var _productsListingSlice = require("./features/productsListingSlice");

var _cartSlice = _interopRequireDefault(require("./features/cartSlice"));

var _reducer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var store = (0, _toolkit.configureStore)({
  reducer: (_reducer = {}, _defineProperty(_reducer, _productsListingSlice.productsListingApi.reducerPath, _productsListingSlice.productsListingApi.reducer), _defineProperty(_reducer, "cart", _cartSlice["default"]), _reducer),
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(_productsListingSlice.productsListingApi.middleware);
  }
});
(0, _query.setupListeners)(store.dispatch);
var _default = store;
exports["default"] = _default;