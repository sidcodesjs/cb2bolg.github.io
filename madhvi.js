function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function myFunction2()
{
var r = document.createRange();
r.selectNode(document.getElementById("code1"));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
// document.write('Copied')
alert("Code Copied to clipboard!")
}