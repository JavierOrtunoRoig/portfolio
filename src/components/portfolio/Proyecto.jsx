import PropTypes from 'prop-types';
import github from '../../assets/github.png';

const Proyecto = ({ foto }) => {

    return (
        <div>
            <div className="host">
                <div className="prueba">
                    <div className="github-container">
                        <a href="#" className="github-button"><img src={ github } ></img></a>
                    </div>
                </div>
            </div>
        </div>
    );

};

Proyecto.propTypes = {
    foto: PropTypes.string
};

export default Proyecto;
