import { useState } from "react"

const Search = () => {
const [userSearch, setUserSearch] = useState(null)

    return(
        <>
        <form>
        <input type="text" placeholder="Search anime.."/>
        <button type="submit">Search</button>
        </form>
        </>
    )
}

export default Search