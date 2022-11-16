import { useState, useEffect, useContext } from 'react';
import SimpleInput from "./SimpleInput";
import initialData from "../../initialData.json";
import DataContext from "../../context/DataContext";
import ThemeContext from "../../context/ThemeContext";

import { getStructure } from '../../structures';

import {create, all} from "mathjs";
const math = create(all);

const Model = () => {
    const [fields, setFields] = useState(initialData.fields);
    const [structure, setStructure] = useState(null);
    const dataContext = useContext(DataContext);
    const {size: structureSize } = useContext(ThemeContext);
    
    dataContext.fields = fields;
    
    const calculateFields = (data, curField) => {
        
        const {formula, useFor } = structure.fields[curField];

        const newValue = math.evaluate(formula, data);

        //
        // copy the object is a little bit slower
        //
        // const newData = {...data, [curField]: newValue}
        // if(useFor !== undefined){
        //     calculateFields(newData, useFor);
        //     return;
        // }
        // setFields(newData);

        data[curField] = newValue;
        if(useFor !== undefined){
            calculateFields(data, useFor);
            return;
        }
        setFields(data);
    };

    useEffect(() => {
        setStructure(getStructure(structureSize));
    }, [structureSize]);
    
    return structure ? 
    (
        Object.entries(structure.fields).map(([key, value]) => {
            return <SimpleInput 
            key={key} 
            name={key} 
            calculateFields={calculateFields}
            {...value}/>;
        })
    )
    :"loading"
};

export default Model;