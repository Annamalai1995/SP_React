import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BootstrapExec } from "./Bootstrap";
import List, { Unorderlist } from "./Function";
import { Parameter } from "./Parameter";
import { Tables } from "./Table";
import { Travelsname } from "./Tablecss";
import { Ternary } from "./TernaryOperator";
import { Hook } from "./UseState";
import { Hook1 } from "./UseState1";
import { Homepage } from "./WebPage";
import { RegistrationForm } from "./EmployeeRegistration";
import { ReadingaEmployeedetails } from "./Read";

function App() {
  return (
    <>
    {/* <List/>
    <Unorderlist/>
    <Tables/>
    <Hook/>
    {/* <Hook1/> */}
    {/* <Parameter where="./download.jpg"length="200px" breadth="200px"/>
<Travelsname/>
<BootstrapExec/>
<Ternary/> */} 
{/* <BrowserRouter>
<Homepage/>
<Routes>
  <Route path="Read" exact element={<Tables/>}/>
  <Route path="create" exact element={<Travelsname/>}/>
</Routes>
</BrowserRouter> */}
{/* <Homepage/> */}
{/* <List/>  */}
{/* <RegistrationForm/> */}
<ReadingaEmployeedetails/>
    </>
        
  )
}

export default App;
