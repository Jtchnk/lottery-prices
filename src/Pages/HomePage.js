import Header from '../Components/Header';
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="showLotto">
        <img src="Lotto.png" alt="ผลรางวัล 16สิงหา64" className="img-checkLotto" style={{width:"100%", height:"100%"}}/>
    </div>
    </div>
  );
};

export default Home;
