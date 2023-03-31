
const convert = document.getElementById('convert');
console.log(convert)
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
