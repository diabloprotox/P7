import { Link } from "react-router-dom"
import LogementsDatas from '../../data/logements.json'
import '../../styles/Gallery.css'



function Gallery() {
    return (
        <div className="gallery">
            {
                LogementsDatas.map((location) =>
                    <Link className="card" to={"logement/" + location.id} key={location.id}>
                        <p>{location.title}</p>
                        <img src={location.cover} alt={location.title} />
                    </Link>
                )
            }
        </div>
    )
}

export default Gallery