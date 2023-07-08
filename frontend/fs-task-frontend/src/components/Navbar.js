import React from 'react'

const Navbar = () => {
    const handleLogout = () => {
        localStorage.removeItem('user')

    }
    return (
        <nav>
            <button onClick={handleLogout}>Log Out</button>
        </nav>
    )
}

export default Navbar
