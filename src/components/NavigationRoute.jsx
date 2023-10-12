import { Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import AcercaDe from '../pages/AcercaDe';
import Agradecimientos from '../pages/Agradecimientos';
import Dona from '../pages/Dona';
import LasImagenes from '../pages/LasImagenes';
import ProcesoTecnico from '../pages/ProcesoTecnico';
import QuienesSomos from '../pages/QuienesSomos';
import TeNecesitamos from '../pages/TeNecesitamos';
import Galeria from '../pages/Galeria';

function NavigationRoute() {


    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/acerca-de' element={<AcercaDe/>} />
            <Route path='/agradecimientos' element={<Agradecimientos/>} />
            <Route path='/dona' element={<Dona/>}/>
            {/*<Route path='/las-imagenes' element={<LasImagenes/>}/>*/}
            <Route path='/proceso-tecnico' element={<ProcesoTecnico/>}/>
            <Route path='/quienes-somos' element={<QuienesSomos/>}/>
            <Route path='/te-necesitamos' element={<TeNecesitamos/>}/>
            <Route path='/galeria' element={<Galeria/>} />
        </Routes>
    )
}

export default NavigationRoute;