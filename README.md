# Immigrant Ancestors in Svelte

### Bruce & Paula's Immigrant Ancestors

This web site brings together information about the fourteen people on our family trees who emigrated from Europe to the United States. 

### Learning Svelte

This is my first application written in Svelte. This Readme file is a record of what I'm learning about how to create a reactive single page application.

#### A Simple Router

Svelte has no built-in router, but there are many third party options. I tried a couple, each of which led to complications that started taking over the development. So I stepped back and implemented a simple event-based router system.

The App component determines which view should be displayed based on the value of "domView". Other components can change the view (in response to a mouse click) by raising an event that bubbles up to the App component. The handleClick and handleBioRequest functions in App handle those events and change the value of domView.

```
<Navbar on:mouseclicked={handleClick} />
{#if domView=='home'}
<Home {theImmigrants} on:mouseclicked={handleClick} on:biorequested={handleBioRequest} />
{:else if domView=='bio'}
<Biography {person} {theImmigrants} {thePopImages} />
{:else if domView=='about'}
<About {peopleKeys} on:biorequested={handleBioRequest} />
{:else}
<BadView {domView} on:mouseclicked={handleClick} />{/if}
```

Although there is only one server address for the application (in essence the definition of a SPA), we want people to be able to arrive at the site seeing a particular view. For example, I'd like to share a link that, when clicked on, sends you directly to the biography of a specific individual, not to the home page of the application.

We do this by modifying the end of the browser's url -- the parameter string that starts with a question mark -- whenever the view is changed.
