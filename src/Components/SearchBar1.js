function SearchBar1 ({ onSubmit }) {

    //here we need to pass data that's why
    const handleClick = () => {
        onSubmit ('cars');
    };


    return (
        <div>
            <input />
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default SearchBar1;