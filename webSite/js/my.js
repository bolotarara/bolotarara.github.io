window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    document.getElementById("Bar").style.height = "6px";
    // document.getElementById("navv").style.height = "70px";
    // document.getElementById("navv").style.backgroundColor="black";
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    if(document.body.scrollTop > 110 || document.documentElement.scrollTop > 110){
    // document.getElementsByClassName("navbar").style.height = "70px";
    // document.getElementsByClassName("navbar").style.background-color = "orange";
      document.getElementById("logoimg").style.height = "80px";
      document.getElementById("navv").style.height = "70px";
      document.getElementById("navv").style.backgroundColor=" rgb(144, 143, 228)";
      // document.getElementById("navbarNav").style.backgroundColor="black";
      if(document.querySelector(".navbar .show"))
        document.querySelector(".navbar .show").style.backgroundColor="rgb(144, 143, 228)";
    
    } 

  }
  
  else {
    document.getElementById("Bar").style.height = "0px";
    document.getElementById("navv").style.height = "120px";
    document.getElementById("logoimg").style.height = "120px";
    document.getElementById("navv").style.backgroundColor="transparent";
    // document.getElementById("navbarNav").style.backgroundColor="transparent";
    if(document.querySelector(".navbar .show"))
      document.querySelector(".navbar .show").style.backgroundColor="transparent";
  }

}

// type writer
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);


    };
$('#readMore').click(function(){
  alert('You Seriously think I had that much time???');
});
