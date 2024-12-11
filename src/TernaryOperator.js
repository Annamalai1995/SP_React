import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
export let Ternary=()=>
{
    const[wish,setWish]=useState("summa");
    const [result,setResult]=useState("");
    const[change,setChange]=useState({color:'red',backgroundcolor:'black'});
    const getting=(temp)=>
    {
        setWish(temp.target.value)
    }
    const ternaryoperator=()=>
    {
        (wish=='java')?
        setChange({color:'green',backgroundcolor:'black'}):
        (wish=='python')?
        setChange({color:'pink',backgroundcolor:'black'}):


        (wish=='spring')?
        setChange({color:'blue',backgroundcolor:'black'}):

        setResult(wish);

    }
    return(
        <>
        <input placeholder='Enter fav programming lanugage'className='form-control'onChange={getting}/>
        <button className='btn btn-outline-success'onClick={ternaryoperator}>Check The Lang</button>
        <p style={change}>
            {result}

        </p>
       
        </>
    )
}