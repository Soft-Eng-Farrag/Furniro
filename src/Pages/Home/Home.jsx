import Header from "../../Components/Home/Header/Header";
import Catagory from "../../Components/Home/Catagory/Catagory";;
import OurProducts from "../../Components/Home/OurProducts/OurProducts";
import Footer from '../../Components/Layout/Footer/Footer'

export default function Home(){
    return(
        <>
            <Header />
            <Catagory />
            <OurProducts />
            <Footer />
        </>
    )
}