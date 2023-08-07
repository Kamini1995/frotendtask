// validation for Radio button

function validateRadio(activatedRadio) {
    var switch1 = document.getElementById("radio1");
    var switch2 = document.getElementById("radio2");
    var switch3 = document.getElementById("radio3");
    var bgcls1 = document.getElementById("sec1");
    var bgcls2 = document.getElementById("sec2");
    var bgcls3 = document.getElementById("sec3");

    if (activatedRadio === switch1 && activatedRadio.checked) {
        switch2.checked = false;
        switch3.checked == false;
        bgcls1.classList.add("active");
        bgcls3.classList.remove("active");
        bgcls2.classList.remove("active");
    } else if (activatedRadio === switch2 && activatedRadio.checked) {
        switch1.checked = false;
        switch3.checked = false;
        bgcls1.classList.remove("active");
        bgcls3.classList.remove("active");
        bgcls2.classList.add("active");
    }else if (activatedRadio === switch3 && activatedRadio.checked) {
        switch1.checked = false;
        switch2.checked = false;
        bgcls3.classList.add("active");
        bgcls1.classList.remove("active");
        bgcls2.classList.remove("active");
    }
    
}

// for select box
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("select-sec");
l = x.length;
for (i = 0; i < l; i++) {
selElmnt = x[i].getElementsByTagName("select")[0];
ll = selElmnt.length;
a = document.createElement("DIV");
a.setAttribute("class", "select-selected");
a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
x[i].appendChild(a);
b = document.createElement("DIV");
b.setAttribute("class", "select-items select-hide");
for (j = 1; j < ll; j++) {
c = document.createElement("DIV");
c.innerHTML = selElmnt.options[j].innerHTML;
c.addEventListener("click", function(e) {
var y, i, k, s, h, sl, yl;
s = this.parentNode.parentNode.getElementsByTagName("select")[0];
sl = s.length;
h = this.parentNode.previousSibling;
for (i = 0; i < sl; i++) {
  if (s.options[i].innerHTML == this.innerHTML) {
    s.selectedIndex = i;
    h.innerHTML = this.innerHTML;
    y = this.parentNode.getElementsByClassName("same-as-selected");
    yl = y.length;
    for (k = 0; k < yl; k++) {
      y[k].removeAttribute("class");
    }
    this.setAttribute("class", "same-as-selected");
    break;
  }
}
h.click();
});
b.appendChild(c);
}
x[i].appendChild(b);
a.addEventListener("click", function(e) {
e.stopPropagation();
closeAllSelect(this);
this.nextSibling.classList.toggle("select-hide");
this.classList.toggle("select-arrow-active");
});
}
function closeAllSelect(elmnt) {
var x, y, i, xl, yl, arrNo = [];
x = document.getElementsByClassName("select-items");
y = document.getElementsByClassName("select-selected");
xl = x.length;
yl = y.length;
for (i = 0; i < yl; i++) {
if (elmnt == y[i]) {
arrNo.push(i)
} else {
y[i].classList.remove("select-arrow-active");
}
}
for (i = 0; i < xl; i++) {
if (arrNo.indexOf(i)) {
x[i].classList.add("select-hide");
}
}
}
document.addEventListener("click", closeAllSelect);