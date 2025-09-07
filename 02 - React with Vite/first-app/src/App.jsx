import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Footer />
      <div className="cards">
        <Card title="First card" description="This is a first card" />
        <Card title="Second card" description="This is a second card" />
        <Card title="Third card" description="This is a third card" />
        <Card title="Fourth card" description="This is a fourth card" />
        
      </div>
    </>
  );
}

export default App;
