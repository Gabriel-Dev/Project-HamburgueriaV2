import { Div } from "./style";
import { FiShoppingBag } from "react-icons/fi"

const logo = require("../../assets/img/logo.png");

export function Logo() {
    return (
        <Div>
            <img src={logo} alt="Burguer Kenzie" />
            <div>
                <FiShoppingBag />
                <p>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>
            </div>
            <div className="balls">

            </div>
        </Div>
    )
}