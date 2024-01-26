import './App.css';
import {Route, Routes} from "react-router-dom";
import {componentTypes, FormRenderer, validatorTypes} from "@data-driven-forms/react-form-renderer";
import {componentMapper} from "@data-driven-forms/mui-component-mapper";
import React from "react";
import FormTemplate from "@data-driven-forms/mui-component-mapper/form-template";

export const Home = () => <div><h1>Home</h1></div>;
export const About = () => <div><h1>About</h1></div>;

const schema = {
    fields: [{
        component: componentTypes.TEXT_FIELD,
        name: 'name',
    isRequired: true,
    label: 'Name'
}, {
    component: componentTypes.TEXT_FIELD,
        name: 'email',
    isRequired: true,
        label: 'Email',
    type: 'email'
}, {
    component: componentTypes.CHECKBOX,
        name: 'marketing',
    initialValue: true,
        label: 'Send me marketing material',
}]
}
    
const App = () => (
    <>
        <h1>Form:</h1>
        <FormRenderer
            FormTemplate={FormTemplate}
            onSubmit={() => {}} // test
            schema={schema} componentMapper={componentMapper} />
    </>
);
export default App;
