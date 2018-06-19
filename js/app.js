/*
 * Modules
 */

app = {

	/*
	 * Chargement du DOM
	 */
	init: function() {
		console.info("app.init")

		app.creerHTML()
		$("#cartes div").on("click", app.clic)
	},
	clic: function() {
		console.info("app.clic")

		$(this).removeClass("hide").addClass("visible")
				
		if ( $(".visible").length == 2) {
			
			if ( $(".visible:first").attr("class") == $(".visible:last").attr("class") ) {
				
				$(".visible").animate({
					opacity:0
				},{
					duration: 1000,
					complete: function(){
						$(this).removeClass("visible")
					}
				})						
			} 
			else {
				$("#cartes div").off()
				setTimeout(function(){
					$(".visible").addClass("hide").removeClass("visible")
					$("#cartes div").on("click", app.clic)
				},1000)
			}
		}

	},
	creerHTML: function() {
		console.info("app.creerHTML")

		for (i = 0; i < 28; i++) {
			var tabCouleur = ["carre_a", "carre_a", "carre_b", "carre_c", "carre_d", "carre_e", "carre_f"]
			var couleur = tabCouleur[Math.floor(Math.random() * tabCouleur.length)]

			var cartes = $("#cartes")
			var div = $("<div>")

			div.addClass(couleur+" "+"hide")
			cartes.append(div)
		}

		
	}
}





/*
 * Chargement du DOM
 */
$(function() {
	app.init()
})