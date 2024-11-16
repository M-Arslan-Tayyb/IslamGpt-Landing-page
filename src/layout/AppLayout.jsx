import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

import { useState } from 'react'


function AppLayout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (


        <div className="flex flex-col min-h-screen">
            <Header onMenuStateChange={setIsMenuOpen} />

            <main className="flex-grow">
                <Outlet context={{ isMenuOpen }} />

            </main>
            <Footer />
        </div>
    )
}

export default AppLayout