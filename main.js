let div = document.getElementById("table")
let display = 0
let title = document.getElementById("title")
let get = document.getElementById("get")



const dv = {0:"tp",1:"cc",2:"ds",3:"examen"}
let notes = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]

let coeff = {
    "analyse":[0,0.15,0.35,0.5,7],
    "algébre":[0,0.15,0.35,0.5,7],
    "phy1":[0.2,0.15,0.25,0.4,4],
    "phy2":[0,0.15,0.35,0.5,4],
    "chimie":[0.2,0.15,0.25,0.4,4],
    "français":[0,0.15,0.35,0.5,3],
    "anglais":[0,0.15,0.35,0.5,3],
    "info":[0,0.15,0.35,0.5,4],
    "sta":[0,0.15,0.35,0.5,5]

}

function main() {

    if (display === 1) {
        div.style.display = "none"
        
        display = 0
        title.style.transform = "translate(50%,100%)"
    }
    else {
        title.style.transform = "translate(50%,10%)"
        div.style.display = "block"
        display = 1

    }
}

function moyenne() {
    let moy = 0
    for (let i = 0; i<notes.length; i++){
        for (let j = 0; j<notes[i].length; j++) {

            let v = document.getElementById(Object.keys(coeff)[i]+"-"+dv[j])
            if (v){
                notes[i][j] = +v.value
            }
        }
    }

    for (let k = 0; k<notes.length; k++){
        moy += ((notes[k][0] * coeff[Object.keys(coeff)[k]][0]) + (notes[k][1] * coeff[Object.keys(coeff)[k]][1]) + (notes[k][2] * coeff[Object.keys(coeff)[k]][2]) + (notes[k][3] * coeff[Object.keys(coeff)[k]][3]) )  * coeff[Object.keys(coeff)[k]][4]

    }

    moy = moy/41
    document.getElementById("moy").innerHTML = moy.toFixed(2)
}