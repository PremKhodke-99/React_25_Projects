import React, { useEffect, useState } from 'react'
import Suggestion from './Suggestion';

function SearchAutoComplete() {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredusers] = useState([]);

    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);

        if (query.length > 1) {
            const filteredData = users && users.length ?
                users.filter(item => item.toLowerCase().indexOf(query) > -1)
                : [];
            setFilteredusers(filteredData)
            setShowDropdown(true)
        } else {
            setShowDropdown(false)
        }
    }

    async function fetchListOfUsers() {
        try {
            setLoading(true)

            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();

            // console.log(data);
            if (data && data.users) {
                setUsers(data.users.map((userItem) => userItem.firstName));
            }
        } catch (err) {
            setError(err);
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchListOfUsers();
    }, []);

    console.log(users, filteredUsers);
    function handleClick(event){
        console.log(event.target.innerText);
        setShowDropdown(false);
        setSearchParam(event.target.innerText);
        setFilteredusers([]);
    }

    return (
        <div className='search-autocomplete-container'>
            {
                loading ? (<h3>Loading data! Please wait</h3>)
                    : (<input
                        value={searchParam}
                        type="text"
                        name='search-users'
                        placeholder='Search User here...'
                        onChange={handleChange}
                    />)
            }
            {
                showDropdown && <Suggestion handleClick={handleClick} data={filteredUsers} />
            }
        </div>
    )
}

export default SearchAutoComplete