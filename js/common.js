$( document ).ready(function() {
    

	$('.hamburger').click(function(){
		$('body').toggleClass('nav-show')
	})


});

///////////////

$( document ).ready(function() {
    

	$('.toogle').click(function(){
		$('main').toggleClass('dark-mode')
	})


});





// var que = document.querySelectorAll(".que"); 
// var faqs = document.querySelectorAll(".anw"); 


// document.querySelector(".que").addEventListener("click",()=>{
// 	document.querySelector(".anw").classList.toggle("auto");
// 	document.querySelector(".plus").classList.toggle("rotate");
// 	 });

// que.a("click",()=>{
// 	faqs.classList.toggle("height");
// })


const faqs = document.querySelectorAll(".accordion-item"); 

faqs.forEach( (faq) => {
  faq.addEventListener("click",() =>{
  faq.classList.toggle("shown");
  })
});
