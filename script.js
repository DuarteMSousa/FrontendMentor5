//Max height 100px

let dias = []
let maxSize = 100

//find max amount
function descobrirMax(params) {
    let max = params[0];
    for (i = 0; i < params.length; i++) {
        if (params[i] > max) {
            max = params[i]
        }
    }
    return max
}


//create bars
fetch('data.json').then(res => res.json()).then(data => {
    document.querySelector('.bar').style.height = "0px"

    for (i = 0; i < data.length; i++) {
        dias[i] = data[i].amount
    }
    let max = descobrirMax(dias)

    for (i = 0; i < data.length; i++) {
        if (data[i].amount == max) {
            document.querySelector('.' + data[i].day).querySelector('.bar').title = data[i].amount
            document.querySelector('.' + data[i].day).querySelector('.bar').style.height = maxSize + "px"
            document.querySelector('.' + data[i].day).querySelector('.bar').classList.add("max")
        }
    }

    let height;
    for (i = 0; i < data.length; i++) {
        height = (data[i].amount / max) * maxSize
        document.querySelector('.' + data[i].day).querySelector('.bar').style.height = height + "px"
        document.querySelector('.' + data[i].day).querySelector('.bar').title = data[i].amount
    }

    //hover on bar
    const bar = document.querySelectorAll('.bar')
    bar.forEach(function (element) {
        element.addEventListener('mouseover', function handleHover() {
            if (element.parentElement) {
                // Obter o elemento pai
                var weekday = element.parentElement;

                // Obter a lista de classes do elemento pai
                var classesWeekday = weekday.classList;

                // Converter a lista de classes em um array para facilitar o acesso
                var classesWeekdayArray = Array.from(classesWeekday);
                let hiddenDiv
                for (i = 0; i < classesWeekdayArray.length; i++) {
                    switch (classesWeekdayArray[i]) {
                        case 'mon':
                            console.log("monday")
                            hiddenDiv = document.querySelector('.mon').querySelector('.hidden');
                            hiddenDiv.innerHTML = document.querySelector('.mon').querySelector('.bar').title
                            hiddenDiv.style.visibility = 'visible';
                            break;
                        case 'tue':
                            hiddenDiv = document.querySelector('.tue').querySelector('.hidden');
                            hiddenDiv.innerHTML = document.querySelector('.tue').querySelector('.bar').title
                            hiddenDiv.style.visibility = 'visible';
                            break;
                        case 'wed':
                            hiddenDiv = document.querySelector('.wed').querySelector('.hidden');
                            hiddenDiv.innerHTML = document.querySelector('.wed').querySelector('.bar').title
                            hiddenDiv.style.visibility = 'visible';
                            break;
                        case 'thu':
                            hiddenDiv = document.querySelector('.thu').querySelector('.hidden');
                            hiddenDiv.innerHTML = document.querySelector('.thu').querySelector('.bar').title
                            hiddenDiv.style.visibility = 'visible';
                            break;
                        case 'fri':
                            hiddenDiv = document.querySelector('.fri').querySelector('.hidden');
                            hiddenDiv.innerHTML = document.querySelector('.fri').querySelector('.bar').title
                            hiddenDiv.style.visibility = 'visible';
                            break;
                        case 'sat':
                            hiddenDiv = document.querySelector('.sat').querySelector('.hidden');
                            hiddenDiv.innerHTML = document.querySelector('.sat').querySelector('.bar').title
                            hiddenDiv.style.visibility = 'visible';
                            break;
                        case 'sun':
                            hiddenDiv = document.querySelector('.sun').querySelector('.hidden');
                            hiddenDiv.innerHTML = document.querySelector('.sun').querySelector('.bar').title
                            hiddenDiv.style.visibility = 'visible';
                            break;
                    }

                }

            }
        })
        element.addEventListener("mouseout", function () {
            hiddenDiv = document.querySelectorAll('.hidden');
            hiddenDiv.forEach(function (element) {
                element.style.visibility = "hidden";
            })
        });

    })
})
    
