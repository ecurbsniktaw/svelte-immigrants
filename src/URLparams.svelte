<script>
    let mySearchParams = new URLSearchParams(window.location.search);
    for (const [key, value] of mySearchParams) {
        console.log('key=', key);
        console.log('value=', value);
    }
</script>

this will show url parameters