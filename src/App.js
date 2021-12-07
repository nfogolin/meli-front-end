import { 
  BrowserRouter as Router
    , Routes
    , Route
   } from "react-router-dom";
import HeaderMeli from "./components/HeaderMeli";
import GridSearchedProducts from "./components/GridSearchedProducts";
import BreadcrumbMeli from "./components/BreadcrumbMeli";

function App() {

    let searchResults = {
      "author":{
        "name":"String",
        "lastname":"String"
      },
      "categories":[
        "Electrónica, Audio y Video",
        "iPod",
        "Reproductores",
        "iPod touch",
        "32 GB"
      ],
      "items":[
        {
            "id":"e0cb8381-dc8e-48f5-8d11-11108a6b83a5",
            "title":"Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!",
            "price":{
              "currency":"$",
              "amount":1980,
              "decimals":0
            },
            "picture":"assets/Cel1.jpg",
            "condition":"String",
            "free_shipping":true
        },
        {
          "id":"e0cb8381-dc8e-48f5-8d11-11108a6b83a6",
          "title":"Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!",
          "price":{
            "currency":"$",
            "amount":1980,
            "decimals":0
          },
          "picture":"assets/Cel3.jpg",
          "condition":"String",
          "free_shipping":false
      }
      ]
  }

  return (
      <main className="ml-container">
          <HeaderMeli />
          <div className="ml-body">
            <BreadcrumbMeli sCategories = { searchResults?.categories } />
            <section className="ml-detail">  
              <Router>
                <Routes>                
                  <Route path="/items" element = { <GridSearchedProducts searchResults = { searchResults?.items } /> } />
                </Routes>
              </Router>
            </section>
        </div>
      </main>
  );
}

export default App;
