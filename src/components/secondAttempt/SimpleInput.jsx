import { useContext, useState, useEffect } from "react";
import DataContext from "../../context/DataContext";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {create, all} from "mathjs";
const math = create(all);

const calculateField = (formula, fields) => {
    if(formula !== undefined){
        return math.evaluate(formula, fields);
    }

    return null;
}

const SimpleInput = ({ name, formula, useFor, ...props }) => {
    const {fields, setFields} = useContext(DataContext);
    const [value, setValue] = useState(0);

    const onChangeValue = ({target}) => {
        setValue(parseFloat(target.value) || 0);
    };

    useEffect(() => {
        if(value !== fields[name]){
            console.log(name, "rerender")
            setValue(fields[name]);
        }
    }, [fields]);

    useEffect(() => {
        const newFields = {...fields, [name]: calculateField(formula, fields) ?? value};
        
        if(useFor) {
            console.log("useFor", useFor);
            newFields[useFor] = -1;
        }
        setFields(newFields);
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
    );
};

export default SimpleInput;