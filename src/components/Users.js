import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
    
        <Outlet />
     <div>
        <button onClick={() => setSearchParams({ filter: 'active' })}>
            Active Users
        </button>
        <button onClick={() => setSearchParams({})}>
            Reset User
        </button>
     </div>

     {
        showActiveUsers ? (
            <h2>Showing Active Users</h2>
        ) : (
            <h2>All users</h2>
        )
     }
    </div>
  )
}

export default Users