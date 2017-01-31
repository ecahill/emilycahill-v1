 var step=0
    function slideit(){
      document.getElementById('cover-photo').src = slides[step].src
      if(step<2)
        step++
      else
        step=0
        setTimeout("slideit()",4000)
    }
    slideit()
