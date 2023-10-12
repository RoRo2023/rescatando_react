{/*
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
*/}
function LasImagenes(){

    return(
        <>
        {/*<HeaderComponent/> */}
        {/*    <section class="main-title">
            <h6 class="container">LAS IMÁGENES</h6>
            </section>*/}

            <section className="body container las-imagenes">
            <h2 className="title bold">LAS IMÁGENES</h2>
                <p>El archivo fotográfico fue puesto a nuestra disposición por México Desconocido con el fin de facilitar el rescate de las imágenes y, al mismo tiempo, apoyar nuestro proceso de capacitación y reinserción laboral.</p>
                <p>Es un acervo que contiene alrededor de 100,000 imágenes de México en diapositivas que fueron tomadas por destacados fotógrafos entre 1976 y 2000.</p>
                <ul>
                    <li className="bold">Imágenes irrepetibles de hallazgos espeleológicos, arqueológicos y de accidentes geográficos remotos.</li>
                    <li className="bold">Fotografías icónicas de México: pueblos, fiestas, rituales, tradiciones y maravillas naturales.</li>
                    <li className="bold">Un tesoro con valor patrimonial para los mexicanos.</li>
                </ul>
                <h4 className="blue bold">ACERVO DE 100,000 IMÁGENES ICÓNICAS DE MÉXICO</h4>
                <h4 className="blue">en diapositivas tomadas por destacados fotógrafos.</h4>
                {/*<img src={require("../assets/si_quieres_comprar-1.png")} alt=""/>*/}
                <div>
                    <img src={require("../assets/fotos2.jpg")} alt="" style={{width: "400px"}}/>
                    <img src={require("../assets/fotos.jpg")} alt=""/>
                </div>
            </section>
        {/*<FooterComponent/>*/}
        </>
    )
}

export default LasImagenes;