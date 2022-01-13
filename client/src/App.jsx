import {
  Navbar,
  Loader,
  Footer,
  Services,
  Transactions,
  Welcome,
} from "./components";
function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
