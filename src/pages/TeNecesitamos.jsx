import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

function TeNecesitamos(){

    return(
        <>
            <HeaderComponent/>
            <section class="main-title">
                <h6 class="container">TE NECESITAMOS</h6>
            </section>
            <section class="container">
                <nav class="add1" >
                    <img src={require("../assets/400.png")} alt="img" class="align-left"/>
                    <h3 >JUNTOS HAGAMOS ESTE PROYECTO SOSTENIBLE</h3>
                    <p>Hoy por hoy estamos operando en un turno con 10 personas y los resultados son muy positivos; sin embargo, necesitamos volver este proyecto sostenible a través de donaciones y 
                        venta de imágenes a personas como tú: comprometidas con las causas incluyentes, que aman México y que quieren crear un mundo donde todos tengamos derechos y oportunidades 
                        sin importar las diferencias.</p>
                    <p>Con tu aportación reuniremos los recursos que nos permitan seguir operando en 2 turnos de 10 personas cada uno, ampliando los beneficiados a 80 personas en talleres de 
                        capacitación impartidos en instituciones de medio camino.</p>
                    <h3>QUEREMOS QUE BENEFICIE A MÁS PERSONAS</h3>
                    <p>Nuestra misión es compartir con más personas este modelo. Para ello, estamos diseñando un procedimiento y registrando los avances con la intención de que, en el futuro, 
                        el modelo pueda ser replicado por empresas o instituciones. La documentación se pondrá a disposición de las organizaciones interesadas.</p>
                </nav>
            </section>
            <section class="add2 container">
                <div>
                    <div class="add2-img">
                        <img src={require("../assets/se_requiere.jpg")} class="align-right" alt="img"/>
                        <h4 class="bold blue">NOS SENTIMOS ORGULLOSOS DEL
                            TRABAJO QUE REALIZAMOS.</h4>
                        <h5 class="text">Nos capacitamos con especialistas para rescatar el archivo.</h5>
                    </div>
                    
                    <a href="./tienda.html"><img src={require("../assets/si_quieres_comprar-1.png")} alt="Si quieres COMPRAR FOTOS Click"/></a>
                    <p class="bold">Deposita tus aportaciones a la cuenta</p>
                    <p class="bold">Fundación Diapositiva AC</p>
                    <p class="bold">BBVA</p>
                    <p><span class="bold">Cuenta: </span>0116723470</p>
                    <p><span class="bold">CLABE: </span>012180001167234707</p>
                </div>
                {/*
                <div>
                    <img src="./assets/se_requiere.jpg" class="align-right" alt="img">
                </div>   
                */}
                </section>
            <FooterComponent/>
        </>
    )
}

export default TeNecesitamos;