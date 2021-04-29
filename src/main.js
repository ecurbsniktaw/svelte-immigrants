import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.svelte';

// Get the family data from the database via our PHP routine.
const URL = "https://brucewatkins.org/apis/immFamilies.php";

export let theImmigrants = {};

fetch(URL)
    .then((response) => response.json())
	.then((immigrants) => 
	{
		theImmigrants = immigrants;
		const app = new App({
			target: document.body,
			props: {
				theImmigrants: theImmigrants
			}
		});
	})

import 'bootstrap/dist/css/bootstrap.min.css';

	export default app;