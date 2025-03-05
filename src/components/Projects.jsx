import '../pages/Project'
import '../assets/Projects.css'
import gitlogo from '../assets/gitlogo.png'

function Card(props) {
    return (
        <div className='card-grid'>
            <div className='img-wrapper'>
                <img alt="picture of project" className='cardImage' src={props.image} />
                <div className='card-text fade'>
                    <span>{props.description}</span>
                    <a href={props.link} className='card-link'><img alt='git logo' className='card-avatar' src={gitlogo} /></a>
                </div>
            </div>
        </div >
    )
}

export default Card