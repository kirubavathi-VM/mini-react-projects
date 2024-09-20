import React from 'react'
import User from './User';

const userData = [
    {
        name: "James",
        city: "California",
        description: "Full Stack web developer",
        skills: ["Vlogging", "Web Development", "HTML", "CSS", "JavaScript", "React", "Node"],
        online: true,
        profile: "logo192.png"
    },
    {
        name: "Alice",
        city: "New York",
        description: "UI/UX Designer",
        skills: ["Design", "Photoshop", "Illustrator", "Figma", "Sketch"],
        online: false,
        profile: "logo192.png"
    },
    {
        name: "Michael",
        city: "Texas",
        description: "Backend Developer",
        skills: ["Python", "Django", "Flask", "SQL", "API Development"],
        online: true,
        profile: "logo192.png"
    },
];

const UserCard = () => {
    return (
        <>
            {
                userData.map((user, index) => (
                    <User
                        key={index}
                        name={user.name}
                        city={user.city}
                        description={user.description}
                        skills={user.skills}
                        online={user.online}
                        profile={user.profile}
                    />
                    // <div className='card-container'>
                    //     <span className={user.online ? "pro online" : "pro offline"}>
                    //         {user.online ? "ONLINE" : "OFFLINE"}
                    //     </span>
                    //     <img src={user.profile} alt="user1" className='img' />
                    //     <h3>{user.name}</h3>
                    //     <h3>{user.city}</h3>
                    //     <p>{user.description}</p>
                    //     <div className='buttons'>
                    //         <button className='primary'>Message</button>
                    //         <button className='primary outline'>Following</button>
                    //     </div>
                    //     <div className='skills'>
                    //         <h6>Skills</h6>
                    //         <ul>
                    //             {user.skills.map((skill, index) => (
                    //                 <li key={index}>{skill}</li>
                    //             ))}
                    //         </ul>
                    //     </div>
                    // </div>
                ))
            }
        </>
    )
}

export default UserCard

