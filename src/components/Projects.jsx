import '../pages/Project'
import '../assets/Projects.css'

function Card(props) {
    return (
        <div className='card-grid'>
            <div className='img-wrapper'>
                <img alt="picture of project" src={props.image} />
                <div className='card-text fade'>
                    {props.description}
                </div>
            </div>
        </div >
    )
}

export default Card