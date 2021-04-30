<script>

// Get the Bootstrap components
    import { Col, Row } from 'sveltestrap';
    import {
    Card,
    CardBody,
    CardText
  } from 'sveltestrap';

// Get the component that displays the header for one person
    import PersonHeader from './PersonHeader.svelte';

// Declare the props
    export let people;

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

                {#each people as person}
                <Col xs="6">
                    <Card class="p-2 mb-2 border-light shadow">

                        <Row>
                            <Col xs="3">
                                <img class="float-left" src="{person.picURL}" alt="personImage" width=100>
                            </Col>
    
                            <Col xs="9">
                                <PersonHeader {person} />
                            </Col>    
                        </Row>

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
