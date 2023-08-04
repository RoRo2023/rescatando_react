import { Carousel } from "bootstrap";

function CarouselComponent(){

    return(
        <>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            </head>
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
                    </div>
                </section>
                <section class="container boxes">
                    <div class="box">
                        <p class="icon"><i class="bi bi-person-fill"></i></p> 
                        <h2 class="title">ACERCA DE</h2>
                        <p class="box-text">Rescatando es un espacio incluyente diseñado para conservar diapositivas, que trabaja en el rescate del archivo fotográfico</p>
                        <a href="./acerca-de.html" class="readmore"><i class="bi bi-plus-square"></i></a>
                    </div>
                    <div class="box">
                        <p class="icon"><i class="bi bi-camera-fill"></i></p>
                        <h2 class="title">QUIÉNES SOMOS</h2>
                        <p class="box-text">Somos un equipo formado por gente valiosa que tenemos distintas capacidades y realizamos con calidad el trabajo de resca...</p>
                        <a href="./quienes-somos.html" class="readmore"><i class="bi bi-plus-square"></i></a>
                    </div>
                    <div class="box">
                        <p class="icon"><i class="bi bi-gift-fill"></i></p>
                        <h2 class="title">LAS IMÁGENES</h2>
                        <p class="box-text">El archivo fotográfico fue puesto a nuestra disposición por México Desconocido con el fin de facilitar el resca...</p>
                        <a href="./las-imagenes.html" class="readmore"><i class="bi bi-plus-square"></i></a>
                    </div>
                </section>
            </main>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </>
    )
}

export default CarouselComponent;