/**
 * http://usejsdoc.org/
 */

function cookanddeliver(callback)
{
	setTimeout(callback,5000);
}
function order(orderno)
{
	console.log("order no is ",orderno);
	cookanddeliver(function (){
		console.log("item deliver",orderno);
	});
	
}

order(1);
order(2);
order(3);
order(4);
