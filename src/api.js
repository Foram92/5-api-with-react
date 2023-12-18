import axios from "axios";


//this is the request to the unsplash site to fatch the data that use will be search in the searchBar
//async should write when u use await key
const SearchImages = async (term) => {
    //this is the URL from unsplash site
    //here await is used for to wait for the respose and then continue the code
    const response = await axios.get ('https://api.unsplash.com/search/photos', {
        //this is the header of request we are going to make (key is from usplash) 
        headers: {
            Authorization: 'Client-ID W5tj_-Yua4OxJzNuy-C82AdDfVWAPSTIfQdFLM-szIg', 
        },
        //this is the body of our request
        params: {
            query: term,
        },
    });

    return response.data.results;

    //in the only respose we get all the bunch of object which we don't needed, so we only get data.result
    return response.data.results;
};

export default SearchImages;