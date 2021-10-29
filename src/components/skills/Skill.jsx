import PropTypes from 'prop-types';

const Skill = ({ logo, nombre, nivel }) => {

    const texto = nivel === undefined ? <p>{nombre}</p> : <p>{nombre} - {nivel}</p>;

    return (
        <div className="skill">
            <img src={ logo }/>
            {texto}

        </div>
    );

};

Skill.propTypes = {
    logo: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    nivel: PropTypes.string
};

export default Skill;
