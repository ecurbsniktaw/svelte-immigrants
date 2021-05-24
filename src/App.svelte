<script>
    //-------------------------------------------------------------------------------------
    // Import components and declare props we receive and that we pass to other components.
    import Navbar    from './Navbar.svelte';
    import Home      from './Home.svelte';
    import Biography from './Biography.svelte';
    import About     from './About.svelte';
    import BadView   from './BadView.svelte';
    export let theImmigrants;   // This is defined and set in main.js via an API call.
    let person;                 // Will be passed to the Biography component as a prop.

    //-------------------------------------------------------------------------------------
    // Set values that will cause the DOM to update.
    let domView  = 'home';      // Which view to display.
    let domValue = [];          // Values that will update the DOM (not being used at present).

    //-------------------------------------------------------------------------------------
    //  When the App component loads, prep to display the home page.
	resetDisplay();

    //-------------------------------------------------------------------------------------
    // If the url has a ? parameter string, examine it and see if we need to show
    // the about page or a biography page instead of the home page.
    let theSearchParams = new URLSearchParams(window.location.search);
    if (theSearchParams.has('about')) {
        domView = 'about';
    }
    else if (theSearchParams.has('bio')) {
        person  = theSearchParams.get("bio");
        domView = 'bio';
    }

    //-------------------------------------------------------------------------------------
    // Reset the display: show the home page.
	function resetDisplay () {
        domView = 'home';
	}

    //-------------------------------------------------------------------------------------
    //  Handle click events that bubble up from inner components.
	function handleClick(event) {
		let eventType  = event.detail.what;
		let eventValue = event.detail.value;

		if (eventType=='switchView') {
            window.history.pushState('', '', '/?' + eventValue);
            domView = eventValue;
		}
		else if (eventType=='setValue') {
			let eventName = event.detail.name;
            domValue[eventName] = eventValue;
		}
		else if (eventType=='showBio') {
            person = eventValue;
            window.history.pushState('', '', '/?bio=' + person);
            domView = "bio";
		}
		else if (eventType=='reset') {
			resetDisplay();
		}
		else {
			alert('In function handleClick in App.svelte: incorrect eventType value [' + 
			eventType + 
			'] when handling a custom mouseclicked event.');
		}
    }
    
</script>

<Navbar on:mouseclicked={handleClick} />

{#if      domView=='home'}  <Home      {theImmigrants}          on:mouseclicked={handleClick} />
{:else if domView=='bio'}   <Biography {theImmigrants} {person} on:mouseclicked={handleClick} />
{:else if domView=='about'} <About                              on:mouseclicked={handleClick} />
{:else}                     <BadView   {domView}                on:mouseclicked={handleClick} />
{/if}