<!-- 
    APP COMPONENT: This is the main component for the Immigrant Ancestors app.
 -->
<script>

    // Import components.
    import Navbar    from "./Navbar.svelte";
    import Home      from './Home.svelte';
    import Biography from './Biography.svelte';
    import About     from './About.svelte';
    import BadView   from './BadView.svelte';
    import Modal     from './Modal.svelte';
    import URLparams from './URLparams.svelte';

    // Declare variables to be passed to components.
    export let theImmigrants;   // This is defined in main.js
    export let thePopImages;    // This is defined in main.js
    export let person;          // This is passed to the Biography component

    let domView;
    person = "unknown";
    let domValue = [];

    //  When the component loads, prep to display the home page.
	resetDisplay();

    // Check the url. If it requests a biography, setup to display
    // that view instead of displaying the home page.
    let theSearchParams = new URLSearchParams(window.location.search);
    let whichBio = theSearchParams.get("bio");
    if (whichBio) {
        // ... change things like pkirsch into things like 2x0 ...
        let peopleKeys = {
            lballard:    "0x0",
            mdballard:   "0x1",
            jjbohn:      "1x0",
            mvbohn:      "1x1",
            pkirsch:     "2x0",
            kkirsch:     "2x1",
            wwatkin:     "3x0",
            mwarburton:  "3x1",
            rwatkins:    "3x2",
            sginsberg:   "4x0",
            rwilensky:   "4x1",
            jsolow:      "5x0",
            sborenstein: "6x0",
            rgottlieb:   "6x1"
        };
        person = peopleKeys[whichBio];
        domView = 'bio';
    }

	function resetDisplay () {
        domView = 'body';
	}

    //  Handle click events that bubble up from inner components.
	function handleClick(event) {
		let whatHappened = event.detail.what;
		let whatValue    = event.detail.value;

		if (whatHappened=='switchView') {
			domView = whatValue;
		}

		else if (whatHappened=='setValue') {
			let whatName = event.detail.name;
            domValue[whatName] = whatValue;
            console.log('whatName', whatName);
		}

		else if (whatHappened=='reset') {
			resetDisplay();
		}

		else {
			alert('In function handleClick in App.svelte: incorrect whatHappened value [' + 
			whatHappened + 
			'] when handling a custom mouseclicked event.')
		}
    }
    
    //  Handle a bubbled-up event that requested display of an immigrant's biography.
    function handleBioRequest(event) {
        person = event.detail;
        domView = "bio";
    }

</script>

<!-- 
    Display the navigation bar, and then either the home page that
    shows all the immigrants, or display the biography of one immigrant.
 -->

<Navbar 
    on:mouseclicked={handleClick} 
/>

{#if domView=='body'}
<Home
    {theImmigrants} 
    on:mouseclicked={handleClick} 
    on:biorequested={handleBioRequest}
/>

{:else if domView=='bio'}
<Biography
    {person} 
    {theImmigrants} 
    {thePopImages}
/>
  
{:else if domView=='about'}
<About
/>
  
{:else if domView=='modal'}
<Modal
    {thePopImages}
/>
  
{:else if domView=='urlparams'}
<URLparams
    
/>
  
{:else}
<BadView
    {domView} 
    on:mouseclicked={handleClick} 
/>

{/if}