window.onload = function () {
    var qiehuan1 = document.getElementById("qiehuan1");
    var qiehuan2 = document.getElementById("qiehuan2");
    var qiehuan3 = document.getElementById("qiehuan3");
    var qiehuan4 = document.getElementById("qiehuan4");
    var zhu = document.getElementById("zhu");
    var zhu1 = document.getElementById("zhu1");
    var zhu2 = document.getElementById("zhu2");
    var zhu3 = document.getElementById("zhu3");
    var zhu4 = document.getElementById("zhu4");
    var zhu5 = document.getElementById("zhu5");
    var baliu = document.getElementById("baliu");
    var x = document.getElementById("x");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var txt = document.getElementById("txt");
    var txt2 = document.getElementById("txt2");
    var txt3 = document.getElementById("txt3");
    var txt4 = document.getElementById("txt4");


    qiehuan1.onclick = function () {
        zhu1.classList.add("hidden");
        zhu2.classList.remove("hidden");
    }
    qiehuan2.onclick = function () {
        zhu2.classList.add("hidden");
        zhu1.classList.remove("hidden");

    }
    qiehuan3.onclick = function () {
        zhu.classList.remove("hidden");
        zhu1.classList.add("hidden");
        zhu2.classList.add("hidden");
    }
    qiehuan4.onclick = function () {
        zhu.classList.add("hidden");
        zhu1.classList.remove("hidden");
    }
    baliu.onclick = function () {
        zhu3.classList.remove("hidden");
        zhu4.classList.add("hidden");
        zhu5.classList.add("hidden");
    }
    x.onclick = function () {
        zhu3.classList.add("hidden");
        zhu4.classList.remove("hidden");
        zhu5.classList.remove("hidden");
    }
    var a = 0;
    var b = 0;
    txt.oninput = function () {
        a = this.value.length;
    }
    txt2.oninput = function () {
        b = this.value.length;
        if (a != 0 && b != 0) {
            btn1.disabled = false;
            btn1.classList.add("active");
        }else{
            btn1.disabled = true;
            btn1.classList.remove("active");
        }
    }
    var c = 0;
    var d = 0;
    txt3.oninput = function () {
        c = this.value.length;
    }
    txt4.oninput = function () {
        d = this.value.length;
        if (c != 0 && d != 0) {
            btn2.disabled = false;
            btn2.classList.add("active");
        }else{
            btn2.disabled = true;
            btn2.classList.remove("active");
        }
    }
}