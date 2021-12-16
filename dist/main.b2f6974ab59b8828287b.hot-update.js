"use strict";
self["webpackHotUpdatewatchly"]("main",{

/***/ "./src/JS/Models/Cart.js":
/*!*******************************!*\
  !*** ./src/JS/Models/Cart.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var Cart = /*#__PURE__*/function () {
  function Cart() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cart);

    this.moviesCart = [];
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cart, [{
    key: "purchaseMovie",
    value: function purchaseMovie(num, title, price) {
      var movieItem = {
        id: new Date().getTime().toString(),
        num: num,
        title: title,
        price: price
      };
      var movieInCart = this.moviesCart.find(function (movie) {
        return movieItem.title === movie.title;
      }); // console.log(movieInCart);

      if (movieInCart) {
        var movieIndex = this.moviesCart.findIndex(function (movie) {
          return movie.title === movieItem.title;
        });
        var updatedMovie = this.moviesCart.find(function (movie) {
          return movie.title === movieItem.title;
        });
        updatedMovie.num += 1;
        this.moviesCart.splice(movieIndex, 1);
        this.moviesCart.push(updatedMovie); // return updatedMovie;
      } else {
        this.moviesCart.push(movieItem); // return movieItem;
      }

      console.log(this.moviesCart);
      return this.moviesCart;
    }
  }, {
    key: "showCart",
    value: function showCart() {
      return this.moviesCart;
    }
  }, {
    key: "removeMovie",
    value: function removeMovie(id) {
      // const newMovies = this.moviesCart.filter(movie => {
      //   return movie.id !== id
      // })
      // this.moviesCart = newMovies;
      // return this.moviesCart
      var movieIndex = this.moviesCart.findIndex(function (movie) {
        return movie.id === id;
      });
      this.moviesCart.splice(movieIndex, 1);
    }
  }, {
    key: "updateMovieNumbers",
    value: function updateMovieNumbers(id, newNumber) {
      var movie = this.findMovieByID(id);
      movie.num = newNumber;
      return movie;
    }
  }, {
    key: "calcPrice",
    value: function calcPrice(id, qty, price) {
      var movie = this.findMovieByID(id);
      movie.price = parseInt(qty) * price;
      console.log(movie);
    }
  }, {
    key: "findMovieByID",
    value: function findMovieByID(id) {
      return this.moviesCart.find(function (movie) {
        return movie.id === id;
      });
    }
  }]);

  return Cart;
}();



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("894d0fbb79e04f594cd4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iMmY2OTc0YWI1OWI4ODI4Mjg3Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkE7QUFDbkIsa0JBQWM7QUFBQTs7QUFDWixTQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0Q7Ozs7V0FFRCx1QkFBY0MsR0FBZCxFQUFtQkMsS0FBbkIsRUFBMEJDLEtBQTFCLEVBQWlDO0FBQy9CLFVBQU1DLFNBQVMsR0FBRztBQUNoQkMsUUFBQUEsRUFBRSxFQUFFLElBQUlDLElBQUosR0FBV0MsT0FBWCxHQUFxQkMsUUFBckIsRUFEWTtBQUVoQlAsUUFBQUEsR0FBRyxFQUFIQSxHQUZnQjtBQUdoQkMsUUFBQUEsS0FBSyxFQUFMQSxLQUhnQjtBQUloQkMsUUFBQUEsS0FBSyxFQUFMQTtBQUpnQixPQUFsQjtBQU9BLFVBQU1NLFdBQVcsR0FBRyxLQUFLVCxVQUFMLENBQWdCVSxJQUFoQixDQUFxQixVQUFDQyxLQUFELEVBQVc7QUFDbEQsZUFBT1AsU0FBUyxDQUFDRixLQUFWLEtBQW9CUyxLQUFLLENBQUNULEtBQWpDO0FBQ0QsT0FGbUIsQ0FBcEIsQ0FSK0IsQ0FZL0I7O0FBRUEsVUFBSU8sV0FBSixFQUFpQjtBQUNmLFlBQU1HLFVBQVUsR0FBRyxLQUFLWixVQUFMLENBQWdCYSxTQUFoQixDQUNqQixVQUFDRixLQUFEO0FBQUEsaUJBQVdBLEtBQUssQ0FBQ1QsS0FBTixLQUFnQkUsU0FBUyxDQUFDRixLQUFyQztBQUFBLFNBRGlCLENBQW5CO0FBSUEsWUFBTVksWUFBWSxHQUFHLEtBQUtkLFVBQUwsQ0FBZ0JVLElBQWhCLENBQ25CLFVBQUNDLEtBQUQ7QUFBQSxpQkFBV0EsS0FBSyxDQUFDVCxLQUFOLEtBQWdCRSxTQUFTLENBQUNGLEtBQXJDO0FBQUEsU0FEbUIsQ0FBckI7QUFHQVksUUFBQUEsWUFBWSxDQUFDYixHQUFiLElBQW9CLENBQXBCO0FBQ0EsYUFBS0QsVUFBTCxDQUFnQmUsTUFBaEIsQ0FBdUJILFVBQXZCLEVBQW1DLENBQW5DO0FBQ0EsYUFBS1osVUFBTCxDQUFnQmdCLElBQWhCLENBQXFCRixZQUFyQixFQVZlLENBV2Y7QUFDRCxPQVpELE1BWU87QUFDTCxhQUFLZCxVQUFMLENBQWdCZ0IsSUFBaEIsQ0FBcUJaLFNBQXJCLEVBREssQ0FFTDtBQUNEOztBQUNEYSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLbEIsVUFBakI7QUFDQSxhQUFPLEtBQUtBLFVBQVo7QUFDRDs7O1dBRUQsb0JBQVc7QUFDVCxhQUFPLEtBQUtBLFVBQVo7QUFDRDs7O1dBRUQscUJBQVlLLEVBQVosRUFBZ0I7QUFDZDtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsVUFBTU8sVUFBVSxHQUFHLEtBQUtaLFVBQUwsQ0FBZ0JhLFNBQWhCLENBQTBCLFVBQUNGLEtBQUQ7QUFBQSxlQUFXQSxLQUFLLENBQUNOLEVBQU4sS0FBYUEsRUFBeEI7QUFBQSxPQUExQixDQUFuQjtBQUNBLFdBQUtMLFVBQUwsQ0FBZ0JlLE1BQWhCLENBQXVCSCxVQUF2QixFQUFtQyxDQUFuQztBQUNEOzs7V0FFRCw0QkFBbUJQLEVBQW5CLEVBQXVCYyxTQUF2QixFQUFrQztBQUNoQyxVQUFNUixLQUFLLEdBQUcsS0FBS1MsYUFBTCxDQUFtQmYsRUFBbkIsQ0FBZDtBQUNBTSxNQUFBQSxLQUFLLENBQUNWLEdBQU4sR0FBWWtCLFNBQVo7QUFDQSxhQUFPUixLQUFQO0FBQ0Q7OztXQUVELG1CQUFVTixFQUFWLEVBQWNnQixHQUFkLEVBQW1CbEIsS0FBbkIsRUFBMEI7QUFDeEIsVUFBTVEsS0FBSyxHQUFHLEtBQUtTLGFBQUwsQ0FBbUJmLEVBQW5CLENBQWQ7QUFDQU0sTUFBQUEsS0FBSyxDQUFDUixLQUFOLEdBQWNtQixRQUFRLENBQUNELEdBQUQsQ0FBUixHQUFnQmxCLEtBQTlCO0FBQ0FjLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxLQUFaO0FBQ0Q7OztXQUVELHVCQUFjTixFQUFkLEVBQWtCO0FBQ2hCLGFBQU8sS0FBS0wsVUFBTCxDQUFnQlUsSUFBaEIsQ0FBcUIsVUFBQ0MsS0FBRDtBQUFBLGVBQVdBLEtBQUssQ0FBQ04sRUFBTixLQUFhQSxFQUF4QjtBQUFBLE9BQXJCLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7VUN0RUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXRjaGx5Ly4vc3JjL0pTL01vZGVscy9DYXJ0LmpzIiwid2VicGFjazovL3dhdGNobHkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1vdmllc0NhcnQgPSBbXTtcbiAgfVxuXG4gIHB1cmNoYXNlTW92aWUobnVtLCB0aXRsZSwgcHJpY2UpIHtcbiAgICBjb25zdCBtb3ZpZUl0ZW0gPSB7XG4gICAgICBpZDogbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSxcbiAgICAgIG51bSxcbiAgICAgIHRpdGxlLFxuICAgICAgcHJpY2UsXG4gICAgfTtcblxuICAgIGNvbnN0IG1vdmllSW5DYXJ0ID0gdGhpcy5tb3ZpZXNDYXJ0LmZpbmQoKG1vdmllKSA9PiB7XG4gICAgICByZXR1cm4gbW92aWVJdGVtLnRpdGxlID09PSBtb3ZpZS50aXRsZTtcbiAgICB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKG1vdmllSW5DYXJ0KTtcblxuICAgIGlmIChtb3ZpZUluQ2FydCkge1xuICAgICAgY29uc3QgbW92aWVJbmRleCA9IHRoaXMubW92aWVzQ2FydC5maW5kSW5kZXgoXG4gICAgICAgIChtb3ZpZSkgPT4gbW92aWUudGl0bGUgPT09IG1vdmllSXRlbS50aXRsZVxuICAgICAgKTtcblxuICAgICAgY29uc3QgdXBkYXRlZE1vdmllID0gdGhpcy5tb3ZpZXNDYXJ0LmZpbmQoXG4gICAgICAgIChtb3ZpZSkgPT4gbW92aWUudGl0bGUgPT09IG1vdmllSXRlbS50aXRsZVxuICAgICAgKTtcbiAgICAgIHVwZGF0ZWRNb3ZpZS5udW0gKz0gMTtcbiAgICAgIHRoaXMubW92aWVzQ2FydC5zcGxpY2UobW92aWVJbmRleCwgMSk7XG4gICAgICB0aGlzLm1vdmllc0NhcnQucHVzaCh1cGRhdGVkTW92aWUpO1xuICAgICAgLy8gcmV0dXJuIHVwZGF0ZWRNb3ZpZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZpZXNDYXJ0LnB1c2gobW92aWVJdGVtKTtcbiAgICAgIC8vIHJldHVybiBtb3ZpZUl0ZW07XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMubW92aWVzQ2FydCk7XG4gICAgcmV0dXJuIHRoaXMubW92aWVzQ2FydDtcbiAgfVxuXG4gIHNob3dDYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLm1vdmllc0NhcnQ7XG4gIH1cblxuICByZW1vdmVNb3ZpZShpZCkge1xuICAgIC8vIGNvbnN0IG5ld01vdmllcyA9IHRoaXMubW92aWVzQ2FydC5maWx0ZXIobW92aWUgPT4ge1xuICAgIC8vICAgcmV0dXJuIG1vdmllLmlkICE9PSBpZFxuICAgIC8vIH0pXG5cbiAgICAvLyB0aGlzLm1vdmllc0NhcnQgPSBuZXdNb3ZpZXM7XG5cbiAgICAvLyByZXR1cm4gdGhpcy5tb3ZpZXNDYXJ0XG5cbiAgICBjb25zdCBtb3ZpZUluZGV4ID0gdGhpcy5tb3ZpZXNDYXJ0LmZpbmRJbmRleCgobW92aWUpID0+IG1vdmllLmlkID09PSBpZCk7XG4gICAgdGhpcy5tb3ZpZXNDYXJ0LnNwbGljZShtb3ZpZUluZGV4LCAxKTtcbiAgfVxuXG4gIHVwZGF0ZU1vdmllTnVtYmVycyhpZCwgbmV3TnVtYmVyKSB7XG4gICAgY29uc3QgbW92aWUgPSB0aGlzLmZpbmRNb3ZpZUJ5SUQoaWQpO1xuICAgIG1vdmllLm51bSA9IG5ld051bWJlcjtcbiAgICByZXR1cm4gbW92aWU7XG4gIH1cblxuICBjYWxjUHJpY2UoaWQsIHF0eSwgcHJpY2UpIHtcbiAgICBjb25zdCBtb3ZpZSA9IHRoaXMuZmluZE1vdmllQnlJRChpZCk7XG4gICAgbW92aWUucHJpY2UgPSBwYXJzZUludChxdHkpICogcHJpY2U7XG4gICAgY29uc29sZS5sb2cobW92aWUpO1xuICB9XG5cbiAgZmluZE1vdmllQnlJRChpZCkge1xuICAgIHJldHVybiB0aGlzLm1vdmllc0NhcnQuZmluZCgobW92aWUpID0+IG1vdmllLmlkID09PSBpZCk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg5NGQwZmJiNzllMDRmNTk0Y2Q0XCIpIl0sIm5hbWVzIjpbIkNhcnQiLCJtb3ZpZXNDYXJ0IiwibnVtIiwidGl0bGUiLCJwcmljZSIsIm1vdmllSXRlbSIsImlkIiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsIm1vdmllSW5DYXJ0IiwiZmluZCIsIm1vdmllIiwibW92aWVJbmRleCIsImZpbmRJbmRleCIsInVwZGF0ZWRNb3ZpZSIsInNwbGljZSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwibmV3TnVtYmVyIiwiZmluZE1vdmllQnlJRCIsInF0eSIsInBhcnNlSW50Il0sInNvdXJjZVJvb3QiOiIifQ==