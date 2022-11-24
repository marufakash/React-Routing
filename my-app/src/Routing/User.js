// route parameter, query parameter
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import style from './home.module.css';

const User = () => {
    const [searchParmas, setSearchParmas] = useSearchParams();
    const [user, setUser] = useState({name: '', age: ''});
    const {name, age} = user;

    const handlChange = (e) => {
        setUser((prevUser) => {
            return ({...prevUser, [e.target.name]: e.target.value})
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        setSearchParmas({name: name,age: age})
        setUser({name: '', age: ''});
    }

    return (
        <div className={style.form}>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" onChange={handlChange} value={name} name="name" id="name" required />
                </div>
                <div>
                    <label htmlFor="age">Age : </label>
                    <input type="number" onChange={handlChange} value={age} name="age" id="age" required />
                </div>
                <div className={style.btnDiv}>
                    <button type="submit">Find user</button>
                </div>
            </form>
        </div>
    )
}

export default User;