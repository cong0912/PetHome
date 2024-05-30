import Footer from "../../../Organisms/Footer/Footer";
import Header from "../../../Organisms/Header/Header";
import Navbar from "../../../Organisms/Navbar/Navbar";
import ServiceCard from "../../Molescule/ServiceCards/ServiceCards";

function Mainlayout({ children }) {
    return (

        <>    <Header />
            <Navbar />
            <div>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
            </div>
            <Footer />
        </>


    );
}
export default Mainlayout