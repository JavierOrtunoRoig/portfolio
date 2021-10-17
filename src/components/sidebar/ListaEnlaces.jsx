import { handleContacto, handleInicio, handlePortfolio, handleSkills } from '../../helpers/sidebar/ListaEnlaces';

export const ListaEnlaces = () => {


    return (
        <div>
            <ol>
                <a onClick={ handleInicio } href="#inicio"><li>Inicio</li></a>
                <a onClick={ handleSkills } href="#skills"><li>Skill</li></a>
                <a onClick={ handlePortfolio } href="portolio"><li>Portfolio</li></a>
                <a onClick={ handleContacto } href="contacto"><li>Contacto</li></a>
            </ol>
        </div>
    );

};
