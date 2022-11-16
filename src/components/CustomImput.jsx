import { useContext } from "react"
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ThemeContext from "../context/ThemeContext"

const CustomInput = ({name, value, onChangeValue, disabled, ...props}) =>{
    const {theme} = useContext(ThemeContext);
    return (
        theme === "simple"
        ?(
            <div key={name}>
            {name}
            <input 
                id={name} 
                label={name} 
                value={value}
                onChange={onChangeValue} 
                disabled={disabled}/>
                <br/>
            </div>
        )
        :(
            <Box sx={{margin:'12px'}}>
            <TextField 
                id={name} 
                label={name} 
                value={value}
                onChange={onChangeValue} 
                disabled={disabled}
                size="small"/>
        </Box>
        )
    )
}

export default CustomInput;