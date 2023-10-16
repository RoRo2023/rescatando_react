import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import LasImagenes from "./LasImagenes";

function Home(){

    return(
        <> {/*
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
        </head> */}
        <HeaderComponent/> 
        {/*
        <main>
            <section class="jumbotronS">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol> 
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={require("../assets/slider01.jpg")} alt="First slide"/>
                            <div class="carousel-box">
                                <h1>RESCATE DE FOTOS CON CAUSA SOCIAL</h1>
                                <p>Trabajamos en el rescate de material fotográfico antiguo, de valor artístico, cultural e histórico.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={require("../assets/slider02.jpg")} alt="Second slide"/>
                            <div class="carousel-box">
                                <h1>NECESITAMOS TU APOYO</h1>
                                <p>Ayúdanos a financiar este proyecto. Compra imágenes del archivo rescatado, aporta para la  capacitación e inclusión de una persona, o haz un donativo.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={require("../assets/slider03.jpg")} alt="Third slide"/>
                            <div class="carousel-box">
                                <h1>CONSTRUYAMOS UN MUNDO INCLUSIVO</h1>
                                <p>Únete de manera activa en una causa social que nos incluya a todos. Abraza las diferencias para abonar por una sociedad más humana.</p>
                            </div>
                        </div>
                    </div> 
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div> */}
            <Carousel className="jumbotronS">
                <Carousel.Item> {/*style={{height:"66vh"}}*/}
                    <img className="d-block w-100" src={require("../assets/slider01.jpg")} alt="First slide"/>
                    <Carousel.Caption className="carousel-box slide">
                        <h1>RESCATE DE FOTOS CON CAUSA SOCIAL</h1>
                        <p>Trabajamos en el rescate de material fotográfico antiguo, de valor artístico, cultural e histórico.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={require("../assets/slider02.jpg")} alt="Second slide"/>
                    <Carousel.Caption className="carousel-box slide">
                        <h1>NECESITAMOS TU APOYO</h1>
                        <p>Ayúdanos a financiar este proyecto. Compra imágenes del archivo rescatado, aporta para la capacitación e inclusión de una persona al mundo laboral, o haz un donativo.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={require("../assets/inclusivo.jpg")} alt="Third slide"/>
                    <Carousel.Caption className="carousel-box slide">
                        <h1>CONSTRUYAMOS UN MUNDO INCLUSIVO</h1>
                        <p>Únete de manera activa en una causa social que nos incluya a todos. Abraza las diferencias para abonar por una sociedad más humana.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Carousel className="jumbotronS_2">
                <Carousel.Item> {/*style={{height:"66vh"}}*/}
                    <img className="d-block w-100" src={require("../assets/slider01_2.jpg")} alt="First slide"/>
                    <Carousel.Caption className="carousel-box slide">
                        <h1>RESCATE DE FOTOS CON CAUSA SOCIAL</h1>
                        <p>Trabajamos en el rescate de material fotográfico antiguo, de valor artístico, cultural e histórico.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={require("../assets/slider02_2.jpg")} alt="Second slide"/>
                    <Carousel.Caption className="carousel-box slide">
                        <h1>NECESITAMOS TU APOYO</h1>
                        <p>Ayúdanos a financiar este proyecto. Compra imágenes del archivo rescatado, aporta para la capacitación e inclusión de una persona al mundo laboral, o haz un donativo.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={require("../assets/inclusivo_1.jpg")} alt="Third slide"/>
                    <Carousel.Caption className="carousel-box slide">
                        <h1>CONSTRUYAMOS UN MUNDO INCLUSIVO</h1>
                        <p>Únete de manera activa en una causa social que nos incluya a todos. Abraza las diferencias para abonar por una sociedad más humana.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section className="container boxes">
                <div className="box">
                    <p className="icon"><i className="bi bi-person-fill"></i></p> 
                    <h2 className="title"><p className="icon2"><i className="bi bi-person-fill"></i></p>ACERCA DE </h2>
                    <p className="box-text">Rescatando es un espacio incluyente diseñado para conservar diapositivas, que trabaja en el rescate del archivo fotográfico</p>
                    <Link to="/acerca-de" className="readmore"><i className="bi bi-plus-square"></i></Link>
                </div>
                <div className="box">
                    <p className="icon"><i className="bi bi-camera-fill"></i></p>
                    <h2 className="title"><p className="icon2"><i className="bi bi-camera-fill"></i></p>QUIÉNES SOMOS</h2>
                    <p className="box-text">Somos un equipo formado por gente valiosa que tenemos distintas capacidades y realizamos con calidad el trabajo de resca...</p>
                    <Link to="/quienes-somos" className="readmore"><i className="bi bi-plus-square"></i></Link>
                </div>
                <div className="box new">
                    <p className="icon"><i className="bi bi-gift-fill"></i></p>
                    <h2 className="title"><p className="icon2"><i className="bi bi-images"></i>{/*<i class="bi bi-gift-fill"></i>LAS IMÁGENES*/}</p>GALERÍA</h2>
                    <p className="box-text">El archivo fotográfico fue puesto a nuestra disposición por México Desconocido con el fin de facilitar el resca...</p>
                    <Link to="/las-imagenes" className="readmore"><i className="bi bi-plus-square"></i></Link>
                </div>
            </section>
            <LasImagenes/>
            <section className="container">
                <h2 className="title bold">TE NECESITAMOS</h2>
                <nav className="add1" >
                    <img src={require("../assets/400.png")} alt="img" className="align-left"/>
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
            <section className="add2 container">
                <div>
                    <div className="add2-img">
                        <img className="align-right" src={require("../assets/se_requiere.jpg")} alt="img"/>
                        <h4 className="bold blue">NOS SENTIMOS ORGULLOSOS DEL
                            TRABAJO QUE REALIZAMOS.</h4>
                        <h5 className="text">Nos capacitamos con especialistas para rescatar el archivo.</h5>
                    </div>
                    
                    <Link to=""><img src={require("../assets/si_quieres_comprar-1.png")} alt="Si quieres COMPRAR FOTOS Click"/></Link>
                    <p className="bold">Deposita tus aportaciones a la cuenta</p>
                    <p className="bold">Fundación Diapositiva AC</p>
                    <p className="bold">BBVA</p>
                    <p><span className="bold">Cuenta: </span>0116723470</p>
                    <p><span className="bold">CLABE: </span>012180001167234707</p>
                </div>
                {/* <!--
                <div>
                    <img src="./assets/se_requiere.jpg" class="align-right" alt="img">
                </div>   
                --> */} 
            </section>
            <section className="add3 container">
                <h2 className="title bold">
                    ESTE PROYECTO TE NECESITA, CON TU DONATIVO PODREMOS CONTINUAR TRABAJANDO EN EL RESCATE DE ESTE ARCHIVO
                </h2>
                <img src={require("../assets/fundacion_diapositiva_vertical.png")} alt="DIAPOSITIVA"/>
            </section>
        <FooterComponent/>
        </>
    )
}

export default Home;