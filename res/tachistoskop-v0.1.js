/* v0.1 for (09 October 2020 note added:) */

// timer
var timer1, timer2, timer3;
/* (09 October 2020 note added:) */
/* default viewing time is supposed to be 25ms
   please be aware that this set time varies on business of the os!
   cf. https://stackoverflow.com/questions/21097421/what-is-the-reason-javascript-settimeout-is-so-inaccurate
   */
var shutterspeed = 25;

$(".va-button-show-image").on("click", function() {
  shutterspeed = $(".va-input-shutterspeed").val();

  $(".va-img-holder__shutter").css("background-image", "none");
  timer1 = setTimeout(function() {
    $(".va-img-holder__shutter").hide();
    timer2 = setTimeout(function() {
      $(".va-img-holder__shutter").show();
      timer3 = setTimeout(function() {
        $(".va-img-holder__shutter").css("backgroundImage", "url(res/kreis400px.png)");
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      }, 2000);
    }, shutterspeed);
  }, 4000);
});

$(".va-button-reveal-image").on("click", function() {
  $(".va-img-holder__shutter").toggle();
});

// file input
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $(".va-img-holder__image").attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

$(".va-fileinput").change(function() {
  readURL(this);
});
