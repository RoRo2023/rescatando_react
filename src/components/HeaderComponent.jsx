import Dropdown from 'react-bootstrap/Dropdown';

import { Link } from "react-router-dom";

const HeaderComponent = () =>{


    return(
        <header class="menu text">
            <nav class="head">
                <div class="logo">
                    <Link to="/"><img src={require("../assets/rescatando.png")} alt="logo"/></Link>
                </div>
                <div class="menuText menu1">
                    <ul>
                        <li><Link to='/acerca-de'>ACERCA DE</Link></li>
                        <li><Link to='/quienes-somos'>QUIÉNES SOMOS</Link></li>
                        <li><Link to='/las-imagenes'>LAS IMÁGENES</Link></li>
                        <li><Link to='/proceso-tecnico'>PROCESO TÉCNICO</Link></li>
                        <li class="te-necesitamos">
                            <Link to='/te-necesitamos'>TE NECESITAMOS</Link>
                            <div class="agradecimientos">
                                <ul>
                                    <Link to='/agradecimientos'><li>AGRADECIMIENTOS <br/> ESPECIALES</li></Link>
                                </ul>
                            </div>
                        </li>
                        <li><Link to='/dona'>DONA</Link></li>
                        {/* <li><Link href="./tienda.html">COMPRA FOTOS</Link></li>     */}
                    </ul>
                </div>
                <div class="menuText menu2" style={{display:"none"}}>
                    <Link><i class="bi bi-list"></i></Link>
                    <div class="menu-anidado text">
                        <li><Link to='/acerca-de'>ACERCA DE</Link></li>
                        <li><Link to='/quienes-somos'>QUIÉNES SOMOS</Link></li>
                        <li><Link to='/las-imagenes'>LAS IMÁGENES</Link></li>
                        <li><Link to='/proceso-tecnico'>PROCESO TÉCNICO</Link></li>
                        <li><Link to='/te-necesitamos'>TE NECESITAMOS</Link></li>
                        <li><Link to='/agradecimientos'>AGRADECIMIENTOS ESPECIALES</Link></li>
                        <li><Link to='/dona'>DONA</Link></li>
                        {/* <li><Link href="./tienda.html">COMPRA FOTOS</Link></li>     */}
                    </div>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" style={{color: "white", backgroundColor: "#083d5e", border: "none", fontSize: "24px", height:"36px", paddingTop:"0"}}>
                            <Link><i className="bi bi-list"></i></Link>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <li><Link to='/acerca-de'>ACERCA DE</Link></li>
                        <li><Link to='/quienes-somos'>QUIÉNES SOMOS</Link></li>
                        <li><Link to='/las-imagenes'>LAS IMÁGENES</Link></li>
                        <li><Link to='/proceso-tecnico'>PROCESO TÉCNICO</Link></li>
                        <li><Link to='/te-necesitamos'>TE NECESITAMOS</Link></li>
                        <li><Link to='/agradecimientos'>AGRADECIMIENTOS ESPECIALES</Link></li>
                        <li><Link to='/dona'>DONA</Link></li>
                        {/* <li><Link href="./tienda.html">COMPRA FOTOS</Link></li>     */}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </nav>
        </header>
    )
}

export default HeaderComponent;