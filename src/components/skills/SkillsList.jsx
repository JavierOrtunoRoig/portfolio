import { HardSkillsList } from './HardSkillsList';
import './skills.css';
import { SoftSkillsList } from './SoftSkillsList';

export const SkillsList = () => {

    return (
        <>
            <div id="skills" className="skills">
                <div className="hardSkill">
                    <span> Hard Skills</span>
                    <HardSkillsList />
                </div>

                <div className="softSkill">
                    <span> Soft Skills</span>
                    <SoftSkillsList />
                </div>
            </div>
        </>
    );

};
