import { cpp, css, express, git, html, java, javascript, react } from '../../helpers/fotos';
import Skill from './Skill';

export const SoftSkillsList = () => {

    return (
        <div>
            <div className="softSkillList">
                <Skill logo={ html } nombre="HTML5" nivel="Intermedio" />
                <Skill logo={ css } nombre="CSS" nivel="Principiante" />
                <Skill logo={ javascript } nombre="JavaScript" nivel="Intermedio" />
                <Skill logo={ react } nombre="React" nivel="Intermedio" />
                <Skill logo={ express } nombre="Express" nivel="Intermedio" />
                <Skill logo={ git } nombre="Git" nivel="Intermedio" />
                <Skill logo={ cpp } nombre="cpp" nivel="Principiante" />
                <Skill logo={ java } nombre="Java" nivel="Principiante" />
            </div>
        </div>
    );

};
