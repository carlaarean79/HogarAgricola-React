import React, { createContext, useContext } from "react";

export const ContextCards = createContext({});
const tutoriales = [
    {
        "id": 1,
        "nombre": "Porta macetas con macramé",
        "imagen": "https://1.bp.blogspot.com/-UWWgFZQ0_A0/WCOk6sdA1hI/AAAAAAAAB1U/7SUN1_BzLfMdspGMwhMJHQFVbMdWLychQCLcB/s1600/macrame%25CC%2581%2Bplant%2Bhanger1.jpg"
    },
    {
        "id": 2,
        "nombre": "Reciclado de botellas de vidrio",
        "imagen": "https://www.somosfalabella.com/wp-content/uploads/2020/07/reciclaje-de-botellas-de-vidrio-min.jpg"
    },
    {
        "id": 3,
        "nombre": "Renos amigurumis tejidos al crochet",
        "imagen": "https://www.lovelycraft.com/wp-content/uploads/2021/09/reindeer-couple-amigurumi-crochet-pattern-free-pattern-christmas-noel-new-year-xmas-head-body-arms-600x850_c.jpg"
    },
    {
        "id": 4,
        "nombre": "Tríptico pintado con acrílicos sobre lienzo",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy3vTLkLuTUgvLqqqvJj9XA-XRbgyQxgY8zA&usqp=CAU"
    },
    {
        "id": 5,
        "nombre": "Reloj pintado sobre madera recuperada",
        "imagen": "https://i.pinimg.com/236x/86/54/e6/8654e611506aca364224fd87ba701664.jpg"
    },
    {
        "id": 6,
        "nombre": "Técnica de pintura con acrílicos en mates",
        "imagen": "https://acdn.mitiendanube.com/stores/965/182/products/11eb0d5c-373d-482b-bfcd-61e4a7c716df-478acda017ddbe74ce16450504487852-640-0.jpeg"
    }
];

export const UseProvider = ({ children }) => {
    return (
        <ContextCards.Provider value={tutoriales}>
            {children}
        </ContextCards.Provider>
    );
};

export const useTutoriales = () => {
    return useContext(ContextCards);
};

export default UseProvider;