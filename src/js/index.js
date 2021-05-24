import { DOMSelectors } from "./DOM";
//import { genres } from "./genre";

const query = async function () {
  //let id = 224;
  const response = await fetch(
    `https://sports.api.decathlon.com/sports/search/water?source=popular&coordinates=-73.123,45.123`
  );
  const data = await response.json();
  //const sports = data.data;
  try {
    data.forEach((sport) => {
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
                ${sport.relationships.tags.data}
              </p>
            </div>

            <div class="sport-attributes">
              <li class="sport-popularity">Popular in areas around coordinates </li>
              <li class="sport-id"></li>
              <li class="sport-geolocation">-73.5826985,45.5119864</li>
            </div>
          </div>
        </div>`
      );
      /*if ((data.attributes.name = null)) {
        data.attributes.name.innerHTML("Swimming is fun.");
      }else{
        data.attributes.name.innerHTML(${sport.attributes.name})
      }*/
      console.log(sport);
    });
  } catch (error) {
    console.log(error);
    alert("Something got messed up.");
  }
};
query();
