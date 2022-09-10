import React, { Component } from 'react';
import Genre  from './Genre';
/* 
let genres = [
    {genre: 'Acción'},
    {genre: 'Animación'},
    {genre: 'Aventura'},
    {genre: 'Ciencia Ficción'},
    {genre: 'Comedia'},
    {genre: 'Documental'},
    {genre: 'Drama'},
    {genre: 'Fantasia'},
    {genre: 'Infantiles'},
    {genre: 'Musical'}
] */

class GenresInDb extends Component{

    constructor(props){
        super(props);
        this.state = {
            genresList : []
        }
    }

    async componentDidMount(){
        try {
            const res = await fetch('http://localhost:3001/api/genres')
            const generos = await res.json()
            const todosGeneros = generos.data.map(genero => {
                return {genero : genero.name}
            })
          
            this.setState({
                genresList: todosGeneros
            })
            
        } catch (error) {
            console.log(error)            
        }
    }

    render(){

        return (
            <React.Fragment>
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                            </div>
                            <div className="card-body fondoCaja">
                                <div className="row">
                                {this.state.genresList.map((genero,index)=>{
                                    return <Genre {...genero} key={index} />
                                })}
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}
export default GenresInDb;