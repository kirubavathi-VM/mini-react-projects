import React, { useState } from 'react'

const RegForm = () => {
    const [user, setUser] = useState({
        name: "Demo",
        age: 24,
        gender: "Male",
        isMarried: true,
        country: "India",
        bio: "Tell about yourself..."
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser( { ...user, [name]: value})
    }

    return (
        <>
            <table>
                <tbody >
                    <tr>
                        <td>Name</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <td>Married Status</td>
                        <td>{user.isMarried ? "Married" : "Not Married"}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>{user.country}</td>
                    </tr>
                    <tr>
                        <td>Bio.</td>
                        <td>{user.bio}</td>
                    </tr>
                </tbody>
            </table>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={user.name}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="age"
                    value={user.age}
                    onChange={handleChange}
                />
                <div>
                    <label htmlFor="male">
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="Male"
                            onChange={handleChange}
                            checked={user.gender === "Male"}
                        />
                        Male
                    </label>
                    <label htmlFor="female">
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="Female"
                            onChange={handleChange}
                            checked={user.gender === "Female"}
                        />
                        Female
                    </label>
                </div>
                <div>
                    <label htmlFor="married">
                        <input
                            type="checkbox"
                            name="isMarried"
                            id="married"
                            value={user.isMarried}
                            onChange={handleChange}
                            checked={user.isMarried}
                        />
                        Is Married
                    </label>
                </div>
                <div>
                    <select
                        name="country"
                        value={user.country}
                        onChange={handleChange}
                    >
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                    </select>
                </div>
                <textarea
                    name="bio"
                    value={user.bio}
                    cols="30"
                    rows="5"
                    onChange={handleChange}
                />
            </form>
        </>
    )
}

export default RegForm