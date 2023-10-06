import React from 'react';
import profileImage from "../assets/profile.png"

 const ProfileImage = () => {
    return (
        <>
            <img src={profileImage} style={styles}/>
        </>
    )
}

let styles = {
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: "hidden",
    margin: 75
}

export default ProfileImage;