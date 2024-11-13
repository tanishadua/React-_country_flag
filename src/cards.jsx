import { CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card"
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
const Cards = ({flags}) => {
    const { name ,flag,abbr} = flags
    return(
        <Card sx={{border:"1px solid #cccccc",display:"flex", flexDirection:"column", height:"12rem",width:"12rem",borderRadius:"10px", /*alignContent:"center",justifyContent:"center"*/}}>
            <div style={{paddingTop:"1rem",paddingLeft:"3rem", paddingRight:"3rem"}}>
            <CardMedia 
            component="img"
            image={flag}
            alt={abbr}
            height='100px'
            /> 
            </div>
            
            
            <CardContent >
                <Typography component="div" variant="h6" sx={{textAlign:"center",fontFamily:"serif", fontWeight:"600"}}>
                    {name}
                </Typography>
            </CardContent>

        </Card>
    )
}
export default Cards;