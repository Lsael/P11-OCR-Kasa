import { PropsWithChildren } from 'react'
import Footer from '../components/Footer'
import Header from "../components/Header"

const Layout = ({children}:PropsWithChildren) => {
    return(
        <div className="layout">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout