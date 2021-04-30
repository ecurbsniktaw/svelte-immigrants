<script>
    import { Col, Row,  Card, CardBody, CardText} from 'sveltestrap';
    import PersonHeader from './PersonHeader.svelte';

// Declare the props
    export let people;

//  When a show-bio link is clicked, raise a biorequested event.
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    function bioRequested(personID) {
        dispatch("biorequested", personID);
    }
</script>

<Card class="mb-5 border-0">
    <CardBody>
        <CardText>
            <Row>

                <!-- Generate a card for each person in this family -->
                {#each people as person}

                <Col xs="6">

                    <!-- Each person has a card with a drop shadow -->
                    <Card class="p-2 mb-2 border-light shadow">
                        <Row>
                            <!-- Col 1: thumbnail photo -->
                            <Col xs="3">
                                <img class="float-left" src="{person.picURL}" alt="personImage" width=100>
                            </Col>
                            <!-- Col 2: born, arrived, died -->
                            <Col xs="9"> <PersonHeader {person} /> </Col>    
                        </Row>
                        <!-- Below the photo, a link to the person's bio -->
                        <a
                        href
                        on:click|preventDefault={()=>bioRequested(person.perID)}>
                        Show Bio
                        </a>                    
                    </Card>

                </Col>

                {/each} <!-- end of loop on all people in this couple -->

            </Row>
        </CardText>
    </CardBody>
</Card>
