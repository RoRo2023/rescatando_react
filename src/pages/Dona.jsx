import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

function Dona(){

    return(
        <>
            <HeaderComponent/>
            <section class="main-title">
                <h6 class="container">DONA</h6>
            </section>
            <section class="body container">
                <div>
                    <img src={require("../assets/fotos.jpg")} alt="diapositivas" class="align-right" style={{width: "400px", marginRight: "5px"}}/>
                    <h3 style={{margin: "15px 0 0px"}}>¡CONTAMOS CONTIGO!</h3>
                    <h3>Tu aportación es vital para reunir los recursos necesarios y seguir rescatando.</h3>
                    <p>PUEDES HACER TU APORTACIÓN DE 2 FORMAS DISTINTAS:</p>
                    <p>&nbsp;</p>

                    <h3>COMPRANDO FOTOS</h3>
                    <p style={{maxWidth: "650px"}}>Elige de nuestra galería la o las fotos que más te gusten y realiza el pago a nuestra cuenta.</p>
                    
                </div>
                <p>Las imágenes del archivo recuperado estarán a tu disposición en formato digital o impreso.</p>
                <p>Si estás interesado en ver nuestro catálogo, para comprar imágenes escribe a <span><a href="uciyan.kay@gmail.com">uciyan.kay@gmail.com</a></span> </p>
                
                <h3>APORTANDO DINERO PARA LA CAPACITACIÓN DE UN RESCATISTA</h3>
                <p>Con tu donación puedes lograr que un rescatista mantenga un empleo remunerado.</p>
                <p>Puedes donar una cantidad fija CADA MES, con la cual estarías ayudando a cubrir la remuneración de los participantes de este proyecto.</p>
                <p>Si quieres ayudar en la inclusión laboral de un rescatista, puedes hacer tu donación directamente en el banco.</p>
                <hr/>
                <p><span class="bold">Fundación Diapositiva AC <br/>BBVA</span><br/> Cuenta: 0116723470 <br/> Clabe: 012180001167234707</p>
            </section>
            <FooterComponent/>
        </>
    )
}

export default Dona;