
import Footer from './Footer'
import Drawer1 from './Drawer1'


export default function Layout({ children }) {
    console.log("hi")
    return (
        <>
            <Drawer1 />

            <main>{children}</main>
            <Footer />

        </>
    )
}