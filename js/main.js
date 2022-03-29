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
        $('#toggleCard').removeClass('text-dark');
        $('#toggleCard').addClass('text-blue');
        $('#howToFooter').removeClass('bg-dark border-top border-white border-1');
        $('#howToFooter').addClass('bg-blue');
    } else {
        $('#rightPanel').addClass('bg-dark text-white');
        $('#rightPanel').removeClass('text-blue');
        $('#toggleCard').removeClass('text-blue');
        $('#toggleCard').addClass('text-dark');
        $('#howToFooter').removeClass('bg-blue');
        $('#howToFooter').addClass('bg-dark border-top border-white border-1');
    }
}
