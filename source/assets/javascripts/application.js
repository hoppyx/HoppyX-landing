$(".reveal-button").click(function(e) {
    e.preventDefault();
    if ( $(this).nextAll('.reveal').length ) {
      $(this).nextAll('.reveal').first().toggle();
      $(this).nextAll('.reveal').first().toggleClass('vhs-fade');
      $(this).toggleClass('active');
    } else {
        console.log('length not');
        $(this).parent().nextAll('.reveal').first().toggle();
        $(this).parent().nextAll('.reveal').first().toggleClass('vhs-fade');
        $(this).toggleClass('active');
    }
});

$(function() {
  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});
