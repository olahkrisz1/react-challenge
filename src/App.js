import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchUser from "./components/SearchUser";
import Repositories from "./components/Repositories";

const App = () => {
  const [userData, setUserData] = useState(null);

  const handleUserSubmit = (data) => {
    setUserData(data);
  };

  return (
    <div>
      <Header />
      <div>
        <SearchUser onSubmit={handleUserSubmit} />
        <Repositories data={userData} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
