import React from 'react';
import { Link } from 'react-router-dom';

export default function CreateNew() {
    return (
        <div>
            <p>Acá se crea el nuevo perrito</p>
            <Link to='/home'><p>Volver</p></Link>
        </div>
    )
}