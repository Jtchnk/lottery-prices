import React, { useState } from "react";
import Header from "../Components/Header";

// const NumberCheck = (numberCheck) => {
//   return (<div className="numberCheck">{numberCheck.text}</div>)
// };

const NumberForm = (addNumber) => {
  const [value, setValue] = useState("");
  //const [isFormSubmit, setIsFormSubmit] = useState(false)
  const Lottery = [123456, 654321];
  console.log(Lottery);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value || /^\s*$/.test(value)) {
    return;
    }
    // setIsFormSubmit(true)
    if (value === Lottery) {
      return <span>คุณถูกรางวัล</span>
    }
    if (value != Lottery) {
      return <span>คุณไม่ถูกรางวัล</span>
    }
    console.log(value);
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Number ..."
        className="input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" className="Submit" >
        Submit
      </button>
     
      <div>
      {value}
      </div>
    </form>
  );
};


const CheckPage = () => {
  const pathname = window.location.pathname;
  const [numbers, setNumbers] = useState([]);

  const addNumber = (text) => {
    const newNumbers = { text };
    setNumbers(newNumbers);
  };

  return (
    <div>
      <Header />
      <h1>ตรวจลอตเตอรี่</h1>
      <h2 style={{textAlign:"center"}}>กรอกหมายเลขลอตเตอรี่</h2>
      <div>
        <NumberForm addNumber={addNumber} />
      </div>
    </div>
  );
};

export default CheckPage;
