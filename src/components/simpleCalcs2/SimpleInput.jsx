import { useContext, useState, useEffect } from "react";
import DataContext from "../../context/DataContext";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {create, all} from "mathjs";
const math = create(all);


const SimpleInput = ({ name, formula, ...props }) => {
    const dataContext = useContext(DataContext);
    const fields = dataContext.fields;


    const [value, setValue] = useState(0);
    
    const onChangeValue = ({target}) => {
        setValue(parseFloat(target.value) || 0);
    };

    useEffect(()=>{
        if(formula !== undefined){
            const newValue = math.evaluate(formula, fields);
            setValue(newValue);
        }
    }, [dataContext]);

    useEffect(() => {
        const newFields = {...fields, [name]: value};
        dataContext = newFields;
        dataContext[name] = value;
    },[value]);

    return (
      <Box sx={{margin:'16px'}}>
        <TextField 
            id={name} 
            label={name} 
            value={value}
            onChange={onChangeValue} 
            disabled = {formula !== undefined}/>
      </Box>
    )
};

export default SimpleInput;