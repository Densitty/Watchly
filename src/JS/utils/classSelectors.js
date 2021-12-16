export const FORM_INPUT = document.querySelector(".top-search__input");
export const FORM = document.querySelector(".movie-search");
export const MOVIE_SLIDER_CONTAINER = document.querySelector(".movie__slider");
export const HEADER = document.querySelector(".ht-header");
export const ARROW_BTN = document.querySelector(".arrow-btn");
export const MAIN_CONTENT_CONTAINER = document.querySelector(".main-content");
export const CART_INNER_CONTAINER = document.querySelector(
  ".target-inner__container"
);
export const MOVIE_IN_CART_INDICATOR = document.querySelector(".cart-circle");

export const loader = (parent) => {
  console.log("loader spinning");
  const spinner = `
    <div class="loader">
      <svg class="loader__icon">
        <use xlink:href="img/svg/icons.svg#icon-spin-alt"></use></svg>
      </svg>
    </div>
  `;

  parent.insertAdjacentHTML("afterbegin", spinner);
};

export const clearLoader = (parent) => {
  console.log("loader ends");
  parent.removeChild(parent.querySelector(".loader"));
};
