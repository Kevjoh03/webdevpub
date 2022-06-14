<script>
    export let json;
    import {questionAsked} from "./stores.js";
    import { fly, fade, slide, draw } from "svelte/transition";
</script>

{#if json && "data" in json && "items" in json.data && json.data.items.length > 0}
    <div id = "item-holder">
        {#each json.data.items as item}
            <div in:fade={{delay: 200}} id="item" on:click ={() => {window.location=item.url}} on:auxclick={() => {window.open(item.url)}}>
                <p in:fade id="name">{item.name}</p>
                <p in:fade id="url">{item.url}</p>
                {#if item.hasOwnProperty('description') }
                    {#if (item.description).length >= 115 }
                        <p in:fade id="description">{((item.description).substr(0,115)) + "..."}</p>    
                    {:else}
                        <p in:fade id="description">{item.description}</p>
                    {/if}
                {/if}
                <p in:fade id="identifier">{item.identifier}</p>
                <p in:fade id="date">{(item.published_at).substr(0, 10)}</p>
                <p in:fade id="type">{item.type}</p>
            </div>
        {/each}
    </div>
{:else if json}
    <div class="error-message">
        <p in:fade>ERROR: "{$questionAsked}" doesn't have any results.</p>
    </div>
{/if}

<style>
    #item-holder {
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        overflow-y: scroll;
        overflow-x: hidden;
        box-sizing: border-box;
        padding-left: 10%;
        padding-right: 10%;
        max-width: 100%;
        min-width: 320px;
        row-gap: 20px;
        margin: 0px 20px 0px 20px;
    }

    #item {
        border-radius: 15px;
        background-color: hsla(208, 24%, 28%, 0.75);
        border: 5px solid;
        border-color: #2391da;
        padding: 10px;
        align-self: center;
        box-sizing: border-box;
        word-wrap: break-word;
        margin: 10px 200px 10px 200px;
        height: fit-content;
        width: 470px;
    }

    .error-message{
        color: red;
        text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.534);
    }

    p {
        /** border: 2px solid black; */
        padding: 1px;
        color: hsl(186, 51%, 90%);
        font-size: 16px;
        margin: 5.5px 5.5px 5.5px 5.5px;
    }

    #name{
        text-decoration: underline 3px hsla(186, 29%, 80%, 0.719);
        font-size: 28px;
        font-weight: bolder;
        color: hsl(0, 0%, 100%);
    }

    #item:hover{
        background-color: hsla(210, 9%, 36%, 0.75);
        
    }

    /** https://onaircode.com/html-css-custom-scrollbar-examples/ */
    ::-webkit-scrollbar {
        width: 15px;
        height: 15px;
    }

    ::-webkit-scrollbar-track {
        border-radius: 25px;
        background-color: rgba(176, 217, 255, 0.151);
    }

    ::-webkit-scrollbar-thumb {
        background-image: linear-gradient(-55deg, #47008a, #8400ff, #c3b4fc);
        border-radius: 25px;
    }

    @media (max-width: 780px) {
        #item{
            width: 230px;
        }

        #name{
            font-size: 20px;
        }


	}
</style>