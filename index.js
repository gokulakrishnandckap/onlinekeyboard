const value = [
    {
        id: 192,
        btn: "`",
        btns: "`",
        btn1: "~"
    },

    {
        id: 49,
        btn: "1",
        btns: "1",
        btn1: "!",
        tamils: "அ"
    },
    {
        id: 50,
        btn: "2",
        btns: "2",
        btn1: "@",
        tamils: "ஆ"
    },
    {
        id: 51,
        btn: "3",
        btns: "3",
        btn1: "#",
        tamils: "இ"
    },
    {
        id: 52,
        btn: "4",
        btns: "4",
        btn1: "$",
        tamils: "ஈ"
    },
    {
        id: 53,
        btn: "5",
        btns: "5",
        btn1: "%",
        tamils: "உ"
    },
    {
        id: 54,
        btn: "6",
        btns: "6",
        btn1: "^",
        tamils: "ஊ"
    },
    {
        id: 55,
        btn: "7",
        btns: "7",
        btn1: "&",
        tamils: "௭"
    },
    {
        id: 56,
        btn: "8",
        btns: "8",
        btn1: "*",
        tamils: "ஏ"
    },
    {
        id: 57,
        btn: "9",
        btns: "9",
        btn1: "(",
        tamils: "ஐ"
    },
    {
        id: 48,
        btn: "0",
        btns: "0",
        btn1: ")",
        tamils: "ஒ"
    },
    {
        id: 189,
        btn: "-",
        btns: "-",
        btn1: "_",
        tamils: "ஓ"
    },
    {
        id: 187,
        btn: "=",
        btns: "=",
        btn1: "+",
        tamils: "ஔ"
    },

    {
        id: 8,
        btn: "Backspace",
        btns: "Backspace",
        tamils: "Backspace"
    },
    {
        id: 9,
        btn: "Tab",
        btns: "Tab"
    },




    {
        id: 81,
        btn: "q",
        btns: "Q",
        tamils: "க"
    },
    {
        id: 87,
        btn: "w",
        btns: "W",
        tamils: "ங"
    },
    {
        id: 69,
        btn: "e",
        btns: "E",
        tamils: "ச"
    },
    {
        id: 82,
        btn: "r",
        btns: "R",
        tamils: "ஞ"
    },
    {
        id: 84,
        btn: "t",
        btns: "T",
        tamils: "ட"
    },
    {
        id: 89,
        btn: "y",
        btns: "Y",
        tamils: "ண"
    },
    {
        id: 85,
        btn: "u",
        btns: "U",
        tamils: "த"
    },
    {
        id: 73,
        btn: "i",
        btns: "I",
        tamils: "ந"
    },
    {
        id: 79,
        btn: "o",
        btns: "O",
        tamils: "ப"
    },
    {
        id: 80,
        btn: "p",
        btns: "P",
        tamils: "ம"
    },
    {
        id: 219,
        btn: "[",
        btns: "[",
        tamils: "ய"

    },
    {
        id: 221,
        btn: "]",
        btns: "]",
        tamils: "ர"
    },
    {
        id: 220,
        btn: "|",
        btns: "|"
    },
    {
        id: 20,
        btn: "CapsLock",
        btns: "CapsLock",

    },

    {
        id: 65,
        btn: "a",
        btns: "A",
        tamils: "ல"

    },
    {
        id: 83,
        btn: "s",
        btns: "S",
        tamils: "வ"

    },
    {
        id: 68,
        btn: "d",
        btns: "D",
        tamils: "ழ"

    },
    {
        id: 70,
        btn: "f",
        btns: "F",
        tamils: "ள"

    },
    {
        id: 71,
        btn: "g",
        btns: "G",
        tamils: "ற"


    },
    {
        id: 72,
        btn: "h",
        btns: "H",
        tamils: "ன"

    },
    {
        id: 74,
        btn: "j",
        btns: "J",
        tamils: "ஹ"
    },
    {
        id: 75,
        btn: "k",
        btns: "K",
        tamils: "ஷ"
    },
    {
        id: 76,
        btn: "l",
        btns: "L",
        tamils: "ஸ"
    },
    {
        id: 186,
        btn: ";",
        btns: ";",
        tamils: "ஜ"
    },
    {
        id: 222,
        btn: "'",
        btns: "'"
    },

    {
        id: 13,
        btn: "Enter",
        btns: "ENTER"
    },
    {
        id: 90,
        btn: "z",
        btns: "Z",
        tamils: "ெ"
    },

    {
        id: 88,
        btn: "x",
        btns: "X",
        tamils: "‍ா"
    },
    {
        id: 67,
        btn: "c",
        btns: "C",
        tamils: "ே"
    },
    {
        id: 86,
        btn: "v",
        btns: "V",
        tamils: "ை"
    },
    {
        id: 66,
        btn: "b",
        btns: "B",
        tamils: "ொ"
    },
    {
        id: 78,
        btn: "n",
        btns: "N",
        tamils: "ோ"
    },
    {
        id: 77,
        btn: "m",
        btns: "M",
        tamils: "ி"
    },
    {
        id: 188,
        btn: ",",
        btns: ",",
        tamils: "ீ"
    },
    {
        id: 96,
        btn: ".",
        btns: ".",
        tamils: "ு"
    },
    {
        id: 91,
        btn: "/",
        btns: "/",
        tamils: "ஂ"
    }



]


