import React, { useState } from "react";
import { calculateValue } from "../helpers/calculateValue";

const CalculatorCard = ({ coinList, setData, data }) => {
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.coinA === "" || data.coinB === "")
      return alert("Selecciona una moneda");
    try {
      const response = await calculateValue(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <p>
        Calcular el valor teórico de:{" "}
        <select onChange={handleChange} name="coinA" id="">
          {coinList.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name}
            </option>
          ))}
        </select>
      </p>
      <p>
        con el Market Cap de{" "}
        <select onChange={handleChange} name="coinB" id="">
          {coinList.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name}
            </option>
          ))}
        </select>
      </p>
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Calcular
      </button>
    </form>
  );
};

export default CalculatorCard;
