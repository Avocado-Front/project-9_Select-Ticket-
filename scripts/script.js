const selectCountries = document.getElementById('countries')
const selectCities = document.getElementById('cities')

let items = {
    IRAN:['Sarab','Tabriz','Tehran'],
    CANADA:['Torento','Vancover','Otawa'],
    ITALY:['Milan','Torin','Rome']
}

selectCountries.addEventListener('change',function(){
    let chooseContry = selectCountries.value
    // console.log(chooseContry);
    selectCities.innerHTML = ""

    if(selectCountries.value == 'Select'){
        selectCities.innerHTML = ""
        selectCities.innerHTML += "<option>Select City</option>"
    }else{
        items[chooseContry].forEach(function(city){
            let newOption = document.createElement('option')
            newOption.innerHTML = city 
            selectCities.append(newOption)
        })
    }
})