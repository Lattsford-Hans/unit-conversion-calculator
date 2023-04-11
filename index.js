const convert = document.getElementById('convert');
const form = document.getElementById('form');
const scale = document.getElementById('Scale')
/*Function to convert from one value to another*/
let calculation=(value)=>{
    if (value==="length"){
        let base = document.getElementById('base').value;
        let units = document.getElementById('unitsTo').value;
        let converted = document.getElementById('converted');
        let output=0;
        let unitsFrom = document.getElementById('unitsFrom').value;
        if(units==="meter" && unitsFrom==="inch")
        {
            output=(base*0.0254)
            converted.textContent=output;
        }
        else if(units==="inch" && unitsFrom==="meter")
        {
            output=(base*39.3701)
            converted.textContent=output;
        }

    }
    else if (value==="weight"){
        let base = document.getElementById('base').value;
        let converted = document.getElementById('converted');
        let output=0;
        let unitsWeight = document.getElementById('unitsToWeight').value;
        let weightUnit = document.getElementById('unitsFromWeight').value;
        if(unitsWeight==="kg" && weightUnit==="lbs")
        {

            output=(base*0.453592)
            converted.textContent=output;
        }
        else if(unitsWeight==="lbs" && weightUnit==="kg")
        {
            output=(base*2.20462)
            converted.textContent=output;
        }
    }
    else if (value==="dtr"){
        let base = document.getElementById('base').value;
        let converted = document.getElementById('converted');
        let output=0;
        let unitsDTR = document.getElementById('unitsToDTR').value;
        let DTRUnit = document.getElementById('unitsFromDTR').value;
        if(unitsDTR==="mbps" && DTRUnit==="MBPS")
        {

            output=(base*8)
            converted.textContent=output;
        }
        else if(unitsDTR==="MBPS" && DTRUnit==="mbps")
        {
            output=(base*0.125)
            converted.textContent=output;
        }
    }  
    else if(value==="currency")
    {
   
        let base = document.getElementById('base').value;
        let converted = document.getElementById('converted');
        let fromCurr = document.getElementById('unitsFromCurrency').value;
        let toCurr = document.getElementById('unitsToCurrency').value;
        let calculateRate=async(base,converted,fromCurr,toCurr)=>{
            try{
            let response =  await fetch("https://open.er-api.com/v6/latest/USD")
            let re = await response.text()  
            let actualCurrency = JSON.parse(re)
           if(fromCurr==="USD" && toCurr!=="USD")
           {
            converted.textContent=base*actualCurrency.rates[toCurr];
           }
            else if(toCurr==='USD' && fromCurr!=='USD')
            {
                converted.textContent=base*actualCurrency.rates[fromCurr]
            }
            else if(fromCurr!=='USD' && toCurr!=='USD')
            {
                let x = actualCurrency.rates[fromCurr]
                let y = actualCurrency.rates[toCurr]
                converted.textContent=base*(y/x)
            }
            }
            catch(e)
            {
                return e;
            }
        
        }

       if(fromCurr!==toCurr)
        {
            calculateRate(base,converted,fromCurr,toCurr)

        }
       
    }
}

