<script>
    import { promise, questionAsked, searched } from "./stores.js";
    let question = '';

    async function search() {
        const res = await fetch(
            `https://demo.dataverse.org/api/search?q=` + question
        );
        const json = await res.json();
         if (res.ok) {
            $searched = true;
            $questionAsked = question;
            return json;

        } else {
            $searched = true;
            throw new Error(json);
        } 
    }
    $: {
        console.log($searched)
    }
</script>

<div class:searched={$searched==true}>
    <form
        on:submit|preventDefault={() => {
            $promise = search();
        }}
    >
        <input id="search" bind:value={question} placeholder="&#x1F50E;&#xFE0E; Type to search"/>
    </form>
</div>

<style>
    div {
        display: flex;
        gap: 5px;
        width: 50%;
        justify-self: center;
        align-items: center;
        padding-top: 300px;
        transition: padding-top 0.3s;
        transition-delay: 0.12s;
    }

    div.searched {
        padding-top: 60px;
    }

    form,
    form input {
        width: 100%;
        border-radius: 25px;
        padding-left: 15px;
    }
    #search:focus{
        outline: rgb(149, 0, 152) solid;
    }


    @media (max-width: 780px) {
        #search{
            font-size: 15px;
        }
	}

    @media screen and (max-width: 780px) {
        div.searched{
            padding-top: 30px;
        }
	}
</style>