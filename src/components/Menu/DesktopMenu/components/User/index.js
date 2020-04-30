import React from 'react'
import Link from 'next/link'
import { UserProfile } from './styles'

// todo update path depending if the user is logged or not

const User = () => (
  <Link href={{ pathname: '/signin' }}>
    <UserProfile />
  </Link>
)

export default User
