import './sidebar.css';

import { github, linkedin, miFoto } from '../../helpers/fotos';
import { ListaEnlaces } from './ListaEnlaces';
import { Redes } from './Redes';

export default function Sidebar() {

    return (
        <aside id="inicio">
            <div className="perfil">
                <img className="foto_perfil" src={ miFoto } />
            </div>

            <Redes github={ github } linkedin={ linkedin }/>
            <ListaEnlaces />
        </aside>
    );

}
