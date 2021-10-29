
import './contacto.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Contacto = () => {

    return (
        <div id="contacto" className="contacto">
            <Form>
                <span>Contáctame</span>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email de contacto</Form.Label>
                    <Form.Control type="email" placeholder="Introduce un email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Motivo de contacto</Form.Label>
                    <Form.Control
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
