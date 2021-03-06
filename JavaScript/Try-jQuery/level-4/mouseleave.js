// HTML

<div id="tour">
  <h2>Paris, France Tour</h2>
  <p>$2,499 for 7 Nights</p>
  <button>See photos from our last tour</button>
  <ul class="photos">
    <li>
      <img src="/assets/photos/paris1.jpg">
      <span>Arc de Triomphe</span>
    </li>
    <li>
      <img src="/assets/photos/paris2.jpg">
      <span>The Eiffel Tower</span>
    </li>
    <li>
      <img src="/assets/photos/paris3.jpg">
      <span>Notre Dame de Paris</span>
    </li>
  </ul>
</div>

// application.js
// Before

$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $(".photos").slideToggle();
  });
  $(".photos").on("mouseenter", "li", function() {
    $(this).find("span").slideToggle();
  });
});

// After

$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $(".photos").slideToggle();
  });
  $(".photos").on("mouseenter", "li", function() {
    $(this).find("span").slideToggle();
  });
  $(".photos").on("mouseleave", "li", function(){
    $(this).closest("li").find("span").slideToggle();
  });
});
