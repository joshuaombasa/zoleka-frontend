import React, { createContext } from "react";

const formContext = createContext()

function FormContextProvider(props) {


    function handleSubmit(formData) {

        fetch('http://localhost:3000/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Display response from the server
                setFormData({ name: '', location: '', country: '' }); // Reset the form
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <>
            <formContext.Provider value={{handleSubmit: handleSubmit}}>
                {props.children()}
            </formContext.Provider>
        </>
    )
}

export {FormContextProvider, formContext}