const btns = document.querySelector(".buttons")
const space = document.querySelector(".spaces")
const shift = document.querySelector(".shift")
const tamil = document.querySelector(".tamil")
const Alt = document.querySelector(".Alt")

tamil.addEventListener("mouseenter", (e) => {
    e.target.classList.toggle("actives")
    if (e.target.classList.contains("actives")) {
        e.target.innerText = "English Keyboard";
    }
    else {
        e.target.innerText = "Tamil Keyboard";


    }
    for (let m = 0; m < value.length; m++) {
        if (e.target.innerText == "English Keyboard") {

            if (AllButtons[m].id >= 49 && AllButtons[m].id <= 57) {
                AllButtons[m].innerText = value[m].tamils
            }
            if (AllButtons[m].id == 187 || AllButtons[m].id == 189 || AllButtons[m].id == 188 || AllButtons[m].id == 96 || AllButtons[m].id == 91 || AllButtons[m].id == 186 || AllButtons[m].id == 48) {
                AllButtons[m].innerText = value[m].tamils
            }
            if (AllButtons[m].id >= 65 && AllButtons[m].id <= 90) {
                AllButtons[m].innerText = value[m].tamils
            }
            if (AllButtons[m].id == 221 || AllButtons[m].id == 219) {

                AllButtons[m].innerText = value[m].tamils
            }
            if(AllButtons[m].id == 8){
                console.log(AllButtons[m]);
                AllButtons[m].innerText = value[m].tamils

            }

            Alt.innerText = "ஃ"
        }
        if (e.target.innerText == "Tamil Keyboard") {

            if (AllButtons[m].id >= 49 && AllButtons[m].id <= 57) {
                AllButtons[m].innerText = value[m].btn
            }
            if (AllButtons[m].id == 187 || AllButtons[m].id == 189 || AllButtons[m].id == 188 || AllButtons[m].id == 96 || AllButtons[m].id == 91 || AllButtons[m].id == 186 || AllButtons[m].id == 48) {
                AllButtons[m].innerText = value[m].btn
            }
            if (AllButtons[m].id >= 65 && AllButtons[m].id <= 90) {
                AllButtons[m].innerText = value[m].btn
            }
            if (AllButtons[m].id == 221 || AllButtons[m].id == 219) {

                AllButtons[m].innerText = value[m].btn
            }
            Alt.innerText = "Alt"
        }



    }
})
// if(tamil.innerText == "Tamil Keyboard"){

// }













let p = document.querySelector(".area")
for (let i = 0; i < value.length; i++) {

    const button = document.createElement("button")
    if (value[i].id == 9) {
        button.classList.add("tab")
    }
    if (value[i].id == 220) {
        button.classList.add("or")

    }
    if (value[i].id == 13) {
        button.classList.add("enter")

    }
    if (value[i].id == 90) {
        button.classList.add("zer")

    }
    button.setAttribute("id", value[i].id)
    button.innerText = value[i].btn;
    btns.append(button)


}
const AllButtons = document.querySelectorAll("button")

for (let j = 0; j < AllButtons.length; j++) {
    AllButtons[j].addEventListener("click", (e) => {

        if (e.target.innerText == "") {
            p.value += " "
            display()

        }
        else if (e.target.innerText == "Tamil Keyboard") {
            return
        }
        else if (e.target.innerText == "English Keyboard") {
            return
        }
        else if (e.target.innerText == "CapsLock") {
            for (k = 0; k < AllButtons.length; k++) {

                AllButtons[k].innerText = value[k].btns
                e.target.innerText = "CAPSLOCK"
                e.target.style.background = "blue"
            }
        }
        else if (e.target.innerText == "CAPSLOCK") {
            for (k = 0; k < AllButtons.length; k++) {
                AllButtons[k].classList.remove("show")
                AllButtons[k].innerText = value[k].btn
                e.target.innerText = "CapsLock"
                e.target.style.background = "white"

            }


        }
        else if (e.target.innerText == "Shift") {
            display()

            return

        }
        else if (e.target.innerText == "Ctrl") {
            display()

            return

        }
        else if (e.target.innerText == "Alt") {
            display()

            return

        }
        else if (e.target.innerText == "Backspace") {
            p.value = p.value.slice(0, -1);
            display()

        }
        else if (e.target.innerText == "BACKSPACE") {
            p.value = p.value.slice(0, -1);
            display()

        }
        else if (e.target.innerText == "Tab") {
            p.value += "    "
            display()

        }
        else if (e.target.innerText == "tab") {
            p.value += "    "
            display()

        }
        else if (e.target.innerText == "Enter") {
            p.value += "\n";
            display()

        }
        else if (e.target.innerText == "ENTER") {
            p.value += "\n";
            display()

        }
        else {
            p.value += e.target.innerText
            display()


        }
        function display() {
            for (let m = 0; m < AllButtons.length; m++) {
                if (e.keyCode == AllButtons[m].id) {
                    AllButtons[m].classList.add("active")
                }
                window.setTimeout(() => {
                    AllButtons[m].classList.remove("active")

                }, 200)
            }
        }
    })

}


