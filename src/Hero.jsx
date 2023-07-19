import React, {useContext} from "react";
import { formContext } from "./context/formContextProvider";

export default function Hero() {

    const {handleSubmit} = useContext(formContext)

    const [formData, setFormData] = React.useState({
        name: '',
        location: '',
        country: ''
    })

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

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
        <div className="user--form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter name:</label>
                <input
                    type="text"
                    className="name--input"
                    name='name'
                    onChange={handleChange}
                    value={formData.name}
                    required
                />
                <label htmlFor="">Enter location:</label>
                <input
                    type="text"
                    className="location--input"
                    name='location'
                    onChange={handleChange}
                    value={formData.location}
                    required
                />
                <label htmlFor="">Enter country:</label>
                <input
                    type="text"
                    className="country--input"
                    name='country'
                    onChange={handleChange}
                    value={formData.country}
                    required
                />
                <button>Submit</button>
            </form>
        </div>
    )
}