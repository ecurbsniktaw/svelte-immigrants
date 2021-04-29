<script>
    export let person;
    export let theImmigrants;
    import marked from 'marked';

    let parts = person.split('x');

    let thisPerson = theImmigrants[parts[0]].people[parts[1]];
    let theBio  = thisPerson.bio;
    let theName = thisPerson.name;
    let born    = thisPerson.bornDate;
    let died    = thisPerson.diedDate;
</script>

<h2>Biography of {theName}</h2>
<h3>{born.substring(0,4)} - {died.substring(0,4)}</h3>
{@html marked(theBio)}

<style>

</style>