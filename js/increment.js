$(document).ready(function(){
  var show = true;
  var countbox = "#stats";
  $(window).on("scroll load resize", function(){
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
          $(".stats-item__count--subscriber").spincrement({
              from:0,
              to:88345609,
              thousandSeparator: '',
              duration: 2000
          });
          $(".stats-item__count--clients").spincrement({
              from:0,
              to:17569,
              thousandSeparator: '',
              duration: 2000
          });
          $(".stats-item__count--like").spincrement({
              from:0,
              to:437647133,
              thousandSeparator: '',
              duration: 2000
          });
          show = false;
      }
  });
});
