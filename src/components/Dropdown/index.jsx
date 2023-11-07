import { useState } from "react"
import '../../styles/Dropdown.css'
import VectorDown from '../../assets/vectordown.png'
import VectorUp from '../../assets/vectorup.png'
import PropTypes from 'prop-types'

function Dropdown({ title, description }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="dropdown">
            {isOpen ? (
                <div className="dropdown-open">
                    <div className="dropdown-title" onClick={() => setIsOpen(false)} >
                        <h4>{title}</h4><img src={VectorUp} alt="vectorup" />
                    </div>
                    <p>{description}</p>
                </div>
            ) : (
                <div className="dropdown-closed">
                    <div className="dropdown-title" onClick={() => setIsOpen(true)}>
                        <h4 >{title}</h4><img src={VectorDown} alt="vectordown" />
                    </div>
                </div>
            )}
        </div>
    )

}

Dropdown.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default Dropdown