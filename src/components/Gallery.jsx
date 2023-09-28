import React, { useState } from "react";
import './gallery.css'
import { X } from "react-bootstrap-icons";

import Img1 from "../assets/FotosBD/Lagunas-de-Zempoala-831.jpg"
import Img2 from "../assets/FotosBD/Cascada-Cola-de-Caballo-1390.jpg"
import Img3 from "../assets/FotosBD/Tulum-836.jpg"
import Img4 from "../assets/FotosBD/Hierve-el-Agua-1385.jpg"
import Img5 from "../assets/FotosBD/Mono-841.jpg"
import Img6 from "../assets/FotosBD/Tapijulapa-1380.jpg"
import Img7 from "../assets/FotosBD/Fachada-Iglesia-856.jpg"
import Img8 from "../assets/FotosBD/Río-Mezquites-1395.jpg"
import Img9 from "../assets/FotosBD/Gastronomiacutea-Tamaulipas-846.jpg"
import Img10 from "../assets/FotosBD/Plaza-de-Las-Tres-Culturas-1370.jpg"
import Img11 from "../assets/FotosBD/Sinaloa-961.jpg"
import Img12 from "../assets/FotosBD/Dzibilchaltún-1355.jpg"
import Img13 from "../assets/FotosBD/Acueducto-966.jpg"
import Img14 from "../assets/FotosBD/Poza-Azul-1350.jpg"
import Img15 from "../assets/FotosBD/Tetela-del-Monte-972.jpg"
import Img16 from "../assets/FotosBD/Mariposa-Monarca-1360.jpg"
import Img17 from "../assets/FotosBD/Danzantes-977.jpg"
import Img18 from "../assets/FotosBD/Minas-de-Mármol-1365.jpg"
import Img19 from "../assets/FotosBD/Tamiahua-759.jpg"
import Img20 from "../assets/FotosBD/Teotihuacan-1340.jpg"
import Img21 from "../assets/FotosBD/Fauna-Huasteca-764.jpg"
import Img22 from "../assets/FotosBD/Chichén-Itzá-1335.jpg"
import Img23 from "../assets/FotosBD/Mujeres-de-Huayamota-851.jpg"
import Img24 from "../assets/FotosBD/Cascada-de-Quetzalapan-1290.jpg"
import Img25 from "../assets/FotosBD/Cola-de-Caballo-784.jpg"
import Img26 from "../assets/FotosBD/Viesca-1295.jpg"
import Img27 from "../assets/FotosBD/Acapulco-789.jpg"
import Img28 from "../assets/FotosBD/Presa-La-Amistad-1305.jpg"
import Img29 from "../assets/FotosBD/Cactus-804.jpg"
import Img30 from "../assets/FotosBD/Teotihuacan-1330.jpg"
import Img31 from "../assets/FotosBD/Puma-809.jpg"
import Img32 from "../assets/FotosBD/Yuriria-1315.jpg"
import Img33 from "../assets/FotosBD/Mictlantecuhtli-754.jpg"
import Img34 from "../assets/FotosBD/Atlantes-de-Tula-1320.jpg"
import Img35 from "../assets/FotosBD/Buzo-717.jpg"
import Img36 from "../assets/FotosBD/Tulum-1310.jpg"
import Img37 from "../assets/FotosBD/Mujercitas-Leyendo-727.jpg"
import Img38 from "../assets/FotosBD/Kiosko-Morisco-1300.jpg"
import Img39 from "../assets/FotosBD/Teatro-de-la-Repuacuteblica-861.jpg"
import Img40 from "../assets/FotosBD/Paseo-de-la-Reforma-Caballito-982.jpg"
import Img41 from "../assets/FotosBD/San-Luis-Potosiacute-866.jpg"
import Img42 from "../assets/FotosBD/Atardecer-Mazatlaacuten-987.jpg"
import Img43 from "../assets/FotosBD/Soacutetano-de-las-golondrinas-871.jpg"
import Img44 from "../assets/FotosBD/Vegetacioacuten-Veracruzana-769.jpg"
import Img45 from "../assets/FotosBD/Artesaniacutea-Puebla-876.jpg"
import Img46 from "../assets/FotosBD/Cascada-Cumbres-de-Monterrey-774.jpg"
import Img47 from "../assets/FotosBD/Tren-del-Paciacutefico-881.jpg"
import Img48 from "../assets/FotosBD/Flora-del-Usumacinta-779.jpg"
import Img49 from "../assets/FotosBD/Riacuteo-en-San-Luis-Potosiacute-886.jpg"
import Img50 from "../assets/FotosBD/Zoacutecalo-Mineral-del-Chico-794.jpg"
import Img51 from "../assets/FotosBD/Cascada-en-Nuevo-Leoacuten-891.jpg"
import Img52 from "../assets/FotosBD/Popocateacutepetl-682.jpg"
import Img53 from "../assets/FotosBD/Bahia-de-Acapulco-896.jpg"
import Img54 from "../assets/FotosBD/Lagunas-de-Zempoala-799.jpg"
import Img55 from "../assets/FotosBD/Cactus-al-atardecer-901.jpg"
import Img56 from "../assets/FotosBD/Nayarit-707.jpg"
import Img57 from "../assets/FotosBD/Tejedoras-906.jpg"
import Img58 from "../assets/FotosBD/Tizatlaacuten-697.jpg"
import Img59 from "../assets/FotosBD/Guajolotes-911.jpg"
import Img60 from "../assets/FotosBD/Puebla-702.jpg"
import Img61 from "../assets/FotosBD/Cozumel-916.jpg"
import Img62 from "../assets/FotosBD/Mar-de-Corteacutes-732.jpg"
import Img63 from "../assets/FotosBD/Cancuacuten-921.jpg"
import Img64 from "../assets/FotosBD/Rocas-Las-Monjas-747.jpg"     
import Img65 from "../assets/FotosBD/Quintana-Roo-926.jpg"
import Img66 from "../assets/FotosBD/Tlacotalpan-692.jpg"
import Img67 from "../assets/FotosBD/Riacuteo-Sochiate-931.jpg"
import Img68 from "../assets/FotosBD/Panes-936.jpg"
import Img69 from "../assets/FotosBD/Cozumel-Chanka-naab-677.jpg"
import Img70 from "../assets/FotosBD/Playa-Arbolitos-en-Ensenada-941.jpg"
import Img71 from "../assets/FotosBD/Baja-California-Norte-737.jpg"
import Img72 from "../assets/FotosBD/Volcaacuten-Popocatepetl-946.jpg"
import Img73 from "../assets/FotosBD/Riacuteo-Usumacinta-722.jpg"
import Img74 from "../assets/FotosBD/Rancho-8220El-Tinieblo8221-951.jpg"                                   
import Img75 from "../assets/FotosBD/Cascada-Basaseachi-514.jpg"                                           
import Img76 from "../assets/FotosBD/Molcajetes-y-Metates-486.jpg"                                         
import Img77 from "../assets/FotosBD/Aacuterbol-de-la-Vida-481.jpg"                                        
import Img78 from "../assets/FotosBD/Cabeza-Olmeca-476.jpg"                                                
import Img79 from "../assets/FotosBD/La-Flor-Maacutes-Bella-del-Ejido-471.jpg"                             
import Img80 from "../assets/FotosBD/Caacutentaros-de-Barro-466.jpg"                                       
import Img81 from "../assets/FotosBD/Zacate-y-Espuma-461.jpg"                                              
import Img82 from "../assets/FotosBD/Nintildea-Kikapuacute-456.jpg"                                        
import Img83 from "../assets/FotosBD/Nintildeo-Pintado-451.jpg"                                            
import Img84 from "../assets/FotosBD/Lobo-Mexicano-446.jpg"                                                
import Img85 from "../assets/FotosBD/Zona-del-Silencio-441.jpg"                                            
import Img86 from "../assets/FotosBD/Produccioacuten-Tomatera-436.jpg"    


