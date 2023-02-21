
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import NavBar from './NavBar'
import NavButton from './NavButton'
import navButtons from './NavButtons'

const Header = (props: any) => {

    return (
        <nav>
            <Link href="/">
                <img className='logo' src="https://see.fontimg.com/api/renderfont4/GO3ED/eyJyIjoiZnMiLCJoIjo1MiwidyI6MTAwMCwiZnMiOjUyLCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/Qi5T/creattion-demo.png" alt="" />
            </Link>
            <NavBar navButtons={navButtons} />
        </nav>
    )
}

export default Header