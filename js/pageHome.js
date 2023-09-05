// code input date jquery
document.addEventListener("DOMContentLoaded", function (e) {
  $('[name="date"]')
    .datepicker({
      format: "dd/mm/yyyy",
    })
    .on("changeDate", function (e) {
      // do somwthing here
    });
});
