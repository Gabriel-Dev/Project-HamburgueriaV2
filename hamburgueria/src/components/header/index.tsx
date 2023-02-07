import { Input } from "../input";
import { Button } from "../button";
import { StyledHeader } from "./style";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { cartContext } from "../../contexts/cartContext";
import { FaSearch, FaShoppingCart } from "react-icons/fa"
import { ImExit } from "react-icons/im"

const logo = require("../../assets/img/logo.png");

export interface ISearchValues {
  search: string
}

export function Header() {

  const { search, addCart, logout, setCart, cart, setInputSearch, inputSearch } = useContext(cartContext)
  const { register, handleSubmit } = useForm<ISearchValues>({})

  return (
    <StyledHeader>
      <div className="container" >
        <img src={logo} alt="Burguer Kenzie" />

        <div>
          {inputSearch &&
            <form onSubmit={handleSubmit(search)}>
              <Input name="search" type="text" placeholder="Digite sua pesquisa"
                register={register("search")} />

              <Button type="submit"> <FaSearch /> </Button>
            </form>
          }
          <FaSearch onClick={() => { setInputSearch(!inputSearch) }} />

          <div className="cart">
            <FaShoppingCart onClick={() => { setCart(!cart) }} />
            <div>{addCart.length}</div>
          </div>

          <ImExit onClick={logout} />
        </div>

      </div>
    </StyledHeader>
  );
}
