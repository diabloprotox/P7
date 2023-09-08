import ImgBanner from './../../assets/homebanner.png'
import '../../styles/Banner.css'


function Banner() {
    return (
        <div className="banner">
            <img className='bannerImg' src={ImgBanner} alt="" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner