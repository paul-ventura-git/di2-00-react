import Header from './subcomponents/Header'
import Footer from './subcomponents/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <Header />
            <Outlet />
        <Footer />
    </>
  );
}