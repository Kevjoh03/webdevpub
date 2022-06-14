<script>
    import Spinner from "./Spinner.svelte";
    import Results from "./Results.svelte";
    import Search from "./Search.svelte";
    import { promise, searched } from "./stores.js";
    import { fly, fade, slide, draw } from "svelte/transition";

</script>

<main>


    <img src="logo.png" alt="logo" id="logo" class:searched={$searched==true}>

    <Search/>

    <div id="main-content" class:searched={$searched==true}>
        
        {#await $promise}
            <Spinner />
        {:then result}
            <Results json={result} />
        {:catch error}
            <p style="color: blue">{error.message}</p>
        {/await}

    </div>

</main>

<style>
    :global(body) {
        padding: 0;
        margin: 0;
        background-image:   linear-gradient(rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.3)),
                            linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
                            repeating-linear-gradient(315deg, #6D00FF45 92%, #073AFF00 100%),
                            repeating-radial-gradient(75% 75% at 238% 218%, #00FFFF12 30%, #073AFF14 39%),
                            radial-gradient(99% 99% at 109% 2%, #00C9FFFF 0%, #073AFF00 100%),
                            radial-gradient(99% 99% at 21% 78%, #7B00FF47 0%, #073AFF00 100%),
                            radial-gradient(160% 154% at 711px -303px, #D600FFFF 0%, #3BBD6EFF 100%);
        filter: saturate(1.3) brightness(1.2);
        overflow: hidden;
    }
    main{
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        width: auto;
        height: auto;
        gap: 20px;
    }
    #main-content {
        height: 10vh;
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        gap: 50px;
        padding-left: 10%;
        padding-right: 10%;
        padding-bottom: 5%;
        box-sizing: border-box;
        margin-top: 30px;
    }

    #main-content.searched {
        height: 87vh;
    }

    #logo{
        width: 400px;
        transition: all 0.3s;
        position: absolute;
        left: calc(100%-500px);
    }

    #logo.searched{
        transform: translateX(30px);
        width: 230px;
        left: 0px;
    }

    p{
        color: aliceblue;
    }

    @media (max-width: 1170px) {
        #logo.searched{
            width: 170px;
            top: 24px;
        }
	}

    @media (max-width: 870px) {
        #logo.searched{
            display: none;
        }
	}

    @media (max-width: 780px) {
        #logo{
            width: 340px;
        }
	}

    @media screen and (max-width: 780px) {
        #logo{
            width: 180px;
        }
        
        #logo.searched{
            display: none;
        }

        #main-content.searched{
            height: 82vh;
            gap: 0px;
        }
        
        main{
            gap: 0px;
        }
	}
</style>