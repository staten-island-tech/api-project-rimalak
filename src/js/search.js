import { DOMSelectors } from "./DOM";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    DOMSelectors.grid.innerHTML = "";
    const searchParams = DOMSelectors.searchArea.value;
    const searchQuery = async function () {
      //let id = 224;
      const response = await fetch(
        `https://sports.api.decathlon.com/sports/${searchParams}`
      );
      const data = await response.json();
      //console.log(data);
      //const sports = data.data;
      try {
        DOMSelectors.grid.insertAdjacentHTML(
          "beforeend",
          `<div class="sport-card">
                    <div class="sport-card-front">
                      <img
                        src="${data.data.relationships.images.data[0].url}"
                        alt=""
                        class="poster"
                      /> 
                    </div>
                    <div class="sport-card-back">
                      <h3 class="sport-card-header">${data.data.attributes.slug}</h3>
                      <div class="description-box">
                        <p class="description">What is it?</p>
                        <p class="description2">
                          ${data.data.attributes.description}
                        </p>
                      </div>
          
                      <div class="types-box">
                        <p class="sport-subcategory">Different Ways</p>
                        <p class="sport-subcategory">
                          ${data.data.relationships.tags.data}
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
        //console.log(sport);
      } catch (error) {
        console.log(error);
        alert("Something got messed up.");
      }
    };
    searchQuery();
  });
};
listen();
