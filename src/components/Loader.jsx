import loader from "../img/loader.gif"


function Loader(){
    return(
        <div className="loader">
            <img src={loader} alt=""/>
            <h2>Cargando...</h2>
        </div>
        
    )
}

export default Loader