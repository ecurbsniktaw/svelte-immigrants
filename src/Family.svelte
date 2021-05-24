<script>
    //-------------------------------------------------------------------------------------
    // Import our PersonHeader component, several components from SvelteStrap and the 
    // function from Svelte for raising custom events. Declare the prop we receive 
    // containing data for people in a family.
    import PersonHeader                          from './PersonHeader.svelte';
    import { createEventDispatcher }             from 'svelte';
    import { Col, Row, Card, CardBody, CardText} from 'sveltestrap';
    export let people;

    //-------------------------------------------------------------------------------------
    // When a show-biography link is clicked, bundle up the parameters from the link and
    // raise a custom event. This will be caught by the Home component, which will bubble
    // it up to the App component.
    const dispatch = createEventDispatcher();
    function mouseClicked(what, value, name) {
        let eventObj = {
            what: what,
            value: value,
            name: name
        }
        dispatch("mouseclicked", eventObj);
    }
</script>

<Card class="mb-1">
    <CardBody>
        <CardText>
            <Row>
                {#each people as person}
                <Col xs="6">
                    <div>
                        <Row>
                            <Col xs="3"> <img src="{person.picURL}" alt="personImage" width=100> </Col>
                            <Col xs="9"> <PersonHeader {person} /> </Col> 
                        </Row>
                         <a href on:click|preventDefault={()=>mouseClicked('showBio', person.shortName)}>View Biography</a>       
                    </div>
                </Col>
                {/each}
            </Row>
        </CardText>
    </CardBody>
</Card>