$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});

export default modal;
