import Footer from './footer'
import Navbar from './navbar'

const Layout = ({ children }) => {
    return (
        <main>
            <Navbar />
            <div className="content">
                { children }
            </div>
            <Footer />
        </main>
    );
}

export default Layout;