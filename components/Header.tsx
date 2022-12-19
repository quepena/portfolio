
import React from 'react'
import NavBar from './NavBar'
import navButtons from './NavButtons'

const Header = (props: any) => {
    return (
        <nav>
            <div>Logo</div>
            <NavBar navButtons={navButtons} />
        </nav>
    )
}

export default Header