/*Listening on the unit chooser drop down to select different units to convert*/
scale.addEventListener("change",(e)=>{
     if(e.target.value==="length")
     {
        let from;
        let to;
        console.log('length')
        let base = document.getElementById('base')
        base.value=" "
        let converted = document.getElementById('converted')
        converted.textContent=" "
        let unitsFrom = document.getElementById('unitsFrom')
        let unitsTo = document.getElementById('unitsTo')
        unitsFrom.hidden=false;
        unitsTo.hidden=false;
        unitsFromWeight.hidden=true;
        unitsToWeight.hidden=true;
        unitsFromDTR.hidden=true;
        unitsToDTR.hidden=true;
        from =  unitsFrom.value;
        to = unitsTo.value;
        /*logic to disable convert button if inputs are similar*/
        unitsFrom.addEventListener("change",(e)=>{
            from=e.target.value;
            
            if(from===to)
            {
           
            convert.disabled=true;
            }
            else
            {
                convert.disabled=false;
            }
        })
        unitsTo.addEventListener("change",(e)=>{
            to=e.target.value;
          
            if(from===to)
            {
           
            convert.disabled=true;
            }
            else
            {
                convert.disabled=false;
            }
        })
        if(!convert.disabled)
        {  
        convert.addEventListener("click",()=>{
            calculation(e.target.value)
          
        })
        }
     }
     else if(e.target.value==="weight")
     {
       // console.log('weight')
        let base = document.getElementById('base')
        base.value=" "
        let converted = document.getElementById('converted')
        converted.textContent=" "
        let unitsFromWeight = document.getElementById('unitsFromWeight')
        let unitsToWeight = document.getElementById('unitsToWeight')
        unitsFromWeight.hidden=false;
        unitsToWeight.hidden=false;
        unitsFrom.hidden=true;
        unitsTo.hidden=true;
        unitsFromDTR.hidden=true;
        unitsToDTR.hidden=true;
        let fromValueWeight = unitsFromWeight.value;
        let toValueWeight = unitsToWeight.value;
        /*logic to disable convert button if inputs are similar*/
        unitsFromWeight.addEventListener("change",(e)=>{
            fromValueWeight=e.target.value;
            if(fromValueWeight===toValueWeight)
            {
           // console.log(x);
            convert.disabled=true;
            }
            else
            {
                convert.disabled=false;
            }
        })
        unitsToWeight.addEventListener("change",(e)=>{
            toValueWeight=e.target.value;
            if(fromValueWeight===toValueWeight)
            {
           
            convert.disabled=true;
            }
            else
            {
                convert.disabled=false;
            }
        })
        if(!convert.disabled)
        {
        convert.addEventListener("click",()=>{
            calculation(e.target.value)
            
        })
        }
     }
     else if(e.target.value==="dtr")
     {
        
        let base = document.getElementById('base')
        base.value=" "
        let converted = document.getElementById('converted')
        converted.textContent=" "
        let unitsFromDTR = document.getElementById('unitsFromDTR')
        let unitsToDTR = document.getElementById('unitsToDTR')
        unitsFromWeight.hidden=true;
        unitsToWeight.hidden=true;
        unitsFrom.hidden=true;
        unitsTo.hidden=true;
        unitsFromDTR.hidden=false;
        unitsToDTR.hidden=false;
        let fromValueDTR = unitsFromDTR.value;
        let toValueDTR = unitsToDTR.value;
        /*logic to disable convert button if inputs are similar*/
        unitsFromDTR.addEventListener("change",(e)=>{
            fromValueDTR=e.target.value;
            if(fromValueDTR===toValueDTR)
            {
           // console.log(x);
            convert.disabled=true;
            }
            else
            {
                convert.disabled=false;
            }
        })
        unitsToDTR.addEventListener("change",(e)=>{
            toValueDTR=e.target.value;
            if(fromValueDTR===toValueDTR)
            {
           
            convert.disabled=true;
            }
            else
            {
                convert.disabled=false;
            }
        })
        if(!convert.disabled)
        {
        convert.addEventListener("click",()=>{
            calculation(e.target.value)
            
        })
        }
     }
     else if(e.target.value==="currency")
     {
        let base = document.getElementById('base')
        base.value=" "
        let converted = document.getElementById('converted')
        converted.textContent=" "
        let unitsFromCurrency = document.getElementById('unitsFromCurrency')
        let unitsToCurrency = document.getElementById('unitsToCurrency')
        let unitsFromWeight = document.getElementById('unitsFromWeight')
        let unitsToWeight = document.getElementById('unitsToWeight')
        let unitsFromLength = document.getElementById('unitsFrom')
        let unitsToLength = document.getElementById('unitsTo')
        let unitsFromDTR = document.getElementById('unitsFromDTR')
        let unitsToDTR = document.getElementById('unitsToDTR')
        unitsFromWeight.hidden=true;
        unitsToWeight.hidden=true;
        unitsFromLength.hidden=true;
        unitsToLength.hidden=true;
        unitsFromDTR.hidden=true;
        unitsToDTR.hidden=true;
        unitsFromCurrency.hidden=false;
        unitsToCurrency.hidden=false;
        let unitsFrom=unitsFromCurrency.value;
        let unitsTo=unitsToCurrency.value;
        unitsFromCurrency.addEventListener("change",(e)=>{
            unitsFrom=e.target.value;
            if(unitsFrom===unitsTo)
            {
           // console.log(x);
            convert.disabled=true;
            }
            else
            {
                convert.disabled=false;
            }
        })
        unitsToCurrency.addEventListener("change",(e)=>{
            unitsTo=e.target.value;
            if(unitsFrom===unitsTo)
            {
           
            convert.disabled=true;
            }
            else
            {
                convert.disabled=false;
            }
        })
        if(!convert.disabled)
        {
        convert.addEventListener("click",()=>{
            calculation(e.target.value)
            
        })
        }
     }
     else{
        let base = document.getElementById('base')
        base.value=" "
        let converted = document.getElementById('converted')
        converted.textContent=" "
        let unitsFrom = document.getElementById('unitsFrom')
        let unitsTo = document.getElementById('unitsTo')
        let unitsFromWeight = document.getElementById('unitsFromWeight')
        let unitsToWeight = document.getElementById('unitsToWeight')
        unitsFromWeight.hidden=true;
        unitsToWeight.hidden=true;
        unitsFrom.hidden=true;
        unitsTo.hidden=true;
     }

})

