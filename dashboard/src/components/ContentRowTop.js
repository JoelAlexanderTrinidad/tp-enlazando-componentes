import React from 'react';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from './LastMovieInDb';

import { Routes, Route } from 'react-router-dom';


function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

					<Routes>
						<Route path='/table' element={ <ContentRowMovies /> }/>
					</Routes>
						<div className="row">
							<Routes>
								<Route path='/lastMovie' element={ <LastMovieInDb /> } />
								<Route path='/genres' element={ <GenresInDb /> } />
							</Routes>
						</div>
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;