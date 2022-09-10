import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
// import Error from './Error';

function App() {
  return (
    <React.Fragment>
      {/* <Routes>
        <Route path='/*'  element={ <Error />}/>
      </Routes> */}
      	<div id="wrapper">
          <SideBar />
          <ContentWrapper />
        </div>
    </React.Fragment>
  );
}

export default App;
