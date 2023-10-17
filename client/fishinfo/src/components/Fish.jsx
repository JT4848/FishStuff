import { useState } from "react";


const Fish = ({ fishData }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }


  return (
    <div className="fish" onClick={toggleDetails}>
      <img src={fishData.photo} alt={fishData.name} />
      <h2>{fishData.name}</h2>
      {showDetails && (
        <div className="details">
          <p>Minimum Size: {fishData.minSize}</p>
          <p>Maximum Size: {fishData.maxSize}</p>
          <p>Edibility: {fishData.edibility}</p>
        </div>
      )}
    </div>
  );
}



export default Fish;
