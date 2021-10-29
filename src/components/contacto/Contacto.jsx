
import './contacto.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';
import sweetAlert from 'sweetalert2';

export const Contacto = () => {

    const handleSubmit = ( e ) => {

        e.preventDefault();

        emailjs.sendForm( 'service_portfolio', 'template_b735ig5', e.target, 'user_dcKRqtgyEaMyVf3IQuapM' )
            .then( ( result ) => {

                console.log( result );
                alert( '¡Enhorabuena, el correo se ha neviado correctamente!' );

            }, ( error ) => {

                console.log( error );
                alert( 'Parece que algo ha salido mal.' );

            });

    };

    return (
        <div id="contacto" className="contacto">
            <Form onSubmit={ handleSubmit }>
                <span>Contáctame</span>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        name="name"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email de contacto</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Introduce tu email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Motivo de contacto</Form.Label>
                    <Form.Control
                        name="message"
                        as="textarea"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );

};
