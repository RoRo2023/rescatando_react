import '../index.css'
import { Link } from 'react-router-dom';

function FooterComponent(){

    return(
      <footer>
      <nav class="container footer-top">
          <div class="column1">
              <img class="logo-footer" src={require("../assets/rescatando_footer.png")} alt=""/>
              <p>Rescatando es un proyecto de rescate fotográfico impulsado por la Fundación Diapositiva, A.C., que 
                  permite que gente valiosa que ha sido capacitada por especialistas en conservación de archivos 
                  analógicos realice un trabajo de alta calidad en uno de los archivos fotográficos más importantes 
                  de México.</p>
              <p><Link to="https://www.facebook.com/Rescatandoorgmx-102552867275593/"><img src={require("../assets/facebook.png")} alt="f"/> Rescatando.org.mx</Link></p>
              <p><Link to="https://www.instagram.com/rescatandofundacion/"><img src={require("../assets/instagram.png")} alt="i"/> Rescatandofundacion</Link></p>
          </div>
          <div class="column">
              <d1>
                  <dt>CONTENIDO</dt>
                  <dd><Link to="./">INICIO</Link></dd>
                  <dd><Link to="./acerca-de">ACERCA DE</Link></dd>
                  <dd><Link to="./quienes-somos">QUIÉNES SOMOS</Link></dd>
                  <dd><Link to="./las-imagenes">LAS IMÁGENES</Link></dd>
                  <dd><Link to="./proceso-tecnico">PROCESO TÉCNICO</Link></dd>
                  <dd><Link to="./te-necesitamos">TE NECESITAMOS</Link></dd>
                  <dd><Link to="./agradecimientos">AGRADECIMIENTOS ESPECIALES</Link></dd>
                  <dd><Link to="./dona">DONA</Link></dd>
              </d1>
          </div>
          <div class="column column2">
              <h5>¡500 IMÁGENES RESCATADAS POR SEMANA!</h5>
          </div>
          <div class="column">
              <d1>
                  <dt>CONTACTO</dt>
                  <dd><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;&nbsp;&nbsp; 55840182</dd>
                  <dd><i class="bi bi-envelope-fill"></i>&nbsp;&nbsp;&nbsp;&nbsp; beatriz@rescatando.org.mx</dd>
                  <dd><i class="bi bi-globe-americas"></i>&nbsp;&nbsp;&nbsp;&nbsp; www.rescatando.org.mx</dd>
                  <dd><i class="bi bi-geo-alt-fill"></i>&nbsp;&nbsp;&nbsp;&nbsp; Tepeji 72, Roma Sur, 06760 CDMX.</dd>
              </d1>
          </div>
      </nav>
      <nav class="footer-bottom">
          <p>Rescatando | Rescatamos México Rescatando Fotografías / 2018</p>
          <p class="redes"><Link to="https://www.facebook.com/Rescatandoorgmx-102552867275593/"><i class="bi bi-facebook"></i></Link>&nbsp;<Link to="https://www.instagram.com/rescatandofundacion"><i class="bi bi-instagram"></i></Link></p>
      </nav>
  </footer>
    )
}

export default FooterComponent;