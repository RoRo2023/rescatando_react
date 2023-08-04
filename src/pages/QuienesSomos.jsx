import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

function QuienesSomos(){

    return(
        <>
            <HeaderComponent/>
            <section class="main-title">
                <h6 class="container">QUIÉNES SOMOS</h6>
            </section>
            <section class="body container">
                <p>Somos un equipo formado por gente valiosa que tenemos distintas capacidades y realizamos con calidad el trabajo de rescate con procedimientos especialmente diseñados para la conservación de archivos analógicos.</p>
                <p>Lo que hoy hacemos con las fotografías nos enorgullece porque nos capacitamos y realizamos con empeño un trabajo especializado, que además nos hace aptos para reintegrarnos al mundo laboral en funciones importantes en este u otro entorno.</p>
                <h4 class="blue">¡ESTE PROYECTO TE NECESITA!</h4>
                <p>&nbsp;</p>
                <img src={require("../assets/personas.jpg")} alt=""/>
            </section>
            <FooterComponent/>
        </>
    )
}

export default QuienesSomos;