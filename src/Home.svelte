<!-- 
    HOME COMPONENT
    This is the home page that displays when the app loads, and also
    when the 'Home' link on the navigation bar is clicked.
 -->
<script>
    export let theImmigrants;
    import { Container } from 'sveltestrap';
    import Family from './Family.svelte'

//  When the Family component raises a mouseclicked event
//  or a biorequested event, bubble that event up to the 
//  App component, where it will be handled.
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
	function handleClick(event) {
        dispatch("mouseclicked", event.detail);
    }
    function handleBioRequest(event) {
        dispatch("biorequested", event.detail)
    }

</script>

<Container>

<!-- Walk through the data family by family -->
{#each theImmigrants as thisFamily}
    <div>
        <p class="intro">{thisFamily.intro}</p>
        <Family 
            people={thisFamily.people}
            on:mouseclicked={handleClick} 
            on:biorequested={handleBioRequest}
        />
    </div>
{/each}

</Container>

<style>
    .intro {
        font-weight: bold;
    }
</style>