

const SearchBox = ({className,placeholder,onChangeHandler,value}) => (
    <input 
        type='search' 
        className={className} 
        onChange={onChangeHandler} 
        placeholder={placeholder}
        value={value}
    />
);

export default SearchBox;