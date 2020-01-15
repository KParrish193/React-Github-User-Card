import React from 'react';
import styled from 'styled-components';

const Profile = styled.p`
    text-decoration: none;
`

const UserCard = props => {
    console.log(props);
    return (
    <div className="card">
        <img src={props.avatar_url} />
        <div className="card-info">
            <h3 className="name">{props.name}</h3>
            <p className="username">{props.login}</p>
            <p>Location: {props.location}</p>
            <Profile>Profile:  
                <a href={props.html_url}>{props.html_url}</a>
            </Profile>
            <p>Followers: {props.followers}</p>
            <p>Following: {props.following}</p>
            <p>Bio: {props.bio}</p>
        </div>
    </div>
    );
}
export default UserCard;