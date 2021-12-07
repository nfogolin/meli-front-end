import { 
  BrowserRouter as Router
    , Routes
    , Route
   } from "react-router-dom";
import HeaderMeli from "./components/HeaderMeli";
import GridSearchedProducts from "./components/GridSearchedProducts";
import BreadcrumbMeli from "./components/BreadcrumbMeli";
import { useSelector } from "react-redux";

function App() {

  const { searchResults } = useSelector(state => state.searchResults);

  return (
    <main className="ml-container">
      <Router>
        <HeaderMeli />
        <div className="ml-body">
          <BreadcrumbMeli sCategories = { searchResults?.categories } />
          <section className="ml-detail">  
            
              <Routes>                
                <Route path="/items" element = { <GridSearchedProducts searchResults = { searchResults?.items } /> } />
                <Route path="/" element= {null} />
              </Routes>
            
          </section>
      </div>
      </Router>
    </main>
  );
}

export default App;
