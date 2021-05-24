<script>
    //-------------------------------------------------------------------------------------
    // Import Svelte's function for creating custom events.
    import { createEventDispatcher } from "svelte";

    //-------------------------------------------------------------------------------------
    // When a navigation link is clicked, bundle up the parameters from the link and
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

<nav>
    <ul class="topnav">
      <li>
        <a href on:click|preventDefault={()=>mouseClicked('switchView', 'home')}>Home</a>
      </li>
      <li>
        <a href on:click|preventDefault={()=>mouseClicked('switchView', 'about')}>About</a>
      </li>
    </ul>
</nav>

<style>
    ul.topnav {
      list-style-type: none;
      margin: 0;
      margin-bottom: 0.5rem;
      padding: 0;
      overflow: hidden;
      background-color: #999999;
    }
  
    ul.topnav li {
      float: left;
    }
  
    ul.topnav li a {
      display: block;
      color: white;
      text-align: center;
      padding: 0.5rem 0.5rem;
      text-decoration: none;
    }
  
    ul.topnav li a:hover:not(.active) {
      background-color: #111;
    }
  
    @media screen and (max-width: 600px) {
      ul.topnav li {
        float: none;
      }
    }
</style>