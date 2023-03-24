import React from 'react'
import Navbar from '../Components/Navbar'
import ProfileBanner from '../Components/ProfilePage/ProfileBanner'
import ProfileCard from '../Components/ProfileCard'
import SideComponentProfile from '../Components/ProfilePage/SideComponentProfile'

function ProfilePage() {
  return (
    <div className='bg-[rgb(218,224,230)] '>
      <Navbar></Navbar>
      <hr></hr>
      <div className='flex flex-col p-3 ml-[3%] mr-[3%]'>
        <ProfileBanner />
        <SideComponentProfile/>



 












      </div>
    </div>




  )
}

export default ProfilePage