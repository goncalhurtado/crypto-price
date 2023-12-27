import React from "react";
import { useEffect, useState } from "react";
import { getCoinsData, getCoinList } from "../helpers/getCoinsData";
import CalculatorCard from "./CalculatorCard";

const Calculator = () => {
  const [coinList, setCoinList] = useState([]);
  const [data, setData] = useState({
    coinA: "",
    coinB: "",
  });
  console.log(data);
  const fetchCoinList = async () => {
    const coinList = await getCoinList();
    setCoinList(coinList);
  };

  useEffect(() => {
    fetchCoinList();
  }, []);

  return (
    <div>
      <h1>Calculator</h1>
      <CalculatorCard coinList={coinList} data={data} setData={setData} />
    </div>
  );
};

export default Calculator;
