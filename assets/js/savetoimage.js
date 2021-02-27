const capture = () => {
  const body = document.querySelector('#capture');
  body.id = 'capture';
  var options = {
    scrollX: 0,
    scrollY: -window.scrollY
	}
  
  html2canvas(document.querySelector("#capture"),options).then(canvas => {
	document.body.appendChild(canvas);
  }).then(() => {
	var canvas = document.querySelector('canvas');
	canvas.style.display = 'none';
	var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
	var a = document.createElement("a");
	a.setAttribute('download', 'sisa umur saya wkwk.png');
	a.setAttribute('href', image);
	a.click();
  });
};

const btn = document.getElementById('btnSave');
btn.addEventListener('click', capture)
