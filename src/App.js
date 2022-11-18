import Head from "./componets/header/Head";
import Main from "./componets/main/Main";
import Footer from "./componets/footer/Footer";

import "./App.css";

function App() {
  return (
    <header className="header">
      <div className="wrapper">
        <Head />
        <Main />
        <Footer />
      </div>
    </header>
  );
}

export default App;
