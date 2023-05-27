import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const User = () => {
    const [searchParams, setSearchParmas] = useSearchParams();
    const [users, setUsers] = useState({name: '',email: ''});
    const {name, email} = users;

    const handleChange = (e) => {
        setUsers((prevUsers) => {
            return {...prevUsers, [e.target.name]: e.target.value};
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParmas({name: name, email: email});
        setUsers({name: '',email: ''});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" onChange={handleChange} value={name} name="name" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="email" onChange={handleChange} value={email} name="email" id="email" required />
                </div>
                <div className="btn-div">
                    <button type="submit">Find User</button>
                </div>
            </form>
        </div>
    )
}

export default User;