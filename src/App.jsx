import "./App.css";
import Header from "./components/header";
import Left from "./components/leftCon";
import Right from "./components/rightCon";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />

      <div className="blocks">
        <Left />
        <Right />
      </div>

      <Footer />
    </div>
  );
}

export default App;
