<script>
    import Navbar      from "./Navbar.svelte";
    import Body        from './Body.svelte';
    import Biographies from './Biographies.svelte';
    import BadView     from './BadView.svelte';
    // import Bio from './Bio.svelte';

    export let theImmigrants;
    export let person;

    let domView;
    person = "unknown";
    let domValue = [];

	function resetDisplay () {
        domView = 'body';
	}

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
    
    function handleBioRequest(event) {
        person = event.detail;
        domView = "bio";
    }

	resetDisplay();

</script>

<Navbar on:mouseclicked={handleClick} />

{#if domView=='body'}
<Body   {theImmigrants} 
        on:mouseclicked={handleClick} 
        on:biorequested={handleBioRequest}
/>

{:else if domView=='bio'}
<Biographies {person} {theImmigrants} />
<!-- <Bio {person} /> -->
  
{:else}
<BadView    {domView} 
            on:mouseclicked={handleClick} 
/>

{/if}
