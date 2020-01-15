import React from 'react';
import styled from 'styled-components';

const Profile = styled.a`
    text-decoration: none;
    color: black;
`

const UserCard = (props) => {
    console.log(props);

    return ( 
    <>
        <div className="userProfile">
        <div className="singleUser">
        <div className="subSingleUser">
            <p>
                <Profile
                className="userName" 
                href={props.myUser.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                >
                { props.myUser.name }
                </Profile>
            </p>
            <img src={props.myUser.avatar_url} alt="profile picture" />
        <div className="other-info">
            <p className="username">{props.myUser.login}</p>
            <p>Location: {props.myUser.location}</p>
            <p>Followers: {props.myUser.followers}</p>
            <p>Following: {props.myUser.following}</p>
            <p>Bio: {props.myUser.bio}</p>
        </div>
    </div>
    </div>
    </div>
    </>
    )
};

export default UserCard;