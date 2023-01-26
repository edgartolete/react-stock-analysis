import { useEffect, useState } from "react";


function TableBodyContent ({lastUpdate ,code, sector, peTtm, epsTtm, evaluationMethod, bvpsAnnual, reports, marketPrices}) {
    let [marketPrice, setMarketPrice] = useState(0)
    const PRICE_AUB = 39.70;
    const PHP_BOND_YIELD = 6.029;

    useEffect(()=>{
        if(typeof marketPrices == 'undefined' || marketPrices.length == 0){
        }
        else if(code == 'AUB'){
            setMarketPrice(marketPrice = PRICE_AUB)
        }else{
            let amount = marketPrices.filter(obj => obj.symbol == code.toUpperCase())
            setMarketPrice(marketPrice = amount[0].price.amount)
        }
    },[marketPrices])

    function intrinsicValue(method){
        switch(method){
            case "grahamNewFV": {
                return grahamNewFV(epsTtm, 0.12, PHP_BOND_YIELD).toFixed(2);

            }
            case "grahamOldFV":{
                return grahamOldFV(epsTtm, bvpsAnnual).toFixed(2);
            }
            case "standard":{
                return standardMethod().toFixed(2);
            }
            default:{
                return "Error";
            }
        }
    }
    return (
        <>
            <div className="table-body-content">{lastUpdate}</div>        
            <div className="table-body-content">{code}</div>        
            <div className="table-body-content">{sector}</div>        
            <div className="table-body-content">{peTtm}</div>        
            <div className="table-body-content">{marketPrice}</div>        
            <div className="table-body-content">{intrinsicValue(evaluationMethod)}</div>        
            <div className="table-body-content">potential</div>        
            <div className="table-body-content"></div>        
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div>
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div>     
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div> 
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div>     
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div>   
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div>     
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div>   
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div>     
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div>   
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div>     
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div>   
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div>     
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div>        
            <div className="table-body-content">Test</div>         
        </>        
    )
}




function grahamOldFV(epsTtm, bvpsAnnual){
    return Math.sqrt(22.5 * epsTtm * bvpsAnnual);
}

function grahamNewFV(epsTtm, growthRate5yr, phpBondYield){
    return (epsTtm * (8.5 + 2 * growthRate5yr) * 4.4) / phpBondYield;
}

function standardMethod(){

}
export default TableBodyContent;