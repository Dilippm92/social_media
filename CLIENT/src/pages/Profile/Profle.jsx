import React from 'react'
import './Profile.css'
import ProfileLeft from '../../components/Profile/ProfileLeft/ProfileLeft'
import ProfileCard  from '../../components/profilesSide/ProfileCard/ProfileCard'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
const Profle = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>
        <div className="Profile-center">
         <ProfileCard location = "profilePage"/>
          <PostSide/>
      

        </div>
        <RightSide/>
    </div>
  )
}

export default Profle
