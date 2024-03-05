import React from 'react'

const Profile = () => {
  return (
    <>
      <div class="container">
        <div class="flex flex-wrap bg-[#F1FADA]">
          <div class="w-full px-4 mb-10 lg:w-1/2">
            <h3 class="font-bold uppercase text-cyan-800 text-3xl mt-5 mb-3">Profile</h3>
            <p class="text-neutral-500 text-xl mb-3">I am an electrical engineering graduated who switching careers to become a web developer</p>
          </div>
          <div class="w-full px-4 lg:w-1/2" >
            <h4 class="font-semibold text-cyan-800 text-3xl mt-5 mb-4">Details</h4>
            <h3 class="font-semibold text-cyan-800 text-l mb-1">Name:</h3>
            <p class="medium text-neutral-500">Sepfianda Eka Widhira</p>
            <h3 class="font-semibold text-cyan-800 text-l mb-1">Age:</h3>
            <p class="medium text-neutral-500">23 years</p>
            <h3 class="font-semibold text-cyan-800 text-l mb-1">Location:</h3>
            <p class="medium text-neutral-500">Semarang, Indonesia</p>
          <div class="flex item-center mb-10">
            <a href="https://www.instagram.com/sepfiandaeka" target="_blank">
              <img src="instagram.avif" alt="logo" width="50"/>
            </a>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile