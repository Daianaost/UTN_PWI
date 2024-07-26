
const RowArticle = (props)=> {
    return(
        <>
        <div>
            <h2>{props.titulo}</h2>
            <span>{props.fecha}</span>
            <a href="#">{props.direccionAutor}</a>
        </div>
        </>
    )

}
export default RowArticle;