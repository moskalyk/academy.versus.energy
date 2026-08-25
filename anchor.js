// %!

function hideBlocks() {
        	const els = document.getElementsByClassName("block")
    	
    	Array.from(els).map((el ) => {el.style.display = 'none' }) 
}

var i = 0;
        function move() {
          if (i == 0) {
            i = 1;
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
              if (width >= 100) {
                clearInterval(id);
                i = 0;
              } else {
                width++;
                elem.style.width = width + "%";
              }
            }
          }
        } 
        
function runner() {
	eval(`
	#
	
	^&
	
	(async () => {
		let index = new Index();
		const contents = await index.view();
		const element = document.getElementById('anchor');
		let main = contents;
		element.setHTMLUnsafe(main);
		&)
	})();
`)
};

(async () => {
	await runner();
})()
