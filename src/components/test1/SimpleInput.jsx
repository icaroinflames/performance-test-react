import { useContext, useState, useEffect } from "react";
import DataContext from "../../context/DataContext";
import CustomInput from "../CustomImput";


import {create, all} from "mathjs";
const math = create(all);


const SimpleInput = ({ name, formula, ...props }) => {
    const dataContext = useContext(DataContext);
    const fields = dataContext.fields;
    const setFields = dataContext.setFields;

    const [value, setValue] = useState(0);
    
    const onChangeValue = ({target}) => {
        setValue(parseFloat(target.value) || 0);
    };

    useEffect(()=>{
        if(formula !== undefined){
            const newValue = math.evaluate(formula, fields);
            setValue(newValue);
        }
    }, [fields]);

    useEffect(() => {
        const newFields = {...fields, [name]: value};
        dataContext[name] = value;
        setFields(newFields);
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