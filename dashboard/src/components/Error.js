import error from '../assets/images/error-404.png';

function Error(){
    return(
        <div className="col-lg-6 mb-4">
            <img src={error} alt=""/>
        </div>
    )
}

export default Error;