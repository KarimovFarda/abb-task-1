var container = document.getElementById("container")
let heading = document.getElementById("heading")
var MinimumParkingArea = []
function carParkingRoof([...arr],k){
    arr = arr.sort(function(a,b){return a - b})
    for(let i = 1; i <= arr[arr.length - 1]; i++){
        if(arr.includes(i)){
            container.innerHTML += `
                <div data-id=${i} class="parkingPlace">
                <a href="#" class="parkingNumber">${i}</a>
                <img src="../images/big-black-car-top-view-icon-sport-car-sedan-small-mini-avto-city-automobile-vector-illustration-big-black-car-top-view-icon-128162249-removebg-preview.png">
                </div>`
        }else{
        container.innerHTML += `
        <div data-id=${i} class="parkingPlace">
        <a href="#" class="parkingNumber">${i}</a>
        </div>`
        }
    }
    for(let m = 0; m < arr.length - k + 1; m++){
        MinimumParkingArea.push(arr[m + k - 1] - arr[m] + 1)
        MinimumParkingArea.sort(function(a,b){return a - b})
    }
    heading.innerHTML = `Minimum Length : ${MinimumParkingArea[0]}`
    return MinimumParkingArea[0]
}
console.log(carParkingRoof([6,2,12,7],3))
