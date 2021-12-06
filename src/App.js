import BreadcrumbMeli from "./components/BreadcrumbMeli";
import DetailProductMeli from "./components/DetailProductMeli";
import HeaderMeli from "./components/HeaderMeli";

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
             "amount":"1980",
             "decimals":"0"
          },
          "picture":"assets/Cel1.jpg",
          "condition":"String",
          "free_shipping":"true"
       },
       {
        "id":"e0cb8381-dc8e-48f5-8d11-11108a6b83a6",
        "title":"Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!",
        "price":{
           "currency":"$",
           "amount":"1980",
           "decimals":"0"
        },
        "picture":"assets/Cel3.jpg",
        "condition":"String",
        "free_shipping":"false"
     }
    ]
 }

  return (
      <body>
      <main className="ml-container">
          <HeaderMeli />
          <div className="ml-body">
              <BreadcrumbMeli sCategories = { searchResults?.categories } />
              <section className="ml-detail">                  
              {
                searchResults.items?.map(product => 
                  <DetailProductMeli 
                    sImgPath = {product.picture}
                    sSimbolMoney = {product?.price?.currency}
                    nPrice = {product?.price?.amount}
                    sProductDescript = {product.title}
                    sProductLocation = "Capital Federal"
                    bShipping = {product.free_shipping}
                  />
                )
              }
              </section>
          </div>
      </main>
  </body>
  );
}

export default App;
