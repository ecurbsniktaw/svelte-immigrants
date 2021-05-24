<script>
    //-------------------------------------------------------------------------------------
    // Import SeveteStrap's Container component. We also need a function from Svelte for 
    // raising custom events.
    import { Container }             from 'sveltestrap';
    import { createEventDispatcher } from 'svelte';

    //-------------------------------------------------------------------------------------
    // When a show-biography link is clicked, bundle up the parameters from the link and
    // raise a custom event. This will be handled by the App component.
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

<Container>

    <h3>About this website</h3>

    <p>
        This website brings together information about Bruce and Paula's ancestors who were born in
        Europe and immigrated to America. Over an 89 year period, from 1833 to 1922, fourteen people left their homes and made new homes in 
        the United States. They had families, and Bruce and Paula are their descendents.
    </p>

    <p>
        Reading ship's passenger lists, census records, newspaper articles, and other documents sheds light on their lives, providing
        glimpses into what it was like to be a stranger in a strange land. Among the many lost forever stories there are a few
        we can see. 
    </p>

    <ul>
        <li>
            <a
            href
            on:click|preventDefault={()=>mouseClicked('showBio', 'mvbohn')}>
            Mary Voss</a>, Bruce's great great grandmother, was travelling from France with her husband and three children (and
            pregnant with her fourth). Thirteen days before arriving in New York, and ten days before her thirtieth birthday, her
            husband died on board ship. xxx within a year ?? she had remarried, to a man (<a
                href
                on:click|preventDefault={()=>mouseClicked('showBio', 'jjbohn')}>Jacob Bohn</a>) who had lost his wife in childbirth. 
            One of their children would become Bruce's mother's grandmother.    
        </li>
    </ul>

    <p>This is also my first attempt at writing a single page application in 
        <a href="https://svelte.dev/" target="_blank">Svelte</a>. For technical details, see the Readme in the github repo: 
        <a href="https://github.com/ecurbsniktaw/svelte-immigrants" target="_blank">https://github.com/ecurbsniktaw/svelte-immigrants</a>
    </p>

</Container>