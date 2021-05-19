import React from 'react';
import Imagen from "./Imagen"
import propTypes from 'prop-types';

const ListadoImagenes = ({imagenes}) => {
    return (  
        <div className="col-12 p5 row">
            {imagenes.map(imagen => (
                <Imagen 
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
    );
}

ListadoImagenes.protoTypes = {
    imagenes : propTypes.array.isRequired
}
 
export default ListadoImagenes;