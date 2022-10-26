import Footer from "./component/Footer";
import Movies from "./component/Movies";
import Nav from "./component/Nav";
import Search from "./component/Search";


function App() {
  return (
    <div className="background">
      <div className="container">

        <Nav />
        <Search />
      </div>


      <Footer />
    </div>
  );
}

export default App;
