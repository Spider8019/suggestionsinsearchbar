var cities=["ayodhya","sultanpur","lucknow","etawah","varanasi","agra","kanpur","allahabad","barabanki","noida","delhi"]
cities.sort()
var suggestions=document.querySelector(".suggestions")

function showUsefulSuggestions(THIS){ 
    for(var i=0;i<cities.length;i++)
    {  
        if(cities[i].includes(THIS.value.replace(/ /g,'').toLowerCase()))
        {   
            var suggestion=document.createElement("P");
            suggestion.classList.add("suggestion")
            suggestion.innerHTML=cities[i]
            suggestions.append(suggestion)
        }   
}
console.log(suggestions.children);
}
function deleteAllChild(){
    while(suggestions.firstChild)
    {
    suggestions.removeChild(suggestions.firstChild)
    }
}