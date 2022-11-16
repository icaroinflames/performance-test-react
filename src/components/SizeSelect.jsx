import { useState, useContext, useEffect } from "react"
import ThemeContext from "../context/ThemeContext"
import Select from "@mui/material/Select"
import MenuItem from '@mui/material/MenuItem';

const SizeSelect = () => {
    const [size, setSize] = useState("");
    const {size: contextSize, setSize: setContextSize } = useContext(ThemeContext);
    
    useEffect(() =>{
        setSize(contextSize);
    }, [contextSize]);

    const handleChange = ({target}) => {
        setContextSize(target.value);
      };

    return (
        <Select
            labelId="structure-size"
            id="demo-simple-select"
            value={size}
            label="Size"
            onChange={handleChange}
            sx={{ backgroundColor:'white' }}
        >
            <MenuItem value="S">Small</MenuItem>
            <MenuItem value="M">Medium</MenuItem>
            <MenuItem value="L">Large</MenuItem>
            <MenuItem value="XL">Extra Large</MenuItem>
            <MenuItem value="XXL">Crazy Large</MenuItem>
        </Select>
    )
}

export default SizeSelect;