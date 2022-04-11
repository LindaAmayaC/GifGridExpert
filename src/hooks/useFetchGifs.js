import { useEffect, useState } from "react"
import { getGifs } from '../helpers/GetGifs';



export const useFetchGifs = (category) => {


    const [state, setState] = useState({
        data:[],
        loading: true
    });

    const [images, setImages] = useState([]);

    useEffect( () => {
        // hacer la peticion y trtaer las imagenes

        getGifs( category ) 
            .then ( imgs => {

                setState({
                    
                    data : imgs,
                    loading : false
                });
            })
        
    },[category])



    return state; //{data[],loading: true};


}
