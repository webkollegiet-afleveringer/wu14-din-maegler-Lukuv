import "./houseselection.sass";
const HouseSelctionFetch = fetch("https://dinmaegler.onrender.com/homes")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching house data:", error);
  });

function HouseSelction() {
  return <div className="HouseSelectionContainer">HUS HUS HUS HUS</div>;
}

export default HouseSelction;