window.addEventListener("keydown", (e) => {
   

    if (tamil.innerText == "English Keyboard") {
        if (e.key == "Backspace") {
            p.value = p.value.slice(0,-1)
            // console.log(p.value);
            display()
    
        }
        if (e.key == "Enter") {
            p.value += "\n"
    
        }
        if (e.code == "Space") {
            p.value += " ";
            display()

        }
        for (let v = 0; v < value.length; v++) {
            if (e.key == "Backspace") {
                return
            }
            if (e.key == "Shift") {
                return
        
            }
            if (e.key == "Ctrl") {
                return
        
            }
            else if (e.key == "Enter") {
                return
        
            }
            if (e.code == "Space") {
                return
    
            }
            else if (e.keyCode == value[v].id) {
            p.value += value[v].tamils
            display()

            }
            

        }

    }

    if (tamil.innerText == "Tamil Keyboard") {
        if (e.key == "Backspace") {
            p.value = p.value.slice(0,-1)
            display()

        }
        else if (e.code == "CapsLock") {
            for (k = 0; k < AllButtons.length; k++) {
                if (AllButtons[k].className == "") {
                    AllButtons[k].classList.add("show")
                    AllButtons[k].innerText = value[k].btns
                }
                else if (AllButtons[k].classList.contains("show")) {
                    AllButtons[k].classList.remove("show")
                    AllButtons[k].innerText = value[k].btn
                }
            }
        }
        else if (e.key == "Enter") {
            p.value += "\n";
            display()

        }
        else if (e.key == "Shift") {
            return;
        }
        else if (e.code == "Tab") {
            p.value += "    ";
        }
        else if (e.key == "CapsLock") {
            return
        }

        else if (e.code == "Space") {
            p.value += " ";
            display()

        }
        else {
            for (let r = 0; r < value.length; r++) {
                if (value[r].id == e.keyCode && AllButtons[r].classList.contains("show")) {
                    p.value += value[r].btns
                    display()
                }
                else if (e.key == value[r].btn) {
                    p.value += value[r].btn
                    display()

                }


            }
        }
    }
    function display() {
        for (let m = 0; m < AllButtons.length; m++) {
            if (e.keyCode == AllButtons[m].id) {
                AllButtons[m].classList.add("active")
            }
            window.setTimeout(() => {
                AllButtons[m].classList.remove("active")

            }, 200)
        }
    }
})

shift.addEventListener("click", (e) => {
    shift.classList.toggle("open")
    for (let x = 0; x < value.length; x++) {
        if (shift.classList.contains("open")) {
            if (AllButtons[x].id >= 48 && AllButtons[x].id <= 57) {
                AllButtons[x].innerText = value[x].btn1

            }
            if (AllButtons[x].id >= 65 && AllButtons[x].id <= 90) {
                AllButtons[x].innerText = value[x].btns

            }
        }
        else if (AllButtons[x].id >= 48 && AllButtons[x].id <= 57) {
            AllButtons[x].innerText = value[x].btn
        }
        else if (AllButtons[x].id >= 65 && AllButtons[x].id <= 90) {
            AllButtons[x].innerText = value[x].btn
        }

    }
})


window.addEventListener("keydown", (e) => {
    if (e.shiftKey) {
        shift.classList.toggle("open")
        for (let x = 0; x < value.length; x++) {
            if (shift.classList.contains("open")) {
                if (AllButtons[x].id >= 48 && AllButtons[x].id <= 57) {
                    AllButtons[x].innerText = value[x].btn1
                    if (AllButtons[x].id >= 65 && AllButtons[x].id <= 90) {
                        AllButtons[x].innerText = value[x].btns

                    }
                }
                if (AllButtons[x].id >= 65 && AllButtons[x].id <= 90) {
                    AllButtons[x].innerText = value[x].btns

                }
            }
            else if (AllButtons[x].id >= 48 && AllButtons[x].id <= 57) {
                AllButtons[x].innerText = value[x].btn
            }
            else if (AllButtons[x].id >= 65 && AllButtons[x].id <= 90) {
                AllButtons[x].innerText = value[x].btn

            }
            if (AllButtons[x].id >= 48 && AllButtons[x].id <= 57) {
                if (e.key == value[x].btn1) {
                    p.value += value[x].btn1
                }
            }
            if (AllButtons[x].id >= 65 && AllButtons[x].id <= 90) {
                if (e.key == value[x].btns) {
                    p.value += value[x].btns

                }

            }
        }
    }

})


function disable() {
    document.onkeydown = function (e) {
        return false;
    }
}
function disable() {
    document.onclick = function (e) {
        return false;
    }
}


