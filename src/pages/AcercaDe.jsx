import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

function AcercaDe(){

    return(
        <>
            <HeaderComponent/>
            <section class="main-title">
                <h6 class="container">ACERCA DE</h6>
            </section>
            <section class="body container">
                <p>Rescatando es un espacio incluyente diseñado para conservar diapositivas, que trabaja en el rescate del archivo fotográfico histórico de la revista <br/><span class="bold"> México Desconocido.</span></p>
                <p>El reto del equipo de rescatistas es limpiar, clasificar y digitalizar las diapositivas que se encontraban guardadas y en riesgo de desaparecer con el paso del tiempo.</p>
                <p class="bold">¡Te invitamos a participar en este proyecto de rescate!</p>
                <h4 class="blue">RESCATEMOS JUNTOS UNO DE LOS PRINCIPALES ARCHIVOS FOTOGRÁFICOS DE MÉXICO</h4>
                <p>&nbsp;</p>
                <img src={require("../assets/quienes_somos.jpg")} alt=""/>
            </section>
            <FooterComponent/>
        </>
    )
}

export default AcercaDe;