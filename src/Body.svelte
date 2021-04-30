
<script>
    export let theImmigrants;

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

<!-- Walk through the data family by family -->
{#each theImmigrants as thisFamily}
    <div>
        <Family 
            people={thisFamily.people}
            on:mouseclicked={handleClick} 
            on:biorequested={handleBioRequest}
        />
    </div>
    <hr>
{/each}
