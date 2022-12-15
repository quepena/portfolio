
import React from 'react'
import NavBar from './NavBar'
import navButtons from './NavButtons'

const Header = (props: any) => {
    return (
        <nav>
            <NavBar navButtons={navButtons} />
        </nav>
    )
}

export default Header