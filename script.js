//Max height 100px

let dias = []

function descobrirMax(params) {
    let max = params[0];
    for (i = 0; i < params.length; i++) {
        console.log(params[i])
        if (params[i] > max) {
            max = params[i]
        }
    }
    return max
}



fetch('data.json').then(res => res.json()).then(data => {
    document.querySelector('.bar').style.height = "0px"
    console.log(data)
    for (i = 0; i < data.length; i++) {
        dias[i] = data[i].amount
    }
    let max = descobrirMax(dias)

    for (i = 0; i < data.length; i++) {
        if (data[i].amount == max) {
            document.querySelector('.' + data[i].day).querySelector('.bar').style.height = "100px"
            document.querySelector('.' + data[i].day).querySelector('.bar').classList.add("max")
        }
    }

    let height;
    for (i = 0; i < data.length; i++) {
        height=(data[i].amount/max)*100
        document.querySelector('.' + data[i].day).querySelector('.bar').style.height = height+"px"
    }
})



