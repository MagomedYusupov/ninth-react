import {useSelector} from "react-redux";
import Button from "./Button";


function App() {
  const counter=useSelector((state)=>{return state;})

  return (
      <div>
         <div>
           {counter}
         </div>
         <Button/>
      </div>

  );
}

export default App;
