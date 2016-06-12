$(function() {
  console.log("Hi there pal");
  var opacity = 0;
  function appear(jElement){
    if (opacity < 1)
    {
      opacity += .01;
      jElement.css("opacity", opacity);
      setTimeout(appear, 100, jElement);
    }
  }
  appear($("body"));
});
