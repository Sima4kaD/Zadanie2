 
	function getAddr(){ // server-side script emulator

			var mylink =  window.location.search.substring(1) ;
			var content = document.getElementById("content") ;
			 //alert(mylink);
			if(mylink == "browsecategories" || mylink == ""){
				content.innerHTML = document.getElementById("browsecategories").innerHTML; 
				document.getElementById("banner").style.display = "block";
			}
			 
			if(mylink == "howitworks" || mylink == "browsecontest" || mylink == "pricingplan" || mylink == "aboutus"){
				content.innerHTML = document.getElementById(mylink).innerHTML;
			}
			 
			srcElem(mylink);
		}

	function srcElem(mylink){ // top-menu link coloring

			elems = document.getElementById("top-menu").getElementsByTagName("A"); 
			for(i=0; i<elems.length; i++){ 
				if (elems[i].href.indexOf(mylink) !== -1) {
					elems[i].parentNode.className = "active";
					return;
	 			}
				
			} 
		}
		

 