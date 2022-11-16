import { useContext, useState, useEffect } from "react";
import DataContext from "../../context/DataContext";
import CustomInput from "../CustomImput";

const SimpleInput = ({ name, formula, useFor, calculateFields, ...props }) => {
    const {fields} = useContext(DataContext);
    const [value, setValue] = useState(0);

    const onChangeValue = ({target}) => {
        setValue(parseFloat(target.value) || 0);
    };

    useEffect(()=>{
        if(formula !== undefined){
            setValue(fields[name]);
        }
    }, [fields]);
    
    useEffect(() => {
        if(formula !== undefined) return;
        calculateFields({...fields, [name]: value}, useFor);
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