import React, {useEffect} from 'react';
import { Field } from 'formik';
import { useSelector } from 'react-redux';
import {selectdropDown3} from '../../features/relaysSlice';

export default function DropDown3({setFieldValue}){

    const items = useSelector(selectdropDown3);
    useEffect(()=>{setFieldValue("newRelayParam[2]", items[0][0])}, []);

    return(
        <Field name = "newRelayParam[2]" as="select">
            {items[0].map((item, index)=>{
                return(<option key={index}>{item}</option>);
            })}
            <option>Add new</option>
        </Field>
    );
}