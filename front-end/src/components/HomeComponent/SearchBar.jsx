export default function SearchBar({ setSearchValue, searchValue }) {
    return (
        <>
            <input type="text" placeholder="Search file" onChange={(e) => { setSearchValue(e.target.value) }} className="form-control" value={searchValue} />
        </>
    )
}