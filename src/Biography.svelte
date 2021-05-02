<!-- 
    BIOGRAPHY COMPONENT: Displays the biography of one immigrant.
 -->
<script>
    export let person;
    export let theImmigrants;
    import marked from 'marked';

    import { Container } from 'sveltestrap';

    let parts = person.split('x');
    let thisPerson = theImmigrants[parts[0]].people[parts[1]];
</script>

<Container>
<h3>Biography of {thisPerson.name}

{thisPerson.bornDate.substring(0,4)} - {thisPerson.diedDate.substring(0,4)}</h3>

<img class="float-left mr-2" src="{thisPerson.picURL}" alt="personImage" width=100>

{#if thisPerson.bio.length>0}
<div class="bioP">
{@html marked(thisPerson.bio)}
</div>

{:else}
No biography available for this person.

{/if}
</Container>

<style>
.bioP
{
	margin-bottom: .5rem;
	font-family: Georgia, Cambria, "Times New Roman", Times, serif;
	text-indent: 0;
	font-size: 1.2rem;
}
</style>