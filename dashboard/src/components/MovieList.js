import React from "react";

function MovieList(props) {
    return(
            <tr>
                <th>{props.id}</th>
                <th>{props.titulo}</th>
                <th>{props.calificacion}</th>
                <th>{props.premios}</th>
                <th>{props.duracion}</th>
            </tr>
    )
}

export default MovieList;