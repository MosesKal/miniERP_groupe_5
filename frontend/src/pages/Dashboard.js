import Header from "../Composants/Navbar"
import Bar from "../Composants/BarRech"
import Recta1 from "../Composants/recta1"
import Recta2 from "../Composants/recta2"
import Recta3 from "../Composants/recta3"

function Dashbord(){
    return(
        <div className="tout1">
            
            <div className="bordu">
                <Header/>
                <Bar/>
            </div>
            <div className="contToutrecta">
                <Recta1/>
                <Recta2/>
                <Recta3/>
                <h3 className="titreFar">Démande des Cotations recentes </h3>
                <div className="ligneFar"></div>

            </div>

            
        </div>
    )
}export default Dashbord