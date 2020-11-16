
let sortBtn = document.querySelector(".filter-menu").children;
let sortItem = document.querySelector(".filter-item").children;
let limit = 3;



// Sticky Navbar
window.addEventListener("scroll", function () {
  document
    .getElementById("navs")
    .classList.toggle("sticky", window.scrollY > 10);
});



// Portfolio Gallery Filter

for (let i = 0; i < sortBtn.length; i++) {
  sortBtn[i].addEventListener("click", function () {
    for (let j = 0; j < sortBtn.length; j++) {
      sortBtn[j].classList.remove("current");
    }


    this.classList.add("current");

    let targetData = this.getAttribute("data-target");

    for (let k = 0; k < sortItem.length; k++) {
      sortItem[k].classList.remove("active");
      sortItem[k].classList.add("delete");

      if (
        sortItem[k].getAttribute("data-item") == targetData ||
        targetData == "all"
      ) {
        
        sortItem[k].classList.remove("delete");
        sortItem[k].classList.add("active");
      }
      $(".loadMore li").slice(0, 9).show();
      if (sortItem[k].getAttribute("data-item") == "all") {
        $("#load_more").display = 'none';
      }
    }
  });
}

// Load More and Load Less buttons

$(document).ready(function (e) {

  $(".loadMore li").slice(0, limit).show();
  $(document).on("click", "#load_more", function (e) {
    limit += 3;
    e.preventDefault();
    $(".loadMore li").slice(0, limit).show();

    if (limit / 3 === 3) {
      $("#load_more").text("Less");
    } else if (limit / 3 != 3) {
      $("#load_more").text("Load More");
    }
    if (limit == 12) {
      limit = 3;
      e.preventDefault();

      $(".loadMore li").slice(3, 9).hide();
    }
  });
});


