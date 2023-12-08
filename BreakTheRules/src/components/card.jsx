import "../styles/acceuil.css";
import arrow from '../assets/arrow-left.png'



const Card = () => {
    return(
        <div className="card-container">
                <div className="card card1">
                    <div className="card-content">
                        <div className="arrow-card">
                            <div className="arrow">
                                <img src={arrow} alt=""/>
                            </div>
                        </div>
                        <div className="texte-card">
                            <h2 className="title-card">Environement</h2>
                        </div>
                    </div>
                </div>
                <div className="card card2">
                    <div className="card-content">
                        <div className="arrow-card">
                            <div className="arrow">
                                <img src={arrow} alt=""/>
                            </div>
                        </div>
                        <div className="texte-card">
                            <h2 className="title-card">Environement</h2>
                        </div>
                    </div>
                </div>
                <div className="card card3">
                    <div className="card-content">
                        <div className="arrow-card">
                            <div className="arrow">
                                <img src={arrow} alt=""/>
                            </div>
                        </div>
                        <div className="texte-card">
                            <h2 className="title-card">Pollution</h2>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Card