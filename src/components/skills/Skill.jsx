import PropTypes from 'prop-types';

const Skill = ({ logo, nombre, nivel }) => {

    return (
        <div className="skill">
            <img src={ logo }/>
            <p>{nombre} - {nivel}</p>

        </div>
    );

};

Skill.propTypes = {
    logo: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    nivel: PropTypes.string.isRequired
};

export default Skill;
