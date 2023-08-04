import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

function Agradecimientos(){

    return(
        <>
            <HeaderComponent/>
            <section class="main-title">
                <h6 class="container">AGRADECIMIENTOS ESPECIALES</h6>
            </section>
            <section class="body body-b container">
                <h4>¡GRACIAS!</h4>
                <p>Agradecemos ampliamente la participación y apoyo de <span class="bold">tod@s quienes han confiado</span>  en nuestro proyecto, demostrando con ello su amplio compromiso con la Inclusión en México.</p>
                <p>De manera especial agradecemos a <span><a href="https://www.adabi.org.mx/">ADABI, A.C.</a></span>  por quienes gracias a su apoyo hemos podido continuar con nuestro servicio durante estos tiempos difíciles, así mismo, agradecemos al <span class="bold">Sr. Ignacio Guevara e.p.d.</span> quién desde el inicio de este proyecto, sumó su talento y entusiasmo para darle a luz. </p>
                <p>Con su valiosa ayuda, seguiremos trabajando.</p>
                <div class="agradecimientos-logos">
                    <a href="https://www.adabi.org.mx/"><img src={require("../assets/logotip_ADABI-trans-300x276.png")} alt="ADABI"/></a>
                    <a href="http://www.casa-azul.org.mx/"><img src={require("../assets/casa_azul.png")} alt="Casa Azul"/></a>
                    <a href="http://www.compuarte.com.mx/"><img src={require("../assets/logoCompuarte.png")} alt="Compuarte"/></a>
                    <a href="https://www.mexicodesconocido.com.mx/"><img src={require("../assets/images.png")} alt="México Desconocido"/></a>
                    <a href="https://fundacionpernodricardmexico.org/"><img src={require("../assets/fundacion_pernod_ricard.png")} alt=" Fundación Pernod Ricard México"/></a>
                    <a href="http://www.reanudar.com.mx/"><img src={require("../assets/reanudar.png")} alt="REanuDar"/></a>
                </div>
            </section>
            <FooterComponent/>
        </>
    )
}

export default Agradecimientos;