import { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import SimpleInput from "./SimpleInput";
import initialData from "../../initialData.json";
import DataContext from "../../context/DataContext";

import { getStructures } from '../structures';

const Model = () => {
    const [structure, setStructure] = useState(null);
    const dataContext = useContext(DataContext);
    const {structureSize } = useParams();
    
    
    dataContext.fields = initialData.fields;

    useEffect(() => {   
        setStructure(getStructures(structureSize))
        Object.entries(initialData.fields).forEach(([key, value]) => dataContext[key] = value)
    }, []);

    return structure ?
    (
        Object.entries(structure.fields).map(([key, value]) => {
            return <SimpleInput key={key} name={key} {...value}/>;
        })
    ):
    "loading"
};

export default Model;