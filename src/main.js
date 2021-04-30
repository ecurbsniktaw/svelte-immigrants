//
//	Immigrant Ancestors
//	-------------------
//	This SPA consolidates information about Bruce and Paula's immigrant ancestors.
//	An API call in this file retrieves the data, which is stored in a MySQL database.
//	[[ INFO ABOUT EDITING THE DATA ]]
//
//	Libraries used:
//	 o The bootstrap css (imported in this file).
//	 o A Svelte bootstrap library. [[ LINK TO REPO, WHERE IMPORTED ]]
//	[[ MARKDOWN LIB ]]
//

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


export default app;