
<script>
    export let theImmigrants;

    import Family from './Family.svelte'

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

	function handleClick(event) {
        dispatch("mouseclicked", event.detail);
    }

    function handleBioRequest(event) {
        dispatch("biorequested", event.detail)
    }

</script>

{#each theImmigrants as thisFamily}
    <div>
        <Family 
            intro={thisFamily.intro} 
            relationship={thisFamily.relationship} 
            people={thisFamily.people}
            on:mouseclicked={handleClick} 
            on:biorequested={handleBioRequest}
        />
    </div>

{/each}
