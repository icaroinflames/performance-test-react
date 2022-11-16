import { useState, useEffect, useContext } from 'react';
import SimpleInput from "./SimpleInput";
import initialData from "../../initialData.json";
import DataContext from "../../context/DataContext";
import ThemeContext from "../../context/ThemeContext";

import { getStructure } from '../../structures';

const Model = () => {
    const [fields, setFields] = useState(initialData.fields);
    const [structure, setStructure] = useState(null);
    const dataContext = useContext(DataContext);
    const {size: structureSize } = useContext(ThemeContext);
    
    dataContext.fields = fields;
    dataContext.setFields = setFields;

    useEffect(() => {   
        setStructure(getStructure(structureSize));
        Object.entries(initialData.fields).forEach(([key, value]) => dataContext[key] = value)
    }, [structureSize]);

    return fields && structure ?
    (
        Object.entries(structure.fields).map(([key, value]) => {
            return <SimpleInput key={key} name={key} {...value}/>;
        })
    ):
    "loading"
};

export default Model;