import './portfolio.css';
import { epub_app } from '../../helpers/fotos';
import Proyecto from './Proyecto';

export const Portfolio = () => {

    return (
        <div id="portfolio" className="portfolio">
            <span>Portfolio</span>
            <div className="proyectos">
                <Proyecto foto={ epub_app } />
            </div>
        </div>
    );

};
