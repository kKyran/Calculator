let outputScreen = document.getElementById("outputscreen");

function display(num) {
    outputScreen.value += num;
}

function Calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        alert("Жарамсыз амал!");
    }
}

function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

function sin() {
    try {
        outputScreen.value = Math.sin(toRadians(parseFloat(outputScreen.value)));
    } catch (err) {
        alert("Жарамсыз сан!");
    }
}

function cos() {
    try {
        outputScreen.value = Math.cos(toRadians(parseFloat(outputScreen.value)));
    } catch (err) {
        alert("Жарамсыз сан!");
    }
}

function tan() {
    try {
        outputScreen.value = Math.tan(toRadians(parseFloat(outputScreen.value)));
    } catch (err) {
        alert("Жарамсыз сан!");
    }
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function log() {
    try {
        outputScreen.value = Math.log10(parseFloat(outputScreen.value));
    } catch (err) {
        alert("Жарамсыз сан!");
    }
}

function power() {
    try {
        let base = parseFloat(outputScreen.value);
        let exponent = parseFloat(prompt("Дәреже мәнін енгізіңіз:", "2"));
        if (!isNaN(base) && !isNaN(exponent)) {
            outputScreen.value = Math.pow(base, exponent);
        } else {
            alert("Жарамсыз сандар!");
        }
    } catch (err) {
        alert("Қате орын алды!");
    }
}

function pi() {
    outputScreen.value += Math.PI.toFixed(8);
}

document.addEventListener("keydown", function (event) {
    const key = event.key; 

    if (!isNaN(key) || "+-*/.%()".includes(key)) {
        display(key);
    }

    if (key === "Enter") {
        Calculate();
    }

    if (key === "Backspace") {
        del();
    }

    if (key === "Escape") {
        Clear();
    }
});