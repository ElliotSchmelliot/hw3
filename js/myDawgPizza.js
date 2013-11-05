$(function() {
	var containerMeat = $("#template-meat-pie").parent();
	var containerVeg = $("#template-veg-pie").parent();
	var instance;
	
	$.each(com.dawgpizza.menu.pizzas, function() {
		if (!this.vegetarian) {
			instance = $("#template-meat-pie").clone();
			appendPizza(this, containerMeat, instance);
		} else {
			instance = $("#template-veg-pie").clone();
			appendPizza(this, containerVeg, instance);
		}
	});

	function appendPizza(thisTemp, container, instance) {
		instance.find("h4").html(thisTemp.name);
		instance.find("div").html(thisTemp.description + " <span></span>");
		var price = "$" + thisTemp.prices[0];
		for (var i = 1; i < thisTemp.prices.length; i++) {
			price += "/$" + thisTemp.prices[i];
		}
		instance.find("span").html(price);
		instance.removeClass("js-template");
		container.append(instance);
	}

	//var containerDrinks = $("");
});