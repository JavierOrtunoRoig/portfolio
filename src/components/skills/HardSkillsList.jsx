import { cpp, css, express, git, html, java, javascript, react } from '../../helpers/fotos';
import Skill from './Skill';

export const HardSkillsList = () => {

    return (
        <div className="hardSkillList">
            <Skill logo={ html } nombre="HTML5" nivel="Nivel intermedio" />
            <Skill logo={ css } nombre="CSS" nivel="Nivel principiante" />
            <Skill logo={ javascript } nombre="JavaScript" nivel="Nivel intermedio" />
            <Skill logo={ react } nombre="React" nivel="Nivel intermedio" />
            <Skill logo={ express } nombre="Express" nivel="Nivel intermedio" />
            <Skill logo={ git } nombre="Git" nivel="Nivel intermedio" />
            <Skill logo={ cpp } nombre="cpp" nivel="Nivel principiante" />
            <Skill logo={ java } nombre="Java" nivel="Nivel principiante" />
        </div>
    );

};
