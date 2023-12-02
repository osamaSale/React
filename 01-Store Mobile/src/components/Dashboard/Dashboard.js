import React, { useState } from 'react';
import { Header } from './Header';
import { NavbarVertical } from './Navbar-Vertical';

import { Users } from './Tables/Users';
import { Brands } from './Tables/Brands';
import { Admin } from './Admin';
import { Devices } from './Tables/Devices';
import { Products } from './Tables/Products';
import { Contact } from './Tables/Contact';
import { News } from './Tables/News';
import { Wishlist } from './Tables/Wishlist';
import { Carts } from './Tables/Carts';
export const Dashboard = ({ update }) => {
    const [toggleState, settoggleState] = useState(1)

    return (
        <div>
            <Header />
            <div className="main-wrapper">
                <NavbarVertical toggleState={toggleState} settoggleState={settoggleState} />
                <main className="main-content-wrapper">
                    {toggleState === 1 ? <Admin /> :
                        toggleState === 2 ? <Users update={update} /> :
                            toggleState === 3 ? <Brands update={update} /> :
                                toggleState === 4 ? <Devices update={update} /> :
                                    toggleState === 5 ? <Products update={update} /> :
                                        toggleState === 6 ? <Contact update={update} /> :
                                            toggleState === 7 ? <News update={update} /> :
                                                toggleState === 8 ? <Wishlist update={update} /> :
                                                    toggleState === 9 ? <Carts update={update} /> :
                                                        null
                    }
                </main>
            </div>
        </div>
    );
}

