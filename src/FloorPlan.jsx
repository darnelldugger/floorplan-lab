import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  return ( 
    <>
    <Kitchen />
    <LivingRoom />
    <div className="half-bath">
    <Bath size = {'Half'} />
    </div>
    <div className="bedroom-1">
    <Bedroom bedNum = {1} />
    </div>
    <div className="bedroom-2">
    <Bedroom bedNum = {2} />
    </div>
    <div className="bedroom-3">
    <Bedroom bedNum = {3} />
    </div>
    <div className="full-bath">
    <Bath size = {'Full'} />
    </div>
    </>
   )
}

      
      
 
export default FloorPlan;