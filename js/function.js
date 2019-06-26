		var prevScrollpos = window.pageYOffset;
		window.onscroll = function() {
		var currentScrollPos = window.pageYOffset;
		  if (prevScrollpos > currentScrollPos) {
		    document.getElementById("topnav").style.top = "-100px";
		    document.getElementById("headmenu").style.display = "block";
		  } else {
		    document.getElementById("topnav").style.top = "0";
		    document.getElementById("headmenu").style.display = "none";
		  }
		  prevScrollpos = currentScrollPos;
		}

		function openNav() {
		  document.getElementById("mySidenav").style.width = "250px";
		}
		function closeNav() {
		  document.getElementById("mySidenav").style.width = "0";
		}