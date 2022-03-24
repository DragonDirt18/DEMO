var a = null;
var b = null;
var o = null;
function lam_lai() {
  a = null;
  b = null;
  o = null;
}
function toan_tu() {
  o = null;
}
function toan_hang() {
  if (a == null) {
    a = x;
  } else {
    b = x;
  }
}
function thuc_hien() {
  switch (o) {
    case "+":
      var kq = a + b;
      alert("Kết quả: " + kq);
      break;
    case "-":
      var kq = a - b;
      alert("Kết quả: " + kq);
      break;
    case "*":
      var kq = a * b;
      alert("Kết quả: " + kq);
      break;
    case "/":
      var kq = a / b;
      alert("Kết quả: " + kq);
      break;
    default:
      alert("error!");
      break;
  }
}
