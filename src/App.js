import { useState } from 'react';
import SearchBar from './Components/SearchBar';
import ImageList from './Components/ImageList';
import SearchImages from './api';

function App () {

    const [images, setImages] = useState([]);

    //here we need data from child (SearchBar.js) file, that's why we set perameter (term)
    const handleSubmit = async (term) => {
        //console.log('Do a search with ', term);

        //pass term to SearchImages function; term is what user type in input box
        //for SearchImages watch api.js
        const result = await SearchImages(term);

        setImages (result);
    }

    return (
        //here we had pass handleSubmit function to the child to fetch data
        <div> 
            <SearchBar onSubmit = {handleSubmit} />
            <ImageList images={images} />
        </div>
    );
}

export default App;