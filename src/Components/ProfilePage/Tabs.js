import React from 'react'
import { useState, useEffect } from 'react'

function Tabs() {
    const [active, setActive] = useState(0)
  return (
    <div>
    <div class="border-b border-gray-200 w-[50vw] dark:border-gray-700 mt-6 bg-white rounded-l" >
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400" data-tabs-toggle="#myTabContent">
            <li class="mr-2">
                <button onClick={()=>{setActive(1);}}  class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                    <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"  data-tabs-target="#profile" type="button" role="tab" ></path></svg>Profile
                </button>
            </li>
            <li class="mr-2">
                <button onClick={()=>{setActive(2);}}  class="inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                    <svg aria-hidden="true" class="w-5 h-5 mr-2 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"  data-tabs-target="#dashboard" type="button" role="tab" ></path></svg>Dashboard
                </button> 
            </li>
            <li class="mr-2">
                <button onClick={()=>{setActive(3);}} class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                    <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"  data-tabs-target="#settings" type="button" role="tab" ></path></svg>Settings
                </button>
            </li>
            <li class="mr-2">
                <button onClick={()=>{setActive(4);}} class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                    <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"  data-tabs-target="#contacts" type="button" role="tab" ></path></svg>Contacts
                </button>
            </li>
            
        </ul>
    </div>
    <div id="myTabContent">
  <div class={active==1 ? ""   :"hidden" } id="profile" role="tabpanel" aria-labelledby="profile-tab">
      <p class="text-sm text-gray-500 dark:text-gray-400"> <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. </p>
  </div>
  <div class={active==2 ? ""   :"hidden" } id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
      <p class="text-sm text-gray-500 dark:text-gray-400"><strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong></p>
  </div>
  <div class={active==3 ? ""   :"hidden" } id="settings" role="tabpanel" aria-labelledby="settings-tab">
      <p class="text-sm text-gray-500 dark:text-gray-400"><strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong></p>
  </div>
  <div class={active==4 ? ""   :"hidden" } id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
      <p class="text-sm text-gray-500 dark:text-gray-400"> <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong></p>
  </div>
</div>

    </div>
  )
}

export default Tabs

// const [active, setActive] = useState(0)
// return (
//   <div>

// <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
//   <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
//       <li class="mr-2" role="presentation">
//           <button onClick={()=>{setActive(1);}} class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
//       </li>
//       <li class="mr-2" role="presentation">
//           <button  onClick={()=>{setActive(2);}}  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
//       </li>
//       <li class="mr-2" role="presentation">
//           <button  onClick={()=>{setActive(3);}}  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
//       </li>
//       <li role="presentation">
//           <button  onClick={()=>{setActive(4);}}  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
//       </li>
//   </ul>
// </div>
