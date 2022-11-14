import { useState, useEffect, useContext } from 'react';
import SimpleInput from "./SimpleInput";
import initialData from "../../initialData.json";
import DataContext from "../../context/DataContext";

const structure = require("../../structureXXL");

const Model = () => {
    const [fields, setFields] = useState(initialData.fields);
    const dataContext = useContext(DataContext);
    dataContext.fields = fields;
    dataContext.setFields = setFields;
    
    useEffect(() => {
        dataContext = { ...dataContext, ...initialData.fields};
    }, []);
    
    // useEffect(() => {
    //     dataContext.fields = fields;
    // }, [fields]);

    return fields ? 
    (
        Object.entries(structure.fields).map(([key, value]) => {
            return <SimpleInput key={key} name={key} {...value}/>;
        })
    )
    :"loading"
};

export default Model;