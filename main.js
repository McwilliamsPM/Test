


$(document).ready(function(){
  {
    /* Drop down toggle */
    function menu(){
      $('.m-open').click(function(){
    $('nav').slideDown()
    $('.m-open').hide()
    $('.m-close').show()
  })
  $('.m-close').click(function(){
    $('nav').slideUp();
    $('.m-open').show(0000, function(){
      $('.m-close').hide()
    })
  })
  
  if(window.innerWidth <= 758){
    $('a').click(function(){
      $('nav').fadeOut()
      $('.m-close').hide(0000, function(){
        $('.m-open').show(0000)
      })
    }) 
  }
  else{
    $('a').click(function(){
      $('nav').show()
    })
  }
  }
  menu();
/*   function bannerAnimate(){
    if(window.innerWidth > 1200){
        setTimeout(function(){
      $('.shape:nth-child(1)').animate({left: '92.5%'},300, function(){
        $('.shape:nth-child(2)').animate({left: '85.5%'}, 350, function(){
          $('.shape:nth-child(4)').animate({left: '78.4%'}, 400,function(){
            $('.shape:nth-child(5)').animate({left:'71.5%'},450)
      })
    })
  })
  $('.shape:nth-child(6)').animate({right: '25%'}, 450, function(){
    $('.shape:nth-child(7)').animate({right: '18%'}, 400, function(){
      $('.shape:nth-child(8)').animate({right: '39%'}, 350, function(){
        $('.shape:nth-child(9)').animate({right: '46%'}, 300)
      })
    })
  })
  }, 0000)
    }
    else {

    }
  }
bannerAnimate() */


    }
})