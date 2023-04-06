
const convert = document.getElementById('convert');
const form = document.getElementById('form');
const scale = document.getElementById('Scale')


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
    
    

    
    
}
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
        from =  unitsFrom.value;
        to = unitsTo.value;
        unitsFrom.addEventListener("change",(e)=>{
            from=e.target.value;
            //console.log(x);
            if(from===to)
            {
           // console.log(x);
            convert.disabled=true;
            }
            else
            {
                convert.disabled=false;
            }
        })
        unitsTo.addEventListener("change",(e)=>{
            to=e.target.value;
            //console.log(y);
            if(from===to)
            {
           // console.log(x);
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
        console.log('weight')
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
        let fromValueWeight = unitsFromWeight.value;
        let toValueWeight = unitsToWeight.value;
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
           // console.log(x);
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

