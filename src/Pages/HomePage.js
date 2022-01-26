import Header from "../Components/Header";
import React, { useEffect, useState } from "react";
import callApi from "../helpers/callapi";
import { getRoundDateString } from "../helpers/helpers";
//import { useSelector } from 'react-redux'

const Home = () => {
  const [prizes, setPrizes] = useState([]);
  const [roundDate, setRoundDate] = useState([]);
  const [selectedRoundDate, setSelectedRoundDate] = useState([]);
  // const webConfig = {roundDate : '01-02-64'}

  //useSelector((state) => state.config);

  // let lastRoundDate = '';
  // if (webConfig.lastRoundDate) {
  //   lastRoundDate = getRoundDateString(webConfig.lastRoundDate);
  // }
  // let roundDate = '';
  // if (webConfig.roundDate) {
  //   roundDate = getRoundDateString(webConfig.roundDate);
  // }

  useEffect(() => {
    const fetchRoundDate = async () => {
      try {
        const response = await callApi({ url: "/summaries/rounds" });
        console.log("response===>>>",response)
        //console.log("response===>>>",response)
        const temp = response.map((data) => data.roundDate);
        var sortedStrings = temp.sort(function (a, b) {
          var aComps = a.split("-");
          var bComps = b.split("-");
          var aDate = new Date(aComps[2], aComps[1], aComps[0]);
          var bDate = new Date(bComps[2], bComps[1], bComps[0]);
          return aDate.getTime() - bDate.getTime();
        });
        setRoundDate(sortedStrings);
        console.log("sort",sortedStrings);
        sortedStrings.pop()
        setSelectedRoundDate(sortedStrings[sortedStrings.length-1]);
        //console.log("ttttt",test);
        //setTest(sortedStrings(sortedStrings.length-1))
        //console.log("temppp",temp);
      } catch (err) {

        console.log(err);
      }
    };
    fetchRoundDate();
  }, []);

  useEffect(() => {
    fetchPrize();
    //console.log("fetch price");
  }, [selectedRoundDate]);

  console.log("selectedRoundDate :",selectedRoundDate)
  
  const fetchPrize = async () => {
    try {
      const _prizes = await callApi({
        url: `/prizes/rounds/${selectedRoundDate}/annoucement`,
      });
      setPrizes(_prizes);
      console.log("_prizes===>>>",_prizes);
      
      
    } catch (err) {
      setPrizes([]);
      // let roundDatePop = [...roundDate]
      // roundDatePop.pop()
      // setTest(roundDatePop)
      //console.log("rounDateeeee",roundDatePop);
      console.log("err", err);
    }
  };

  //console.log("test===>>>",test)

  return (
    <div>
      <Header />
      <div className="content-box">
        <p style={{textAlign:"center"}}>
          <img src="logoksl.png" width="150"  />
        </p>
        {/* <h1>ลอตเตอรี่ออนไลน์ ซื้อเองง่าย จ่ายโดยรัฐบาล</h1>
        <h1 className="text-blue">ราคา 80 บาท ไม่มีค่าบริการ</h1> */}
        <div className="sec-box sec-announce text-center">
          <div className="logo">
            <img
              src="https://xn--12car4jyaq2b.com/img/logo.svg"
              width="220"
              height="27"
              alt="โลโก้ กองสลาก ดอท คอม"
              className="logo"
            />
          </div>
          <h2 className="sec-title2">ผลรางวัลสลากกินแบ่งรัฐบาล</h2>
 {/* {prizes.length !== 0 ? ( */}
          <div className="round">
            งวดประจำวันที่ 
            <select
              className="select-date2"
              value={selectedRoundDate}
              // dropupAuto={true}
              onChange={(e) => setSelectedRoundDate(e.target.value)}
            >
              {roundDate.map((data) => (
                <option value={data}>{getRoundDateString(data)}</option>
              ))}
            </select> 
            </div>
          {/* </div>): (<div></div>)} */}
          {prizes.length !== 0 ? (
            <>
              <div className="prize-1">
                <h3>รางวัลที่ 1</h3>
                <div className="bg">
                  <b className="first">
                    {prizes.first}
                    {/* {prizes.length === 0 && <b>xxxxxx</b>} */}
                  </b>
                </div>
              </div>

              <div className="prize-2-3">
                <div className="prize-3">
                  <h3>เลขหน้า 3 ตัว</h3>
                  <div className="bg">
                    <b>
                      {prizes.first3Digits && prizes.first3Digits[0]}
                      {/* {prizes.length === 0 && <b>xxx</b>} */}
                    </b>
                    <i className="sep"></i>
                    <b>
                      {prizes.first3Digits && prizes.first3Digits[1]}
                      {/* {prizes.length === 0 && <b>xxx</b>} */}
                    </b>
                  </div>
                  <h3>เลขท้าย 3 ตัว</h3>
                  <div className="bg">
                    <b>
                      {prizes.last3Digits && prizes.last3Digits[0]}
                      {/* {prizes.length === 0 && <b>xxx</b>} */}
                    </b>
                    <i className="sep"></i>
                    <b>
                      <b>
                        {prizes.last3Digits && prizes.last3Digits[1]}
                        {/* {prizes.length === 0 && <b>xxx</b>} */}
                      </b>
                    </b>
                  </div>
                </div>

                <div className="prize-2">
                  <h3>เลขท้าย 2 ตัว</h3>
                  <div className="bg">
                    <b className="first">
                      {prizes.last2Digits && prizes.last2Digits[0]}
                      {/* {prizes.length === 0 && <b>xx</b>} */}
                    </b>
                  </div>
                </div>
              </div>
              <div className="prize-1">
                <h3>รางวัลที่ 2</h3>
                <div className="bg">
                  <b>
                    {prizes.second &&
                      prizes.second.map((p) => {
                        return <span style={{ margin: "3%" }}>{p} </span>;
                      })}
                  </b>
                </div>
              </div>
              <div className="prize-1">
                <h3>รางวัลที่ 3</h3>
                <div className="bg">
                  <b>
                    {prizes.third &&
                      prizes.third.map((p) => {
                        return <span style={{ margin: "3%" }}>{p} </span>;
                      })}
                  </b>
                </div>
              </div>
              <div className="prize-1">
                <h3>รางวัลที่ 4</h3>
                <div className="bg">
                  <b>
                    {prizes.forth &&
                      prizes.forth.map((p) => {
                        return <span style={{ margin: "3%" }}>{p} </span>;
                      })}
                  </b>
                </div>
              </div>
              <div className="prize-1">
                <h3>รางวัลที่ 5</h3>
                <div className="bg">
                  <b>
                    {prizes.fifth &&
                      prizes.fifth.map((p) => {
                        return <span style={{ margin: "3%" }}>{p} </span>;
                      })}
                  </b>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="no-data">
                <b style={{ fontSize: "25px", color: "red" }}>
                  ไม่พบข้อมูลผลรางวัลงวดนี้
                </b>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
