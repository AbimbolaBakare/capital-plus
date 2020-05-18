// processForm: function() {
      
//     alert('Processing!');
//   }
// },

// form @submit.prevent="processForm" >



// COUNTER
var a = 0;
$(window).scroll(function() {

  var oTop = $('.counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 4000,
          easing: 'swing',
          step: function() {
            $this.text(commaSeparateNumber(Math.floor(this.countNum)));
          },
          complete: function() {
            $this.text(commaSeparateNumber(this.countNum));
            //alert('finished');
          }
        });
    });
    a = 1;
  }
});

function commaSeparateNumber(val) {
  while (/(\d+)(\d{3})/.test(val.toString())) {
    val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  }
  return val;
}

// COUNTER
