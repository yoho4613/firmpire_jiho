import React from 'react';
import { useSelector } from 'react-redux';

import { userSelector } from '../../features/auth';

// Get access to profile name or id from redux state
// display in the profile component

const Profile = () => {
  const { user } = useSelector(userSelector)
  console.log(user.userName)
  return (
    <div>
      Profile - 

    </div>
  )
}

export default Profile