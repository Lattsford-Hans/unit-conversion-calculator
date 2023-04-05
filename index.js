
const convert = document.getElementById('convert');
const form = document.getElementById('form');
const scale = document.getElementById('Scale')
/*calculation logic based on value*/
let calculation=(value)=>{
    if (value==="length"){
        let base = document.getElementById('base').value;
        let units = document.getElementById('unitsTo').value;
        let converted = document.getElementById('converted');
        let output=0;
        let unitsFrom = document.getElementById('unitsFrom').value;

        if(units==="meter" && unitsFrom==="meter")
        {
        alert('Similar units') 
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

    }
    else if (value==="weight"){
        let base = document.getElementById('base').value;
        let converted = document.getElementById('converted');
        let output=0;
        let unitsWeight = document.getElementById('unitsToWeight').value;
        let weightUnit = document.getElementById('unitsFromWeight').value;

        if(unitsWeight==="kg" && weightUnit==="kg")
        {
            alert('choose a different unit')
        }
        else if(unitsWeight==="lbs" && weightUnit==="lbs")
        {
            alert("similar units")

        }
        else if(unitsWeight==="kg" && weightUnit==="lbs")
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
/*detects changes based on dropdown list*/
scale.addEventListener("change",(e)=>{
     if(e.target.value==="length")
     {
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
        convert.addEventListener("click",()=>{
            calculation(e.target.value)
            
        })
     }
     else if(e.target.value==="weight")
     {
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
        convert.addEventListener("click",()=>{
            calculation(e.target.value)
            
        })
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

