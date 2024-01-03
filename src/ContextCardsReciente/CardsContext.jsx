import React, { createContext, useState, useEffect } from "react";

export const CardsContext = createContext({});



export const UseProvider = ({ Children }) => {
   
 const url = 'http://localhost:3030/tutoriales'
const [tutoriales, setTutoriales] = useState([]);
useEffect(()=>{
fetch(url)
.then(resp => resp.json())
.then(data =>{
    setTutoriales(data.tutoriales);
})
    .catch(error => {
        console.error("Error fetching data:", error);
    console.log(url);
    console.log(data);
    });

},[]); 
return(
    <CardsContext.Provider value={tutoriales}>
        {Children}
    </CardsContext.Provider>
) 


}
export default UseProvider;