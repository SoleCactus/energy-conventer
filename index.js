const selectElement = document.querySelector('#country');

function handleSelectChange(event) {
  console.log(`Вибір було змінено на: ${event.target.value}`);
  if(event.target.value == "Україна") {
    selectElement.style.cssText = "background-image: linear-gradient(rgb(0, 102, 255), yellow);"
  }
  else{
    selectElement.style.cssText = "background-image: linear-gradient(white, red);"
  }
}

selectElement.addEventListener('change', handleSelectChange);

document.getElementById("submit").onclick = function(){
    let country = document.getElementById("country").value;
    let type = document.getElementById("type").value;
    let timeADay = document.getElementById("time").value;
    let WT = document.getElementById("usingOfEnergy").value;
    if(timeADay > 24 || WT == ""){
        document.getElementById("result").innerHTML = "Введено хибні данні";
        return;
    }
    if(type=="Вт"){
        WT /= 1000;
    }
    let energyUsing = WT*timeADay*30;
    if(country == "Україна"){
        let price = Math.floor(energyUsing * 1.68);
        document.getElementById("result").innerHTML = `Енергоспоживання: ${energyUsing}КВт за місяць. Ціна: ${price}₴`;
    }
    else {
        let price = Math.floor(energyUsing * 0.4);
        document.getElementById("result").innerHTML = `Енергоспоживання: ${energyUsing}КВт за місяць. Ціна: ${price}zł`;
    }
}