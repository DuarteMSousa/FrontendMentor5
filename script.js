//Max height 100px
const DAYS = 7

let dias = []
fetch('data.json').then(res => res.json()).then(data => {
    console.log(data)
    for (i = 0; i < data.length; i++) {
        dias[i]=data[i].ammount 
    }
    let max = descobrirMax(dias)

    for (i = 0; i < dias.length; i++) {
        if (data[i].ammount == max) {
            window.document.getElementsByClassName('header').style.height = "100px";
        }
    }
})

function descobrirMax(params) {
    let max = params[0];
    for (i = 0; i < params.length; i++) {
        if (params[i] > max) {
            max = params[i]
        }
    }
    return max
}

function createBars() {


}