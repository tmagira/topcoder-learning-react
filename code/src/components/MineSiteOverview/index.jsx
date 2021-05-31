import { useState,useEffect } from "react";
import {useLocation} from 'react-router-dom'; //untuk ngambil data dari path useHistory

function MineSiteOverview(){
    const location = useLocation(); 
    const [isLoading, setLoading] = useState(true); //untuk menandai sorting sudah selesai atau belum

    useEffect(() => { //untuk melakukan logic sebelum render
        location.state.oreNames.sort(); //sorting
        setLoading(false); //menandai selesai sorting
    },[])

    //conditional rendering
    if(isLoading){ 
        return(<p>loading</p>)
    }else{
        return(
            <ul>
                {location.state.oreNames.map((values, index)=>
                    <li key={index}>{values}</li>
                )}
            </ul>
        )}
}

export default MineSiteOverview;