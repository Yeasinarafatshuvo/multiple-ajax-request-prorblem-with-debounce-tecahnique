function debounce(fn, delay) {
  let timeoutId;
  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn();
    }, delay);
  };
}

$("#barcodeValue").keyup(
  debounce(function () {
    let result = $("#barcodeValue").val();
    console.log(result);
    $("#barcodeValue").val("");
    $.ajax({
      type: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
      dataType: "JSON",
      success: function (response) {
        response.forEach((element) => {
          console.log(element.title);
        });
      },
    });
  }, 200)
);
