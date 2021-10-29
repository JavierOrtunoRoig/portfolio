import { adaptability, communication, opennessToCriticism, teamwork, timeManagement } from '../../helpers/fotos';
import Skill from './Skill';

export const SoftSkillsList = () => {

    return (
        <div>
            <div className="softSkillList">
                <Skill logo={ communication } nombre="Communication" />
                <Skill logo={ timeManagement } nombre="Time management" />
                <Skill logo={ adaptability } nombre="Adaptability" />
                <Skill logo={ teamwork } nombre="Teamwork" />
                <Skill logo={ opennessToCriticism } nombre="Openness to criticism" />
            </div>
        </div>
    );

};
