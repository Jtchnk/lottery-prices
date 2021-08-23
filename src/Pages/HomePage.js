import Header from '../Components/Header';
import React ,{useEffect, useState} from "react";
import callApi from '../helpers/callapi';
import { getRoundDateString } from '../helpers/helpers';
import { useSelector } from 'react-redux'


const Home = () => {
  const [prizes, setPrizes] = useState({});
  const webConfig = {roundDate : '01-02-64'}
  
  //useSelector((state) => state.config);

  // let lastRoundDate = '';
  // if (webConfig.lastRoundDate) {
  //   lastRoundDate = getRoundDateString(webConfig.lastRoundDate);
  // }
  let roundDate = '';
  if (webConfig.roundDate) {
    roundDate = getRoundDateString(webConfig.roundDate);
  }

  const fetchPrize = async () => {
    try {
      const _prizes = await callApi({
        url: `/prizes/rounds/${webConfig.roundDate}/annoucement`,
      });
      console.log("prizes",_prizes);
      setPrizes(_prizes);
    } catch (err) {
      console.log("err",err);
    }
  };

  useEffect(() => {
    console.log("webconfig",webConfig);
      fetchPrize();
  } , [webConfig.showResult]);

  let showPrize = false;
  if (webConfig.showResult && prizes.first) {
    showPrize = true;
  }

  return (
    
    <div>
      <Header />
      <div>
      <h1>ลอตเตอรี่ออนไลน์ ซื้อเองง่าย จ่ายโดยรัฐบาล</h1>
        <h1 className="text-blue">ราคา 80 บาท ไม่มีค่าบริการ</h1>
        <h2 className="text-slogan">ลอตเตอรี่งวดวันที่ {roundDate}</h2>
      <div className="sec-box sec-announce text-center">
            <div className="logo">
              <img src="https://xn--12car4jyaq2b.com/img/logo.svg" width="220" height="27" alt="โลโก้ กองสลาก ดอท คอม" className="logo" />
            </div>
            <h2 className="sec-title2">ผลรางวัลสลากกินแบ่งรัฐบาล</h2>

            <div className="round">งวดประจำวันที่ {roundDate}</div>

            <div className="prize-1">
              <h3>รางวัลที่ 1</h3>
              <div className="bg">
                <b className="first">{prizes.first}</b>
              </div>
            </div>

            <div className="prize-2-3">
              <div className="prize-3">
                <h3>เลขหน้า 3 ตัว</h3>
                <div className="bg">
                  <b>{prizes.first3Digits && prizes.first3Digits[0]}</b>
                  <i className="sep"></i>
                  <b>{prizes.first3Digits && prizes.first3Digits[1]}</b>
                </div>
                <h3>เลขท้าย 3 ตัว</h3>
                <div className="bg">
                  <b>{prizes.last3Digits && prizes.last3Digits[0]}</b>
                  <i className="sep"></i>
                  <b>
                    <b>{prizes.last3Digits && prizes.last3Digits[1]}</b>
                  </b>
                </div>
              </div>

              <div className="prize-2">
                <h3>เลขท้าย 2 ตัว</h3>
                <div className="bg">
                  <b className="first">{prizes.last2Digits && prizes.last2Digits[0]}</b>
                </div>
              </div>
            </div>
          </div>
          </div>
    </div>
  );
};

export default Home;
