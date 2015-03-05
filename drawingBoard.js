function drawingBoard(parentDiv, alive){
	
	$(parentDiv).append("<ul></ul><div class='clear'></div>\n");

	for(var i = 1; i<= 290; i++){
		$(parentDiv).find('ul').append("<li id=\"key_"+i+"\"></li>\n");
	}
	$li = $(parentDiv).find('ul li');

	if(alive == undefined || alive == true){
		$li.mouseenter(function(){
			if(!$(this).hasClass('ui-selected') && mousedown){
				$(this).addClass("ui-selected");
			}else if($(this).hasClass('ui-selected') && mousedown){
				$(this).removeClass("ui-selected");
			}
		});
			


		$li.mousedown(function(){
			mousedown = true;
			if(!$(this).hasClass('ui-selected')){
				$(this).addClass("ui-selected");
			}else if($(this).hasClass('ui-selected')){
				$(this).removeClass("ui-selected");
			}
		}).mouseup(function(){
			mousedown = false;
		});
	}else{
		$li.css("cursor", "default");
	}
}
