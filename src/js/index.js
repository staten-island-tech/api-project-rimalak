import { DOMSelectors } from "./DOM";
//import { genres } from "./genre";

const query = async function () {
  try {
    const response = await fetch(
      `https://sports.api.decathlon.com/sports/${id}`
    );
    const data = await response.json();
  } catch (error) {
    console.log(error);
    alert("Something got messed up.");
  }
};
