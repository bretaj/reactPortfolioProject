import '../pages/Project'

function Card (props) {
    return (
        <div className ='card'>
            <img alt ="picture of project" className='card-image' src={props.image}>

            </img>
            <h2 className='card-title'>
                {props.name}
            </h2>
            <p className='card-text'>
                {props.description}
            </p>
        </div>
    )
}

export default Card