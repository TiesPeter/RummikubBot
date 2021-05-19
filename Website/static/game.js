var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {

      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })

function copyToClipboard(textToCopy) {
  // navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
      // navigator clipboard api method'
      return navigator.clipboard.writeText(textToCopy);
  } else {
      // text area method
      let textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      // make the textarea out of viewport
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res, rej) => {
          // here the magic happens
          document.execCommand('copy') ? res() : rej();
          textArea.remove();
      });
  }
}


let copy = window.location.href;

document.querySelector(".copyurl").addEventListener("click", function() { 
  copyToClipboard(copy);
  document.querySelector(".copyurl").classList.add("clicked");
  document.querySelector(".copyimg").classList.add("copyimg2");
})

function lesswidth() {
    document.querySelectorAll("table").forEach(element =>
      element.classList.toggle("tablewidth")
    );
    document.body.style.background = "#f8f9fa";
    // after some time

    setTimeout(function () {
      document.querySelectorAll("table").forEach(element =>
        element.classList.toggle("tablewidth")
      );
      document.body.style.background = "#fff";
    }, 1000);
}

document.querySelector(".download").addEventListener("click", function() { 
  // copyToClipboard(copy);
  document.querySelector(".download").classList.add("clicked");
  document.querySelector(".downloadimg").classList.add("copyimg2");

  const invoice = document.querySelector(".calendarmain");
  console.log(invoice);
  console.log(window);
  lesswidth();
  var opt = {
      margin: 0.5,
      filename: 'calendar.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 1, backgroundColor: "#ff00ff" },
      pagebreak: { before: ".beforeclass" },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  };
  html2pdf().from(invoice).set(opt).save();
            
})
