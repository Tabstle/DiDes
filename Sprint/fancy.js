document.addEventListener('mousemove', function(e) {
	const x = e.pageX;
	const y = e.pageY;
	
	const target = document.querySelectorAll('.move');

    
    target.forEach(el => {
        const targetCoords = el.getBoundingClientRect();
        //console.log(targetCoords)
        	
	// Get center of page
	    const targetX = targetCoords.left + (el.offsetWidth / 2);
	    const targetY = targetCoords.top + (el.offsetHeight / 2);
        const angleX = (targetY - y) / 20;
	    const angleY = (targetX - x) / -40;
        let offsetX ,offsetY;
        if (el.classList.contains("elem1")) {
            offsetX = 30;
            offsetY = -5;
        }
        else if (el.classList.contains("elem2")) {
            offsetX = 40;
            offsetY = -45;
        }
        else if (el.classList.contains("elem3")) {
            offsetX = -10;
            offsetY = 20;
        }
        else if (el.classList.contains("elem4")) {
            offsetX = 40;
            offsetY = 10;
        }
	    el.style.transform = 'rotateX('+ (offsetX + angleX) + 'deg) rotateY('+ (offsetY + angleY) + 'deg)';
        console.log('rotateX('+ (offsetX + angleX) + 'deg) rotateY('+ (offsetY + angleY) + 'deg)')
        //console.log(`rotateX(${angleX}deg) rotateY(${angleY}deg)`)
    })
	

	

});