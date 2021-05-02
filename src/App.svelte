<!-- 
    APP COMPONENT: This is the main component for the Immigrant Ancestors app.
 -->
<script>
    import Navbar    from "./Navbar.svelte";
    import Home      from './Home.svelte';
    import Biography from './Biography.svelte';
    import About     from './About.svelte';
    import BadView   from './BadView.svelte';

    export let theImmigrants;   // This is defined in main.js
    export let person;          // This is passed to the Biography component

    let domView;
    person = "unknown";
    let domValue = [];

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
    
    //  Handle an event that requested display of an immigrant's biography
    function handleBioRequest(event) {
        person = event.detail;
        domView = "bio";
    }

    //  When the component loads, display the home page.
	resetDisplay();

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
/>
  
{:else if domView=='about'}
<About
/>
  
{:else}
<BadView
    {domView} 
    on:mouseclicked={handleClick} 
/>

{/if}