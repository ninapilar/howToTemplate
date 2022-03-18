// const form = document.getElementById("my-form");
//
// async function handleSubmit(event) {
//     event.preventDefault();
//     var status = document.getElementById("my-form-status");
//     var data = new FormData(event.target);
//     fetch(event.target.action, {
//         method: form.method,
//         body: data,
//         headers: {
//             'Accept': 'application/json'
//         }
//     }).then(response => {
//         if (response.ok) {
//             status.innerHTML = "Thanks for your submission!";
//             form.reset()
//         } else {
//             response.json().then(data => {
//                 if (Object.hasOwn(data, 'errors')) {
//                     status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
//                 } else {
//                     status.innerHTML = "Oops! There was a problem submitting your form"
//                 }
//             })
//         }
//     }).catch(error => {
//         status.innerHTML = "Oops! There was a problem submitting your form"
//     });
// }
//
// form.addEventListener("submit", handleSubmit)
//
//
// const form2 = document.getElementById("my-contact-form");
//
// async function handleSubmit2(event) {
//     event.preventDefault();
//     var status = document.getElementById("my-contact-form-status");
//     var data = new FormData(event.target);
//     fetch(event.target.action, {
//         method: form2.method,
//         body: data,
//         headers: {
//             'Accept': 'application/json'
//         }
//     }).then(response => {
//         if (response.ok) {
//             status.innerHTML = "Thanks for your submission!";
//             form2.reset()
//         } else {
//             response.json().then(data => {
//                 if (Object.hasOwn(data, 'errors')) {
//                     status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
//                 } else {
//                     status.innerHTML = "Oops! There was a problem submitting your form"
//                 }
//             })
//         }
//     }).catch(error => {
//         status.innerHTML = "Oops! There was a problem submitting your form"
//     });
// }
//
// form2.addEventListener("submit", handleSubmit2);
//
//
// const form_2 = document.getElementById('new-form')
//
// async function handleSubmit_2(event) {
//     event.preventDefault();
//     const status = document.getElementById('status-id');
//     const data = new FormData(event.target);
//     fetch(event.target.action, {
//         method: form_2.method,
//       body: data,
//       headers: {
//           'Accept': 'application/json'
//       }
//     }).then(response => {
//       if (response.ok) {
//         status.innerHTML = "Thanks for your submission";
//         form_2.reset();
//       } else {
//         response.json().then(data => {
//           if (Object.hasOwn(data, 'errors')) {
//             status.innerHTML = data['errors'].map(error => error["message"]).join(", ")
//           } else {
//             status.innerHTML = "Oops! There was a problem submitting your form"
//           }
//         })
//       }
//     })
// }

$( document ).ready(function() {
   $("#leftPanel").css("backgroundColor", "#717275");
});


$('#carouselExampleIndicators').on('slide.bs.carousel', function (e) {
  if (e.to === 0){
      $("#leftPanel").css("backgroundColor", "#4d00ff");
  } else if (e.to === 1) {
      $("#leftPanel").css("backgroundColor", "#a5a7aa");
  } else if (e.to === 2) {
      $("#leftPanel").css("backgroundColor", "#d1d2d4");
  } else if (e.to === 3) {
      $("#leftPanel").css("backgroundColor", "#4d00ff");
  } else if (e.to === 4) {
      $("#leftPanel").css("backgroundColor", "#a5a7aa");
  }
  else if (e.to === 5) {
      $("#leftPanel").css("backgroundColor", "#4d00ff");
  }
  else if (e.to === 6) {
      $("#leftPanel").css("backgroundColor", "#d1d2d4");
  }
});


$("pre code").html(function(index, html) {
    return html.trim().replace(/^(.*)$/mg, "<span class=\"line\">$1</span>");
});


var $el = $("#block");
var elHeight = $el.outerHeight();
var elWidth = $el.outerWidth();

var $wrapper = $("#scaleable-wrapper");

$wrapper.resizable({
  resize: doResize
});

function doResize(event, ui) {

  var scale, origin;

  scale = Math.min(
    ui.size.width / elWidth,
    ui.size.height / elHeight
  );

  $el.css({
    transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
  });

}

var starterData = {
  size: {
    width: $wrapper.width(),
    height: $wrapper.height()
  }
}
doResize(null, starterData);
