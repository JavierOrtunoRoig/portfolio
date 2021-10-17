
import PropTypes from 'prop-types';
import './redes.css';

export const Redes = ({ linkedin, github }) => {

    return (
        <div className="redes-div">
            <div className="redes">
                <a target="_blank" className="enlace" href="https://www.linkedin.com/in/javier-ortu%C3%B1o-roig-baa552163/" rel="noreferrer">
                    <img src={ linkedin }/>
                </a>
                <a target="_blank" className="enlace" href="https://github.com/JavierOrtunoRoig" rel="noreferrer">
                    <img src={ github }/>
                </a>
            </div>
        </div>
    );

};

Redes.propTypes = {
    linkedin: PropTypes.string,
    github: PropTypes.string
};
