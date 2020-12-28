<script>
    import {onMount} from 'svelte';
import Card from '../components/Card.svelte';
    
    import Header from '../components/Header.svelte';
    import Main from '../components/Main.svelte';
    import Sidebar from '../components/Sidebar.svelte';
    import TimeLine from '../components/TimeLine.svelte';

    let data = {};
    const API = 'https://us-central1-pugstagram-co.cloudfunctions.net/data';
    onMount(async () => {
        const resp = await fetch(API);
        data = await resp.json();
    })
</script>

<Header />
<Main >
    <TimeLine posts={data.posts}/>
    <Sidebar {...data.user}/>
</Main>