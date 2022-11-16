import { useContext, useState, useEffect } from "react";
import DataContext from "../../context/DataContext";
import CustomInput from "../CustomImput";

import {create, all} from "mathjs";
const math = create(all);


const SimpleInput = ({ name, formula, useFor, ...props }) => {
    const dataContext = useContext(DataContext);

    const fields = dataContext.fields;

    const [value, setValue] = useState(0);
    dataContext[name] = { value, setValue };
    
    const onChangeValue = ({target}) => {
        setValue(parseFloat(target.value) || 0);
    };

    useEffect(() => {
        let newValue = value;
        
        if(formula !== undefined){
            newValue = math.evaluate(formula, fields);
            setValue(newValue);
        }

        const newFields = {...fields, [name]: newValue};
        dataContext.fields = newFields;

        if(useFor && dataContext[useFor]) dataContext[useFor].setValue(-1);
    },[value]);

    return <CustomInput 
            name={name} 
            value={value}
            onChangeValue={onChangeValue}
            disabled={formula !== undefined}
            {...props}
            />
};

export default SimpleInput;