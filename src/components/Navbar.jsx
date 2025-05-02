import React from 'react'

const Navbar = () => {

    const countries = [
        {
            label: 'MBBS IN RUSSIA',
            href: ""
        },
        {
            label: 'MBBS IN UKRAINE',
            href: ""
        },
        {
            label: 'MBBS IN AZERBAIJAN',
            href: ""
        },
        {
            label: 'MBBS IN GEORGIA',
            href: ""
        },
        {
            label: 'MBBS IN KYRGYZSTAN',
            href: ""
        },
        {
            label: 'MBBS IN UZBEKISTAN',
            href: ""
        },
        {
            label: 'MBBS IN NEPAL',
            href: ""
        },
        {
            label: 'MBBS IN PHILIPPINES',
            href: ""
        },
        {
            label: 'MBBS IN MALASIYA',
            href: ""
        },
        {
            label: 'MBBS IN KAZAKHSTAN',
            href: ""
        },

    ]

    return (
        // <div className="navbar bg-base-100 shadow-sm sticky">
        <div className="navbar bg-white shadow-sm sticky top-0 z-50">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a href="/">Home</a></li>
                        <li>
                            <a>Countries</a>
                            <ul className="p-2 bg-white">
                                {
                                    countries.map((ele, key) => (
                                        <li className='hover:bg-blue-300' key={key}><a>{ele["label"]}</a></li>
                                    ))
                                }
                            </ul>
                        </li>
                        <li><a href="/about">About</a></li>
                        <li><a>Services</a></li>
                        <li><a>Gallery</a></li>
                        <li><a>Contact-us</a></li>
                    </ul>
                </div>
                <a className="text-xl">
                    <img src="/assets/images/logo.png" className="logo" alt="logo-image" height="40" width="70" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 z-1">
                    <li><a href='/'>Home</a></li>
                    <li>
                        <details>
                            <summary>Countries</summary>
                            <ul className="p-2 w-[15rem] bg-white ">
                                {
                                    countries.map((ele, key) => (
                                        <li className='hover:bg-blue-300' key={key}><a>{ele["label"]}</a></li>
                                    ))
                                }
                            </ul>
                        </details>
                    </li>
                    <li><a href="/about">About</a></li>
                    <li><a>Services</a></li>
                    <li><a>Gallery</a></li>
                    <li><a>Contact-us</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar