import './portfolio.css';
import { epubApp } from '../../helpers/fotos';
import Proyecto from './Proyecto';

export const Portfolio = () => {

    return (
        <div id="portfolio" className="portfolio">
            <span>Portfolio</span>
            <div className="proyectos">
                <Proyecto foto={ epubApp } />
                <Proyecto foto={ epubApp } />
                <Proyecto foto={ epubApp } />
                <Proyecto foto={ epubApp } />
                <Proyecto foto={ epubApp } />
                <Proyecto foto={ epubApp } />
                <Proyecto foto={ epubApp } />
                <Proyecto foto={ epubApp } />
                <Proyecto foto={ epubApp } />
                <Proyecto foto={ epubApp } />
                <Proyecto foto={ epubApp } />
                <Proyecto foto={ epubApp } />
                <Proyecto foto={ epubApp } />
                <Proyecto foto={ epubApp } />
            </div>
        </div>
    );

};
