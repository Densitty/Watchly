import {
  CART_INNER_CONTAINER,
  MOVIE_IN_CART_INDICATOR,
} from "../utils/classSelectors";

export const displayMovieItem = (movieItems) => {
  // console.log(item);
  let markup;
  movieItems.forEach((item) => {
    markup = `<div class="target-inner__list" data-deleteId=${item.id}>
      <span class="target-inner__list--tickets">
        <input type="number" value=${
          item.num
        } class="target-inner__list-number" />
        ${(item.num * item.price).toLocaleString("en-NG", {
          style: "currency",
          currency: "NGN",
        })}
      </span>
      <span class="target-inner__list--title">
        ${item.title}
      </span>
      <button class="target-inner__list-delete">
        <svg class="icon target-inner__list-delete__icon">
          <use xlink:href="img/svg/icons.svg#icon-minus"></use>
        </svg>
      </button>
    </div>
  `;
  });
  // const markup = `

  CART_INNER_CONTAINER.insertAdjacentHTML("beforeend", markup);
};

export const deleteMovieItem = (id) => {
  const movieToDelete = document.querySelector(`[data-deleteId='${id}']`);
  console.log(movieToDelete.parentElement);
  movieToDelete.parentElement.removeChild(movieToDelete);
};

export const displayCartNumber = (moviesQty) => {
  MOVIE_IN_CART_INDICATOR.textContent = moviesQty;
};
