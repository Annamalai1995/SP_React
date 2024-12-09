import List, { Unorderlist } from "./Function";
import { Parameter } from "./Parameter";
import { Tables } from "./Table";
import { Hook } from "./UseState";
import { Hook1 } from "./UseState1";

function App() {
  return (
    <>
    {/* <List/>
    <Unorderlist/>
    <Tables/>
    <Hook/> */}
    <Hook1/>
    <Parameter where="./download.jpg"length="200px" breadth="200px"/>

    </>
        
  )
}

export default App;
