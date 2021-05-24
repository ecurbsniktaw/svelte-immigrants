<script>
    //-------------------------------------------------------------------------------------
    // Import SeveteStrap's Container component. Declare the props containing immigrant
    // data, and the person in question, that we receive from the App component.
    import { Container } from 'sveltestrap';
    export let person;
    export let theImmigrants;

    //-------------------------------------------------------------------------------------
    // peopleKeys maps a person's short name to her position in the data object. Use it
    // to pull out her data.
    let peopleKeys;
    peopleKeys = {
        lballard:    [0, 0],
        mdballard:   [0, 1],
        jjbohn:      [1, 0],
        mvbohn:      [1, 1],
        pkirsch:     [2, 0],
        kkirsch:     [2, 1],
        wwatkin:     [3, 0],
        mwarburton:  [3, 1],
        rwatkins:    [3, 2],
        sginsberg:   [4, 0],
        rwilensky:   [4, 1],
        jsolow:      [5, 0],
        sborenstein: [6, 0],
        rgottlieb:   [6, 1]
    };
    let thisPerson = theImmigrants[peopleKeys[person][0]].people[peopleKeys[person][1]];
</script>

<Container>

    <h3>Biography of {thisPerson.name} {thisPerson.bornDate.substring(0,4)} - {thisPerson.diedDate.substring(0,4)}</h3>

    <img class="float-left mr-2" src="{thisPerson.picURL}" alt="personImage" width=100>

    {#if thisPerson.bio.length>0} <div class="bioP"> {@html thisPerson.bio} </div>
    {:else} No biography available for this person.
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