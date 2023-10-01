
import Link from "next/link";
import CollapseButton from '../components/CollapseButton';
import MenuButton from "./MenuButton";

const { Container, Offcanvas } = require("react-bootstrap")

const Header = () => {
    return(
        <main>
            <div className="container">

            <div className="section"> <MenuButton/> </div>

            <div className="section"> 
                    <link rel="stylesheet" href="\" />  Seus investimentos  
                    <link rel="stylesheet" href="\" />  - Suas receitas e despesas 
                    <link rel="stylesheet" href="\" />  - Seus orçamentos                   
            </div>   
                       
           
                <div className="saldo"><CollapseButton/> </div>
            </div>

            <style jsx>{`
        .container{
          display: flex;
          justify-content:space-between
        }
        .section {
            padding: 10px;
        }
        .saldo {
          padding: 10px;
        }
      `}</style>
      
         </main>
    );
}
export default Header

