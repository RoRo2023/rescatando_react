import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

function ProcesoTecnico(){

    return(
        <>
            <HeaderComponent/>
            <section class="main-title">
                <h6 class="container">PROCESO TÉCNICO</h6>
            </section>
            <section class="body container">
                <div>
                    <img src={require("../assets/beatriz_md.jpg")} class="align-right" alt=""/>

                    <h4 class="blue">1</h4>
                    <h4>ASIGNACIÓN</h4>
                    <p>El coordinador selecciona la diapositiva, la separa de la charola y la entrega al técnico responsable.</p>
                    
                    <h4 class="blue">2</h4>
                    <h4>OBSERVACIÓN INICIAL</h4>
                    <p>Se identifica el estado general de la diapositiva.
                        Calidad de la toma fotográfica y color.</p>
                </div>
                
                <h4 class="blue">3</h4>
                <h4>LIMPIEZA</h4>
                <p>Se elimina polvo y sustancias extrañas.</p>

                <h4 class="blue">4</h4>
                <h4>LLENADO DE FICHA TÉCNICA</h4>
                <p>Se identifica lugar, autor, publicación, temas, anotaciones en el soporte, palabras clave y descripción general.</p>

                <h4 class="blue">5</h4>
                <h4>ESCANEO</h4>
                <p>Se digitaliza la imagen en una resolución predeterminada.</p>

                <h4 class="blue">6</h4>
                <h4>EQUILIBRIO DE COLOR Y CONTRASTE</h4>
                <p>Se aplican filtros que mejoren la calidad del color y contraste de la imagen.</p>

                <h4 class="blue">7</h4>
                <h4>INGRESO A UNA BASE DE DATOS</h4>
                <p>Para concluir, capturamos la información recabada en una base de datos para facilitar su búsqueda.</p>
            </section>
            <FooterComponent/>
        </>
    )
}

export default ProcesoTecnico;