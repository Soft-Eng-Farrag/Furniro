import Header from "../../Components/Home/Header/Header";
import Catagory from "../../Components/Home/Catagory/Catagory";;
import OurProducts from "../../Components/Home/OurProducts/OurProducts";
import Carousel from "../../Components/Home/Carousel/Carousel.jsx";

export default function Home(){
    return(
        <>
            <Header />
            <Catagory />
            <OurProducts />
            <Carousel />
        </>
    )
}