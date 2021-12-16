import { MAIN_CONTENT_CONTAINER } from "../utils/classSelectors";

const movieRating = (el) => {
  if (el !== 0.5) {
    return `
      <svg class="icon icon-star">
        <use xlink:href="img/svg/icons.svg#icon-star"></use>
      </svg>
    `;
  } else {
    return `
      <svg class="icon icon-star">
        <use xlink:href="img/svg/icons.svg#icon-star-half"></use>
      </svg>
    `;
  }
};

const actorCrews = (actor) => `${actor}`;

export const displayMovie = (movie) => {
  const {
    actors,
    awards,
    boxOffice,
    director,
    id,
    imdbRating,
    mainActor,
    plot,
    poster,
    production,
    rated,
    rating,
    runtime,
    title,
    url,
    writer,
    imdbVotes,
    ratingArray,
    ticketNumbers,
  } = movie;
  // console.log(ratingArray);

  const markup = `
    <div class="main-content__left">
        
        <div class="main-content__left--img">
            <img src="${poster}" alt="${title}">
        </div>
        <div class="main-content__left--watch">
            <button class='btn-watch'>
              <a href="${url}">
                <svg class="icon  icon-watch">
                  <use xlink:href="img/svg/icons.svg#icon-youtube"></use></svg> watch trailer
                </a>
              </button>
        </div>
        <div class="main-content__left--buy">
            <button class='btn-watch'>
                <svg class="icon  icon-buy">
                    <use xlink:href="img/svg/icons.svg#icon-ticket"></use></svg>
                    <span class="num-tickets">${ticketNumbers}</span> buy tickets
            </button>
        </div>

    </div>
    <div class="main-content__right">
        <div class="main-content__right-title">${title}</div>

        <div class="main-content__right-social">
            <div class="main-content__right-social--likes">
               <button class="main-content__right-circle">
                  <svg class="icon likes">
                      <use xlink:href="img/svg/icons.svg#icon-heart-o"></use>
                  </svg>
               </button>
            
            </div>
            <div class="main-content__right-social--add">
                <button class="main-content__right-circle">
                <svg class="icon  add-ticket">
                    <use xlink:href="img/svg/icons.svg#icon-plus-circle"></use>
                </svg>
                
                </button>
            
            </div>
            <div class="main-content__right-social--minus">
                <button class="main-content__right-circle">
                <svg class="icon  minus-ticket">
                    <use xlink:href="img/svg/icons.svg#icon-minus-circle1"></use>
                </svg>
                </button>
            </div>
        </div>
        <div class="main-content__right-reviews">
            <div class="main-content__right-reviews-stars">
                    <svg class="icon icon-star">
                        <use xlink:href="img/svg/icons.svg#icon-star"></use>
                    </svg>
                
                <div class="main-content__right-reviews--numbers">
                        <span class="review--number">${imdbRating}/10</span>
                    <span class="review--people"> ${imdbVotes} reviews</span>

                </div>
                <span class="rate-this-movie">
                    Rate This Movie: 
                    ${ratingArray
                      .map((rating) => {
                        return movieRating(rating);
                      })
                      .join("")}
                </span>
            </div>
            <div class="main-content__right-description">
                <ul class="description">
                  <li data-tab-target="#overview" class="description-tab activeTab">
                    Overview
                  </li>

                  <li data-tab-target="#reviews" class="description-tab">
                    Reviews
                  </li>
                  
                  <li data-tab-target="#castCrews" class="description-tab">
                    Cast & Crew
                  </li>
                  
                  <li data-tab-target="#media" class="description-tab">
                    Media
                  </li>
                </ul>

                <div class="description-content">
                    <div id="overview" class="description-content__item activeTab" data-tab-content>
                        <p>${plot}</p>
                    </div>

                    <div id="reviews" class="description-content__item" data-tab-content>
                        <p>The official IMDB score is ${imdbRating} out of ${imdbVotes} cast.</p>
                    </div>

                    <div id="castCrews" class="description-content__item" data-tab-content>
                        <p>
                          ${actors.map((actor) => {
                            return actorCrews(actor);
                          })}
                        </p>
                    </div>

                    <div id="media" class="description-content__item" data-tab-content>
                        <p>${writer}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `;

  // append to movie-content
  MAIN_CONTENT_CONTAINER.insertAdjacentHTML("afterbegin", markup);
};

// To Display Movie Content In MAIN_CONTENT_CONTAINER
// clear the DOM first
export const resetMainContentContainer = () => {
  while (MAIN_CONTENT_CONTAINER.firstElementChild) {
    MAIN_CONTENT_CONTAINER.removeChild(
      MAIN_CONTENT_CONTAINER.firstElementChild
    );
  }
};

// Update the number of tickets chosen
export const updateTicketNumbers = (movie) => {
  // target the element displaying the number of tickets to purchase
  document.querySelector(".num-tickets").textContent = movie.ticketNumbers;
};
