import { dbCoins } from "./dbToTest";

export const calculateValue = async(data) => {

    const idsToFind = [data.coinA, data.coinB];

    const foundCoins = dbCoins.filter(coin => idsToFind.includes(coin.id));

    const coins = foundCoins.map(coin => ({
        id: coin.id,
        name: coin.name,
        market_cap: coin.market_cap,
        circulating_supply: coin.circulating_supply
    }));

    const coinA = coins[0]
    const coinB = coins[1]

    const value = coinB.market_cap / coinA.circulating_supply;

    alert(`
${value} es el valor teorico de ${coinA.name} con el market cap de ${coinB.name}
`)

    return value;
}