const count_amount = document.querySelector(".count");
const basket_counter = document.querySelector(".basket_counter_hide");

document.querySelector(".btn-menus").addEventListener("click", () => {
  if (amount > 1) {
    count_amount.textContent = amount -= 1;
  }
});

document.querySelector(".btn-plus").addEventListener("click", () => {
  count_amount.textContent = amount += 1;
});

let amount = 1;

document.querySelector(".btn_add_to_card").addEventListener("click", () => {
  // <sup class="basket_counter">1</sup>;
  // basket_counter.

  const basket_counter = document.querySelector(".basket_counter_hide");
  basket_counter.classList.add("basket_counter_see");
  // basket_counter.innerText = amount;
  basket_counter.innerText = 1;
});

$(function () {
  $.fn.scrollToTop = function () {
    $(this).hide().removeAttr("href");

    if ($(window).scrollTop() != "0") {
      $(this).fadeIn("slow");
    }

    var scrollDiv = $(this);
    $(window).scroll(function () {
      if ($(window).scrollTop() == "0") {
        $(scrollDiv).fadeOut("slow");
      } else {
        $(scrollDiv).fadeIn("slow");
      }
    });
    $(this).click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
  };
});
// Вызов
$(function () {
  $("#toTop").scrollToTop();
});

console.log(a);
