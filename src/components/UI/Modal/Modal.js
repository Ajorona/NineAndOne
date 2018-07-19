import React from 'react';
import classes from './Modal.css';

import Aux from '../../../hoc/Aux/Aux';

const Modal = (props) => {
    let modalClasses = `${classes.Modal}`;
    if (props.show) {
        modalClasses = `${classes.Modal} ${classes.Open}`;
    }

    return (
            <Aux>
                <div className={modalClasses}>
                    <button type="button" onClick={props.close}>&times;</button>
                    {props.children}
                </div>
            </Aux>
        );
    };

export default Modal
