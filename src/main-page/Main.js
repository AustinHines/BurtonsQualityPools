import './Main.css'
import Pool1 from '../img/pool1.png'
import Pool2 from '../img/pool2.png'
import Pool3 from '../img/pool3.png'
import Pool4 from '../img/pool4.png'
import Pool5 from '../img/pool5.png'
import Pool6 from '../img/pool6.png'
import Pool7 from '../img/pool7.png'
import Pool8 from '../img/pool8.png'
import Logo from '../img/burtonLogo.png'
import Product1 from '../img/sand.png'
import Product2 from '../img/shock.png'
import poolSale from '../img/salePool.png'
import poolSale2 from '../img/salePool2.png'





const Landing = () => {
    return (
        <div>
            <div className="nav" >

                <img src={Logo} alt="Logo" />



                <div className="nav-button">
                    <a href="#home">Home</a>
                    <a href="#work">Work</a>
                    <a href="index.html">Services</a>
                    <a href="index.html">Contact</a>
                </div>

            </div>

            <div className="home">
                <h1>Burton's</h1>
                <h3>Quality Pools</h3>
                <h6>Sales, Services, Product Selection</h6>
                <i class="fas fa-map-pin"></i> <p>704 N. Main Street Franklin Ky.</p>
                <i class="fas fa-phone"></i> <p>270-223-8944</p>
                <i class="fas fa-store"></i> <p>(Tuesday - friday 9-5) (Saturday 9-12)</p>
            </div>

            <div className="work-top">
                <h1> Previous Work</h1>
            </div>

            <div className="work">
                <img src={Pool1} alt="Pool" />
                <img src={Pool2} alt="Pool" />
                <img src={Pool3} alt="Pool" />
                <img src={Pool4} alt="Pool" />
                <img src={Pool5} alt="Pool" />
                <img src={Pool6} alt="Pool" />
                <img src={Pool7} alt="Pool" />
                <img src={Pool8} alt="Pool" />

            </div>
            <div className="services-top">
                <h1> My Services</h1>
            </div>
            <div className="services-mid-top">
                <h1>What do I offer?:</h1>
            </div>

            <div className="service-container">
                <ul>
                    <li>Seasonal Opening And Closing Of Pools</li>
                    <li>Installation And Repair Of Pools</li>
                    <li>Products For sale But Not Limited To </li>
                </ul>
            </div>
            <div className="service-container-two">
                <div className="services-item">
                    <img src={Product1} alt="Pool Sand" />
                    <h1>Pool Sand</h1>
                </div>

                <div className="services-item">
                    <img src={Product2} alt="Pool Shock" />
                    <h1>Pool Shock</h1>
                </div>

                <div className="services-item">
                    <img src={poolSale} alt="Reevele Pool" />
                    <h1>Reveele Pool</h1>
                </div>

                <div className="services-item">
                    <img src={poolSale2} alt="Nova STR POOL" />
                    <h1>Nova STR Pool</h1>
                </div>
            </div>
            
            






        </div>
    )
}

const home = {

}

export default Landing