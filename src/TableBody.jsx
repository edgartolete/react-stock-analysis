import axios from "axios"
import { useEffect } from "react";
import { useState } from "react"
import TableBodyContent from "./TableBodyContent";


function TableBody(){
    let [data, setData] = useState([])
    let [market, setMarket] = useState([]);
    let [marketPrices, setMarketPrices] = useState([])
    

    useEffect(() => {
        axios.get("./stocks.json")
        .then((response) => setData(data = response.data))
        .then(()=>{
            axios.get("https://phisix-api4.appspot.com/stocks.json")
            .then((response) => setMarket(market = response.data))
            .then(()=> setMarketPrices(marketPrices = market['stock']))
        })
        .catch(err => console.log(err))
    },[]);



    return (
        <>
            {data.map(obj => <TableBodyContent 
                key={obj.code}                
                lastUpdate = {obj.lastUpdate}
                code = {obj.code} 
                sector = {obj.sector}
                peTtm = {obj.peTtm}
                epsTtm = {obj.epsTtm}
                bvpsAnnual = {obj.bvpsAnnual}
                evaluationMethod = {obj.evaluationMethod}
                reports = {obj.reports}
                marketPrices = {marketPrices || ""}
                />)}
        </>
    )
}

export default TableBody

