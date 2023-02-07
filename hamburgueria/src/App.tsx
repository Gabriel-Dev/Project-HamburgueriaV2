import { ToastContainer } from "react-toastify";
import "./App.css";
import { CartProvider } from "./contexts/cartContext";
import { UserProvider } from "./contexts/userContext";
import { RoutesMain as Routes } from "./routes";
import { Global } from "./styles/global";

function App() {
  return (
    <div className="App">
      <ToastContainer 
      autoClose={1500} 
      position="bottom-right"
      />

      <Global />
      <UserProvider>
        <CartProvider>
            <Routes/>
        </CartProvider>
      </UserProvider>
    </div>
  )
}

export default App;


