//
//	** IMMIGRANT ANCESTORS SPA **
//
//	This single page app displays information about Bruce and Paula's immigrant ancestors. 
//	The API call in this file retrieves the data, which is stored in two tables in a 
//	MySQL database. Those tables can be edited here:
//		https://brucewatkins.org/ancestry/data.php#
//
//	Libraries used:
//	 o The bootstrap minified css (imported below).
//	 o A Svelte library, sveltestrap, that reproduces bootstrap behavior. 
//	   To install sveltestrap, this command was executed in the local project directory:
//		npm install --save sveltestrap svelte

//
//	To Consider: Move the API fetch out of this file and into the
//	App component, displaying a "loading" message until the promise
//	resolves.

// Import Bootstrap CSS library and the App component.
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.svelte';

// The theImmigrants object will contain data for each individual.
export let theImmigrants = {};
// export let thePopImages  = {};

// Get the immigrant data from the database via our PHP routine. This is
// done using an async API fetch. We wait until the promise has resolved
// before creating the App. 
const URL = "https://brucewatkins.org/apis/immFamilies.php";
fetch(URL)
    .then((response) => response.json())
	.then((immigrants) => 
	{
		// thePopImages  = immigrants[0];
		theImmigrants = immigrants[1];
		const app = new App({
			target: document.body,
			props: {
				theImmigrants: theImmigrants
			}
		});
	})


export default app;