const Gallery = () => {

    let data = [
        {
            id:1,
            imgSrc: Img1,
        },
        {
            id:2,
            imgSrc: Img2,
        },
        {
            id:3,
            imgSrc: Img3,
        },
        {
            id:4,
            imgSrc: Img4,
        },
        {
            id:5,
            imgSrc: Img5,
        },
        {
            id:6,
            imgSrc: Img6,
        },
        {
            id:7,
            imgSrc: Img7,
        },
        {
            id:8,
            imgSrc: Img8,
        },
        {
            id:9,
            imgSrc: Img9,
        },
        {
            id:10,
            imgSrc: Img10,
        },
        {
            id:11,
            imgSrc: Img11,
        },
        {
            id:12,
            imgSrc: Img12,
        },
        {
            id:13,
            imgSrc: Img13,
        },
        {
            id:14,
            imgSrc: Img14,
        },
        {
            id:15,
            imgSrc: Img15,
        },
        {
            id:16,
            imgSrc: Img16,
        },
        {
            id:17,
            imgSrc: Img17,
        },
        {
            id:18,
            imgSrc: Img18,
        },
        {
            id:19,
            imgSrc: Img19,
        },
        {
            id:20,
            imgSrc: Img20,
        },
        {
            id:21,
            imgSrc: Img21,
        },
        {
            id:22,
            imgSrc: Img22,
        },
        {
            id:23,
            imgSrc: Img23,
        },
        {
            id:24,
            imgSrc: Img24,
        },
        {
            id:25,
            imgSrc: Img25,
        },
        {
            id:26,
            imgSrc: Img26,
        },
        {
            id:27,
            imgSrc: Img27,
        },
        {
            id:28,
            imgSrc: Img28,
        },
        {
            id:29,
            imgSrc: Img29,
        },
        {
            id:30,
            imgSrc: Img30,
        },
        {
            id:31,
            imgSrc: Img31,
        },
        {
            id:32,
            imgSrc: Img32,
        },
        {
            id:33,
            imgSrc: Img33,
        },
        {
            id:34,
            imgSrc: Img34,
        },
        {
            id:35,
            imgSrc: Img35,
        },
        {
            id:36,
            imgSrc: Img36,
        },
        {
            id:37,
            imgSrc: Img37,
        },
        {
            id:38,
            imgSrc: Img38,
        },
        {
            id:39,
            imgSrc: Img39,
        },
        {
            id:40,
            imgSrc: Img40,
        },
        {
            id:41,
            imgSrc: Img41,
        },
        {
            id:42,
            imgSrc: Img42,
        },
        {
            id:43,
            imgSrc: Img43,
        },
        {
            id:44,
            imgSrc: Img44,
        },
        {
            id:45,
            imgSrc: Img45,
        },
        {
            id:46,
            imgSrc: Img46,
        },
        {
            id:47,
            imgSrc: Img47,
        },
        {
            id:48,
            imgSrc: Img48,
        },
        {
            id:49,
            imgSrc: Img49,
        },
        {
            id:50,
            imgSrc: Img50,
        },
        {
            id:51,
            imgSrc: Img51,
        },
        {
            id:52,
            imgSrc: Img52,
        },
        {
            id:53,
            imgSrc: Img53,
        },
        {
            id:54,
            imgSrc: Img54,
        },
        {
            id:55,
            imgSrc: Img55,
        },
        {
            id:56,
            imgSrc: Img56,
        },
        {
            id:57,
            imgSrc: Img57,
        },
        {
            id:58,
            imgSrc: Img58,
        },
        {
            id:59,
            imgSrc: Img59,
        },
        {
            id:60,
            imgSrc: Img60,
        },
        {
            id:61,
            imgSrc: Img61,
        },
        {
            id:62,
            imgSrc: Img62,
        },
        {
            id:63,
            imgSrc: Img63,
        },
        {
            id:64,
            imgSrc: Img64,
        },
        {
            id:65,
            imgSrc: Img65,
        },
        {
            id:66,
            imgSrc: Img66,
        },
        {
            id:67,
            imgSrc: Img67,
        },
        {
            id:68,
            imgSrc: Img68,
        },
        {
            id:69,
            imgSrc: Img69,
        },
        {
            id:70,
            imgSrc: Img70,
        },
        {
            id:71,
            imgSrc: Img71,
        },
        {
            id:72,
            imgSrc: Img72,
        },
        {
            id:73,
            imgSrc: Img73,
        },
        {
            id:74,
            imgSrc: Img74,
        },
        {
            id:75,
            imgSrc: Img75,
        },
        {
            id:76,
            imgSrc: Img76,
        },
        {
            id:77,
            imgSrc: Img77,
        },
        {
            id:78,
            imgSrc: Img78,
        },
        {
            id:79,
            imgSrc: Img79,
        },
        {
            id:80,
            imgSrc: Img80,
        },
        {
            id:81,
            imgSrc: Img81,
        },
        {
            id:82,
            imgSrc: Img82,
        },
        {
            id:83,
            imgSrc: Img83,
        },
        {
            id:84,
            imgSrc: Img84,
        },
        {
            id:85,
            imgSrc: Img85,
        },
        {
            id:86,
            imgSrc: Img86,
        }
    ]

    const [model, setModel] = useState(false);
    const[tempimpSrc, setTempImpSrc] = useState('');

    const getImg = (imgSrc) =>{
        setTempImpSrc(imgSrc);
        setModel(true);
        console.warn(tempimpSrc)
    }

    return(
        <>
            <div className={model? "model open" : "model"}>
                <img src={tempimpSrc} alt="No" />
                <X onClick={() => setModel(false)}/>
            </div>
            <div className="gallery">
                {data.map((item, index)=>{
                    return(
                        <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={index} style={{width: '100%'}}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Gallery;