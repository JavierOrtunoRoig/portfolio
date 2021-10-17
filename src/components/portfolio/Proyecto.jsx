import PropTypes from 'prop-types';

const Proyecto = ({ foto }) => {

    return (
        <div>
            <img src={ foto } />
        </div>
    );

};

Proyecto.propTypes = {
    foto: PropTypes.string
};

export default Proyecto;
