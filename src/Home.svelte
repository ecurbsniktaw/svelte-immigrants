<script>
    //-------------------------------------------------------------------------------------
    // Import our Family component and SeveteStrap's Container component. Declare the prop
    // containing immigrant data that we receive from the App component. We also need a
    // function from Svelte for raising custom events.
    import Family                    from './Family.svelte'
    import { Container }             from 'sveltestrap';
    import { createEventDispatcher } from 'svelte';
    export let theImmigrants;

    //-------------------------------------------------------------------------------------
    // If we get a mouseclicked event (raised in the Family component), bubble that event 
    // up to the App component, where it will be handled.
    const dispatch = createEventDispatcher();
	function handleClick(event) {
        dispatch("mouseclicked", event.detail);
    }
</script>

<Container>

    <h3>Bruce and Paula's Immigrant Ancestors</h3>

    {#each theImmigrants as thisFamily}
        <div class="family rounded shadow">
            <p class="intro">{@html thisFamily.intro}</p>
            <Family people={thisFamily.people} on:mouseclicked={handleClick} />
        </div>
    {/each}

    <div>&nbsp;</div>

</Container>

<style>
    .intro {
        margin-bottom: 1rem;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 1.1rem;
    }

    .family {
        border: 1px solid #DDD;
        width: 85%; 
        margin-left: auto; 
        margin-right: auto;
        margin-bottom: 2rem;
        padding: 1rem;
    }
</style>