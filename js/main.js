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


function toggleViews() {
    if ($('.outlineView').hasClass('d-none')) {
        $('.outlineView').removeClass('d-none')
    } else {
        $('.outlineView').addClass('d-none')
    }
    if ($('.detailView').hasClass('d-none')) {
        $('.detailView').removeClass('d-none')
    } else {
        $('.detailView').addClass('d-none')
    }
}

function toggleTheme() {
    if ($('#rightPanel').hasClass('bg-dark')) {
        $('#rightPanel').removeClass('bg-dark text-white');
        $('#rightPanel').addClass('text-blue');
        $('#toggleCard').removeClass('text-white bg-dark boder border-1 border-white');
        $('#toggleCard').addClass('text-blue bg-light-gray border-0');
        $('#howToFooter').removeClass('bg-dark border-top border-white border-1');
        $('#howToFooter').addClass('bg-blue');
        $('#scaleable-wrapper').addClass('bg-light-gray text-blue');
        $('#scaleable-wrapper').removeClass('bg-dark text-white border border-1 border-white');
    } else {
        $('#rightPanel').addClass('bg-dark text-white');
        $('#rightPanel').removeClass('text-blue');
        $('#toggleCard').removeClass('text-blue bg-light-gray border-0');
        $('#toggleCard').addClass('text-white bg-dark border border-1 border-white');
        $('#howToFooter').removeClass('bg-blue');
        $('#howToFooter').addClass('bg-dark border-top border-white border-1');
        $('#scaleable-wrapper').removeClass('bg-light-gray text-blue');
        $('#scaleable-wrapper').addClass('bg-dark text-white border border-1 border-white');
    }
}
