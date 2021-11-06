import Header from "./components/Header";
import Footer from "./components/Footer";
import PokemonList from "./pages/PokemonList";
import { GlobalStyles } from "./styles/GlobalStyles/GlobalStyles";
import { MainContainer } from "./components/layout/layout.styles";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PokemonData from "./pages/PokemonData";

function App() {
  
  return (
    <>
      <GlobalStyles />
      <Header />
      <MainContainer>
        <Router>
          <Switch>
            <Route path="/" exact component={PokemonList} />
            <Route path="/data" exact component={PokemonData} />
          </Switch>
        </Router>
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
