import Grid from '@mui/material/Grid2'
import React, {useState, useEffect} from "react"
import Cards from "./cards"
import axios from "axios"

const CountryFlag = () =>{
    //defining state for the flag data fetched
    const [flagData,setFlagData] = useState([])
    const fetchFlagData = async () => {
        try{
            const res = await axios.get("https://xcountries-backend.azurewebsites.net/all")
            setFlagData(res.data)
        }catch(err){
                console.error(`Error fetching data: ${err}` )
        }  
    }
    useEffect(()=>{
        fetchFlagData()
    },[])
    return(
        <Grid container rowSpacing={2} columnSpacing={2} sx={{marginTop:"20px", marginLeft:"100px"}} >
           {flagData.map((item)=>(
            <Grid item key={item.abbr} md={6}>
                <Cards flags={item}/>
            </Grid>
           ))}
        </Grid>
    )
}
export default CountryFlag