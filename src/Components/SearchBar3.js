import { useState } from 'react';

function SearchBar3 ({onSubmit}) {
    
    const [term, setTerm] = useState ('');
   
    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        onSubmit('nature');
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    );
}

export default SearchBar3 ;