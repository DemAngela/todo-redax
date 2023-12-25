import AppRouts from "./AppRouts/AppRouts";
import {BrowserRouter} from "react-router-dom";
import Header from "./Components/Header/Header";


function App() {
    return (
        <BrowserRouter>
            <Header />
            <AppRouts />
        </BrowserRouter>
    );
}

export default App;


