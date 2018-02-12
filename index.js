let giphy_api = "https://api.giphy.com/v1/gifs/search";

  $("form").on("submit", function(e) {
    e.preventDefault();
    $("form [name='offset']").val(0);
    getAndRenderGifs();
  });

function getAndRenderGifs() {
  $.ajax({
    method: "GET",
    url: giphy_api,
    data: $("form").serialize(),
    success: onSuccess,

  });
}

function onSuccess(json) {
  if (json.pagination.offset === 0) {
    $(".gif-img").remove();
  }
  json.data.forEach(function(v,i){
    $(".gif-gallery").append($("<img class='img-responsive img-thumbnail gif-img' src="+v.images.fixed_height.url+">"));
  });
}
