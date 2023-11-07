import React from 'react'
import LogoSearch from '../../profilesSide/LogoSearch/LogoSearch'
import InfoCard from '../InfoCard/InfoCard'
import FollowersCard from '../../profilesSide/FollowersCard/FollowersCard'
const ProfileLeft = () => {
  return (
   <div className="ProfileLeft">
    <LogoSearch/>
    <InfoCard/>
    <FollowersCard/>
   </div>
  )
}

export default ProfileLeft
