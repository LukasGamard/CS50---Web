$(document).ready(function () {
   $(".drop-title").click(function () {
      $("#" + this.id + "-content").toggle(700);
   });
});