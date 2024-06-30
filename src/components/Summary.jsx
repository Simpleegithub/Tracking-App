import { TbMessage2Minus } from "react-icons/tb";

function Summary() {
  return (
    <div className="whole-summary">
      <button id="btn">Summary</button>
      <div className="below-summary">
      <h4 className="heading-KMS">
        <span className="icon-container">
          <TbMessage2Minus />
        </span>
        KMS Calculations{" "}
      </h4>
      <div className="sub-heading">
        <span>Route:</span>
        <span>121KMS</span>
        
      </div>

      <div className="sub-heading">
        <span>Freight:</span>
        <span>91KMS</span>
        
      </div>

      <div className="sub-heading">
        <span>Extra Travel:</span>
        <span>21KMS</span>
        
      </div>

      <div className="sub-heading">
        <span>Travel To: </span>
        <span>10KMS</span>
        
      </div>


      <div className="sub-heading">
        <span>Travel From: </span>
        <span>60KMS</span>
        
      </div>


     


     

      
      </div>
      <div className="below-summary">
      <h4 className="heading-KMS">
        <span className="icon-container">
          <TbMessage2Minus />
        </span>
        Time Calculations{" "}
      </h4>
      <div className="sub-heading">
        <span>Loading:</span>
        <span>10 Mins</span>
        
      </div>

      <div className="sub-heading">
        <span>Unloading:</span>
        <span>5 Mins</span>
        
      </div>

      <div className="sub-heading">
        <span>Breaks:</span>
        <span>180 Mins</span>
        
      </div>

      <div className="sub-heading">
        <span>Travel To: </span>
        <span>20 Mins</span>
        
      </div>


      <div className="sub-heading">
        <span>Travel From: </span>
        <span>75 Mins</span>
        
      </div>


      <div className="sub-heading">
        <span>One Side: </span>
        <span>55 Mins</span>
        
      </div>


      <div className="sub-heading">
        <span>Full Trip:</span>
        <span>125 Mins</span>
        
      </div>

    
      </div>
  
    </div>
  );
}

export default Summary;
