// Function to scroll to an element with unique class name
// className: Class of the element that the scroll will go
// rate: Rate of the scroll at each iteration
function scrollTo(className, rate = 15)
{
	// Get the number of elements that have the same className
	const elements = document.getElementsByClassName(className).length;
	
	// Compare to work only if exist one element with the className
	if(elements === 1)
	{
		// Constants needed for the function and calculations
		const objective = document.getElementsByClassName(className)[0]; // Get the element with the className
		const page = document.documentElement; // Get the document element of the page
		const start = page.scrollTop; // Get the start vertical point of the page
		const end = objective.offsetTop; // Get the start vertical point of the element objective
		const difference = end - start; // Get size difference between the start and end point 
		const sign = Math.sign(difference); // Get the sign of the difference to know the direction that the scroll goes. Positive to bottom, Negative to top

		// Function to move the scroll
		// Position: Position of the scroll that will increase according to the rate
		const moveScroll = (position) =>
		{
			// Gap is the distance that the scroll is acquiring from the start point, at the beginning is 0
			const gap = position - start;

			// Compare that the gap is less than the absolute value of the difference minus the rate, the rate is subtracted so that the last iteration goes through the else and does not exceed the distance
			if (gap < (Math.abs(difference) - rate)) 
			{
				// Update of the position in function to the rate
				position = position + rate;

				page.scrollTop = start + (gap * sign); //Scroll the page adding the grap to the start point and giving direction with the sign.
				return setTimeout(() => { moveScroll(position) }, 1); // Recursiveness of the function every second
			}
			else
			{
				page.scrollTop = end; //Scroll the page to the end point.
				return end; //Return the last value of the recursivity, end of the function
			}
		};

		// Run the function just if the start point is different to the end point
		if(start !== end)
			moveScroll(start);
	}
	else
		// Warning in case the page has more than one element with the className
		console.log('Warning on scrollTo(): Multiple class name "' + className + '" were found');
}