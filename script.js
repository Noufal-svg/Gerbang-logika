let moon = document.getElementById("moon")
let text = document.getElementById("text")
let train = document.getElementById("train");
let desert_moon = document.getElementById("desert_moon");
let man = document.getElementById("man");

window.addEventListener("scroll",()=>{
    let value = window.scrollY;
    moon.style.top = value * 0.9 + "px";
    text.style.top = 90 + value* -0.2 + '%';
    train.style.left = value*1.5+'px';
    desert_moon.style.top = value * .3 + "px";
    man.style.left = value * 0.4+ 'px';
})


function validateInputA() {
    var inputA = document.getElementById("inputA");
    var validationMessage = document.getElementById("validationMessage");

    if (inputA.value < 0 || inputA.value > 1) {
    validationMessage.innerHTML = "Harap masukkan nilai antara 0 dan 1.";
    inputA.setCustomValidity("Invalid input");
    } else {
    validationMessage.innerHTML = "";
    inputA.setCustomValidity("");
    }
}


// FUngsi Operasi dar AND
function performAND() {
    let inputA = document.getElementById('inputA').value === '1';
    let inputB = document.getElementById('inputB').value === '1';
    let result = inputA && inputB;

    // menampilkan di display
    document.getElementById('resultAND').innerText = `Fungsi AND Outputnya akan true jika semua input juga true,Hasil dari input diatas: ${result ? 'True' : 'False'}`;
}

// Fungi Operasi dari OR
function performOR() {
    let inputA = document.getElementById('inputA').value === '1';
    let inputB = document.getElementById('inputB').value === '1';
    let result = inputA || inputB;

    // menampilakn di display
    document.getElementById('resultOR').innerText = `Fungsi OR Outputnya akan true jika setidaknya ada salah satu yang true,Hasil dari input diatas: ${result ? 'True' : 'False'}`;
}

// Fungi Operasi dari NOT
function performNOT() {
    let inputA = document.getElementById('inputA').value === '1';
    let result = !inputA;

    // menampilakn di display
    document.getElementById('resultNOT').innerText = `Fungsi NOT Outputnya kebalikan dari inputnya,Hasil dari input diatas: ${result ? 'True' : 'False'}`;
}

// Fungi Operasi dari XOR
function performXOR() {
    let inputA = document.getElementById('inputA').value === '1';
    let inputB = document.getElementById('inputB').value === '1';
    let result = (inputA || inputB) && !(inputA && inputB);

    // menampilakn di display
    document.getElementById('resultXOR').innerText = `Fungsi XOR Outputnya akan true jika input true nya ganjil,Hasil dari input diatas: ${result ? 'True' : 'False'}`;
}

// Fungi Operasi dari XNOR
function performXNOR() {
    let inputA = document.getElementById('inputA').value === '1';
    let inputB = document.getElementById('inputB').value === '1';
    let result = !(inputA || inputB) || (inputA && inputB);

     // menampilakn di display
    document.getElementById('resultXNOR').innerText = `Fungsi XNOR Outputnya akan true jika input true nya genap,Hasil dari input diatas: ${result ? 'True' : 'False'}`;
}

// Fungi Operasi dari NOR
function performNOR() {
    let inputA = document.getElementById('inputA').value === '1';
    let inputB = document.getElementById('inputB').value === '1';
    let result = !(inputA || inputB);

     // menampilakn di display
    document.getElementById('resultNOR').innerText = `Fungsi NOR Outputnya true jika semua input false atau kebalikan dari OR,Hasil dari input diatas : ${result ? 'True' : 'False'}`;
}

// Fungi Operasi dari NAND
function performNAND() {
    let inputA = document.getElementById('inputA').value === '1';
    let inputB = document.getElementById('inputB').value === '1';
    let result = !(inputA && inputB);

     // menampilakn di display
    document.getElementById('resultNAND').innerText = `Fungsi NAND Outputnya false jika semua input true atau kebalikan dari AND,Hasil dari input diatas: ${result ? 'True' : 'False'}`;
}
