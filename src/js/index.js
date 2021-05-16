import { DOMSelectors } from "./DOM";
//import { genres } from "./genre";

const query = async function () {
  try {
    const response = await fetch(
      `https://sports.api.decathlon.com/sports/${id}`
    );
    const data = await response.json();
    data.results.map((sport) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="sport-card">
          <div class="sport-card-front">
            <img
              src="https://sports-api-production.s3.amazonaws.com/uploads/sport/icon/224/224.svg"
              alt=""
              class="poster"
            />
          </div>
          <div class="sport-card-back">
            <h3 class="sport-card-header">${sport.attributes.name}</h3>
            <div class="description-box">
              <p class="description">What is it?</p>
              <p class="description">
                ${sport.attributes.description}
              </p>
            </div>

            <div class="types-box">
              <p class="sport-subcategory">Different Ways</p>
              <p class="sport-subcategory">
                bathing, swimming-pool, triathlon
              </p>
            </div>

            <div class="sport-attributes">
              <li class="sport-popularity">Popular</li>
              <li class="sport-id">${sport.attributes.decathlon_id}</li>
              <li class="sport-geolocation">Coordinates</li>
            </div>
          </div>
        </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("Something got messed up.");
  }
};
query();
