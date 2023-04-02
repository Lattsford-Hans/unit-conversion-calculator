
const convert = document.getElementById('convert');
const form = document.getElementById('form');
const scale = document.getElementById('Scale')

convert.addEventListener("click",()=>{
    let base = document.getElementById('base').value;
    let units = document.getElementById('unitsTo').value;
    let converted = document.getElementById('converted');
    let output=0;
    let unitsFrom = document.getElementById('unitsFrom').value;
    if(units==="meter" && unitsFrom==="meter")
    {
    alert('choose a different unit') 
    }
    else if(units==="inch" && unitsFrom==="inch")
    {
        alert('choose a different unit')
    }
    else if(units==="meter" && unitsFrom==="inch")
    {
        output=(base*0.0254)
        converted.textContent=output;
    }
    else if(units==="inch" && unitsFrom==="meter")
    {
        output=(base*39.3701)
        converted.textContent=output;
    }
    
})
scale.addEventListener("change",(e)=>{
     if(e.target.value==="length")
     {
        let unitsFrom = document.getElementById('unitsFrom')
        let unitsTo = document.getElementById('unitsTo')
        unitsFrom.hidden=false;
        unitsTo.hidden=false;
        unitsFromWeight.hidden=true;
        unitsToWeight.hidden=true;
     }
     else if(e.target.value)
     {
        let unitsFromWeight = document.getElementById('unitsFromWeight')
        let unitsToWeight = document.getElementById('unitsToWeight')
        unitsFromWeight.hidden=false;
        unitsToWeight.hidden=false;
        unitsFrom.hidden=true;
        unitsTo.hidden=true;
     }
})

