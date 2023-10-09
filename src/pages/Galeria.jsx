import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import Gallery from "../components/Gallery";

function Galeria(){

    return(
        <>
            <HeaderComponent/>
            <div style={{marginTop: '82px', marginBottom: '20px'}}>
                <Gallery/>
            </div>
            <FooterComponent/>
        </>
    )
}

export default Galeria;