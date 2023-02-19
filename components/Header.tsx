
import React from 'react'
import NavBar from './NavBar'
import navButtons from './NavButtons'

const Header = (props: any) => {
    return (
        <nav>
            <a><img src="https://see.fontimg.com/api/renderfont4/vmgK9/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/Qi5T/billion-dreams.png" alt="" /></a>
            <a><img src="https://see.fontimg.com/api/renderfont4/1GpKB/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/Qi5T/the-chairman.png" alt="" /></a>
            <NavBar navButtons={navButtons} />
        </nav>
    )
}

export default Header