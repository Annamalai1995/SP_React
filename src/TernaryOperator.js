import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export let Ternary=()=>
{
    const[wish,setWish]=useState("summaa");
    const[result,setResult]=useState("");
    const[changes,setChanges]=useState({color:'red',backgroundColor:'balck'})
    const getingvalues=(temp)=>
    {
        setWish(temp.target.value)
    }

    const ternaryopertor=()=>
    {
       (wish=='java') ?
        setChanges({color:'green',backgroundColor:'black'}):
 
        (wish=='python')?
        setChanges({color:'red',backgroundColor:'black'}):

        (wish=='spring')?
        setChanges({color:'blue',backgroundColor:'black'}):

        setChanges({color:'pink',backgroundColor:'black'})

        setResult(wish);
    }


    return(
        <>
        <input placeholder="enter fav programming lang" className="form-control" onChange={getingvalues} />
        <button className="btn btn-outline-dark fw-bold" onClick={ternaryopertor}>Check The Language</button>
        <p style={changes}>
            {result}
        </p>
        </>
    );
}