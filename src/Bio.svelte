<script>
    import { Col, Row } from 'sveltestrap';
    import marked       from 'marked'; // npm install -g marked
    import PersonHeader from './PersonHeader.svelte';
    export let person;
</script>

<Row>

    <Col xs="3">
        <img class="thumbNail" src="{person.picURL}" alt="personImage" width=100><br>
        <p class="bio"><PersonHeader {person} /></p>
    </Col>

    <Col xs="8">
        {@html marked(person.bio)}
    </Col>

</Row>
