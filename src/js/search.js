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
      //const sports = data.data;
      try {
        data.forEach((sport) => {
          //function avoidNull(stuff) {
          //let support = DOMSelectors.support;
          //let stuff = sport.attributes.description;
          // }
          /*const stuff = DOMSelectors.support;
                if (sport.attributes.description === null) {
                  console.log(stuff("Swimming is fun."));
                } else {
                  console.log(stuff);*/
          //.insertAdjacentHTML(
          //`${sport.attributes.description}`
          //);

          //return support

          DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
            `<div class="sport-card">
                    <div class="sport-card-front">
                      <img
                        src="${sport.relationships.images.data}"
                        alt=""
                        class="poster"
                      /> 
                    </div>
                    <div class="sport-card-back">
                      <h3 class="sport-card-header">${sport.attributes.slug}</h3>
                      <div class="description-box">
                        <p class="description">What is it?</p>
                        <p class="description2">
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
          console.log(sport);
        });
      } catch (error) {
        console.log(error);
        alert("Something got messed up.");
      }
    };
    searchQuery();
  });
};
listen();
