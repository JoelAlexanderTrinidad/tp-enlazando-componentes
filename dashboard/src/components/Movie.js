import React, { Component } from 'react';

import MovieList from './MovieList';

let pelis = [
	{
		id: 1,
		titulo: 'Hola',
		calificacion: '1.2',
		premios: 32,
		duracion: 3
	},
	{
		id: 2,
		titulo: 'Chau',
		calificacion: '2',
		premios: 2,
		duracion: 98
	},
	{
		id: 3,
		titulo: 'Como estas',
		calificacion: '66',
		premios: 666,
		duracion: 4
	},
]

class Movie extends Component{
	constructor(props){
		super(props);
		this.state = {
			peliculas : []
		}
	}

	async componentDidMount(){
        try {
            const res = await fetch('http://localhost:3001/api/movies')
            const data = await res.json()
            const peliculas = data.data.map(pelicula => {
                return {
					id : pelicula.id,
					titulo : pelicula.title,
					calificacion : pelicula.rating,
					premios : pelicula.awards,
					duracion : pelicula.length
				}
            })

			
            this.setState({
				peliculas : peliculas
            })

			
            
        } catch (error) {
            console.log(error)
		}
	}    
       

	render(){
		console.log(this.state.peliculas)
		return(
			<React.Fragment>
						{/*<!-- PRODUCTS LIST -->*/}
						<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
						
						{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
										<thead>
											<tr>
												<th>Id</th>
												<th>Titulo</th>
												<th>Calificación</th>
												<th>Premios</th>
												<th>Duración</th>
											</tr>
										</thead>
										<tfoot>
											<tr>
												<th>Id</th>
												<th>Titulo</th>
												<th>Calificación</th>
												<th>Premios</th>
												<th>Duración</th>
											</tr>
										</tfoot>
										<tbody>
											{this.state.peliculas.map((pelicula, i) => {
												return <MovieList {...pelicula} key={i} />
											})}
										</tbody>
									</table>
								</div>
							</div>
						</div>            
			</React.Fragment>
		)
	}

}
export default Movie;