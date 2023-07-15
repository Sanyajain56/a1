
import React, { useState } from "react";
import {questions} from "./api";
import Myacc from "./myacc";
const App = () =>{
    const[data, setData] = useState(questions);

    return(
        <>
        <section className="main-div">
            <h1>React Interview Questions</h1>

       
        {
            data.map((curElm)=>{
                const {id,} = curElm;
                return <Myacc key={id}{...curElm}/>
            })
        }
 </section>
        </>
    )
}



export default App;
