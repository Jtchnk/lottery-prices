import React, { useEffect, useState } from "react";
import callApi from "../helpers/callapi";
import { getRoundDateString } from "../helpers/helpers";
import Header from "../Components/Header";

const CheckPage = () => {
  const [value, setValue] = useState("");
  // const [submited , setSubmited] = useState("");
  const [show, setShow] = useState("");
  //const webConfig = {roundDate : ['01-01-64','17-01-64','01-02-64','16-02-64','01-03-64','16-03-64']}
  const [roundDate, setRoundDate] = useState([]);
  const [selectedRoundDate, setSelectedRoundDate] = useState();
  const [prizes, setPrizes] = useState([]);

  // const currentTime = new Date()
  // const date = currentTime.getDate()
  // const month = currentTime.getMonth() + 1 // 7 + 1
  // const year = currentTime.getFullYear() + 543
  // const firstLastArr = ['เลขหน้า','เลขท้าย']
  // const [selectFirstLast, setSelectFirstLast] = useState(firstLastArr[0])
  // const [select, setSelect] = useState({});

  // let lastRoundDate = '';
  // if (webConfig.lastRoundDate) {
  //   lastRoundDate = getRoundDateString(webConfig.lastRoundDate);
  // }

  useEffect(() => {
    const fetchRoundDate = async () => {
      try {
        const response = await callApi({ url: "/summaries/rounds" });
        const temp = response.map((data) => data.roundDate);
        var sortedStrings = temp.sort(function (a, b) {
          var aComps = a.split("-");
          var bComps = b.split("-");
          var aDate = new Date(aComps[2], aComps[1], aComps[0]);
          var bDate = new Date(bComps[2], bComps[1], bComps[0]);
          return aDate.getTime() - bDate.getTime();
        });
        setRoundDate(sortedStrings);
        sortedStrings.pop()
        setSelectedRoundDate(sortedStrings[sortedStrings.length - 1]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRoundDate();
  }, []);

  // let roundDate = '';
  // if (webConfig.roundDate) {
  //   roundDate = (webConfig.roundDate).map(data => <option value={data}>{getRoundDateString(data)}</option>)
  //   //  roundDate = getRoundDateString(webConfig.roundDate);
  // }

  // const fetchRoundDate = async () => {
  //   try {
  //     const _roundDate = await callApi({
  //       url: `/contents/round-date`,
  //     });
  //     setRoundDate(_roundDate.value);
  //     return _roundDate.value;
  //   } catch (error) {

  //   }
  // };

  const fetchPrize = async () => {
    console.log("select rd =>",selectedRoundDate)
    try {
      const _prizes = await callApi({
        url: `/prizes/rounds/${selectedRoundDate}/annoucement`,
      });
      setPrizes(_prizes);
      console.log(_prizes);
    } catch (err) {
      setPrizes([]);
      console.log("err", err);
    }
  };

  const onInputChange = (event) => {
    // const data = event.target.value
    setValue(event.target.value);
    //setSubmited2(event.target.value)
  };

  useEffect(() => {
    fetchPrize();
    console.log("fetch price");
  }, [selectedRoundDate]);

  const [prize, setPrize] = useState([]);
  const [money, setMoney] = useState([]);
  const handleSubmit = (event) => {
    setPrize([]);
    setMoney([]);
    event.preventDefault();
    (async () => {
      if (!value || /^\s*$/.test(value)) {
        // setSubmited("")
        setShow("");
      } else {
        const checkIndex1 = prizes.first.indexOf(value);
        const checkIndex2 = prizes.second.indexOf(value);
        const checkIndex3 = prizes.third.indexOf(value);
        const checkIndex4 = prizes.forth.indexOf(value);
        const checkIndex5 = prizes.fifth.indexOf(value);
        const checkIndex6 = prizes.nearBy.indexOf(value); // ["384394","384396"] .indexOf( '123456' )
        const checkIndex7 = prizes.first3Digits.indexOf(value.slice(0, 3)); // ['566', '878] .indexOf ( value ) //878223 // 566ddd
        const checkIndex8 = prizes.last2Digits.indexOf(value.slice(-2));
        const checkIndex9 = prizes.last3Digits.indexOf(value.slice(-3));
        const a1 = [];
        const a2 = [];
      
        if (checkIndex1 !== -1) {
          a1.push("คุณถูกรางวัลที่หนึ่ง!");
          a2.push("มูลค่า 6,000,000 บาท");
        }
        if (checkIndex2 !== -1) {
          a1.push("คุณถูกรางวัลที่สอง");
          a2.push("มูลค่า 200,000 บาท");
        }
        if (checkIndex3 !== -1) {
          a1.push("คุณถูกรางวัลที่สาม!");
          a2.push("มูลค่า 80,000 บาท");
        }
        if (checkIndex4 !== -1) {
          a1.push("คุณถูกรางวัลที่สี่!");
          a2.push("มูลค่า 40,000 บาท");
        }
        if (checkIndex5 !== -1) {
          a1.push("คุณถูกรางวัลที่ห้า!");
          a2.push("มูลค่า 20,000 บาท");
        }
        if (checkIndex6 !== -1) {
          a1.push("คุณถูกรางวัลเลขใกล้เคียงรางวัลที่หนึ่ง!");
          a2.push("มูลค่า 100,000 บาท");
        }
        if (checkIndex7 !== -1) {
          a1.push("คุณถูกรางวัลเลขหน้า 3 ตัว!");
          a2.push("มูลค่า 4,000 บาท");
        }
        if (checkIndex8 !== -1) {
          a1.push("คุณถูกรางวัลเลขท้าย 2 ตัว!");
          a2.push("มูลค่า 2,000 บาท");
        }
        if (checkIndex9 !== -1) {
          a1.push("คุณถูกรางวัลเลขท้าย 3 ตัว!");
          a2.push("มูลค่า 4,000 บาท");
        }
        if (a1.length === 0) {
          a1.push("คุณไม่ถูกรางวัล");
        }
        setPrize(a1);
        setMoney(a2);
        setShow(value);
      }
    })();
  };

  // console.log(value.length !== 2 && value.length !== 3 && value.length !== 6);

  return (
    <div>
      <Header />
      <div className="content-box">
        <div className="content-check">
          <h1>ตรวจลอตเตอรี่</h1>
          <div className="border-check">
            <h2 style={{ textAlign: "center" }} className="form-number">
              กรอกหมายเลขลอตเตอรี่
            </h2>
            <h2 className="text-slogan2">
              ลอตเตอรี่งวดประจำวันที่
              <div className="selectRoundDate">
                <select
                  className="select-date"
                  value={selectedRoundDate}
                  onChange={(e) => setSelectedRoundDate(e.target.value)}
                >
                  {roundDate.map((data) => (
                    <option value={data}>{getRoundDateString(data)}</option>
                  ))}
                </select>
              </div>
            </h2>
          </div>
        </div>

        <form className="input-page" onSubmit={handleSubmit}>
          <div className="input-form">
            <input
              type="text"
              placeholder="กรอกหมายเลขสลาก ..."
              className="input"
              value={value}
              maxLength={6}
              minLength={6}
              onChange={onInputChange}
            />

            <button
              type="submit"
              className="Submit"
              disabled={prizes.length === 0}
            >
              ตรวจสลาก
            </button>
          </div>
          {prizes.length !== 0 ? (
            <>
              <div className="show" style={{color: money.length === 0 ? 'red' : 'green'}}>{show}</div>
              {prize.map((x) => (
                <div className="submited" style={{ fontSize: "24px", color: money.length === 0 ? 'red' : 'green'  }}>
                  {x}
                </div>
              ))}
              {money.map((m) => (
                <div style={{ fontSize: "18px", color:"green" }}>{m}</div>
              ))}
            </>
          ) : (
            <>
              <div className="no-data2">
                <b style={{ fontSize: "25px", color: "red" }}>
                  ไม่พบข้อมูลผลรางวัลงวดนี้
                </b>
              </div>
            </>
          )}
          
        </form>
      </div>
    </div>
  );
};

export default CheckPage;
