function showCode() {
  var code = "code2.png";
  var img = document.getElementById('qr')
  img.src = code.replace('90x90', '225x225');
  img.style.display = "block";



  document.getElementById('codeButton')
          .style.display = "none";
}
