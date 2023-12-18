function SearchBar2 ( {onSubmit} ) {

    //here whatever u fill in form and press enter, it will goes to url and nothing will appear in console; so to prevent that we set the perameter event and event.preventDefault().
    const handleFormSubmit = (event) => {
        event.preventDefault();
        //console.log("tell Parent about some date");
        onSubmit ('cars');
    };


    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input />
            </form>
        </div>
    );
}

export default SearchBar2;