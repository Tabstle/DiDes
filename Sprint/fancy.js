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
        const angleX = (targetY - y) / 40;
	    const angleY = (targetX - x) / -80;
        let offsetX ,offsetY;
        if (el.classList.contains("elem1")) {
            offsetX = -15;
            offsetY = -10;
            displaceX = 4;
            displaceY = 9;
        }
        else if (el.classList.contains("elem2")) {
            offsetX = 20;
            offsetY = -30;
            displaceX = -4;
            displaceY = 2;
        }
        else if (el.classList.contains("elem3")) {
            offsetX = -20;
            offsetY = 20;
            displaceX = 0;
            displaceY = 10;
        }
        else if (el.classList.contains("elem4")) {
            offsetX = 25;
            offsetY = 30;
            displaceX = -8;
            displaceY = 7;
        }
	    el.style.transform = 'translate('+ (displaceX) + 'vw,'+ (displaceY) + 'vw) rotateX('+ (offsetX + angleX) + 'deg) rotateY('+ (offsetY + angleY) + 'deg)';
        console.log('rotateX('+ (offsetX + angleX) + 'deg) rotateY('+ (offsetY + angleY) + 'deg) translate('+ (displaceX) + '%,'+ (displaceY) + '%)')
        //console.log(`rotateX(${angleX}deg) rotateY(${angleY}deg)`)
    })
	

	

});