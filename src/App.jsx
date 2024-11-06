import Search from "./components/Search";
import { useState } from "react";
import Foodlist from "./components/Foodlist";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import InnerCont from "./components/InnerCont";
import Fooddetail from "./components/Fooddetail";

function App() {
  const [fooddata, setFooddata] = useState([]);
  const [foodID, setFoodID] = useState("658615");

  return (
    <div>
      <Navbar />
      <Search fooddata={fooddata} setFooddata={setFooddata} />
      <Container>
        <InnerCont>
          <Foodlist setFoodID={setFoodID} fooddata={fooddata} />
        </InnerCont>
        <InnerCont>
          <Fooddetail foodID={foodID} />
        </InnerCont>
      </Container>
    </div>
  );
}

export default App;
