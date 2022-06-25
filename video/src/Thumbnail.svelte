<script>
    export let video;
    import { chosen_video, video_player_is_active } from "./stores.js";
</script>

<div
class="grid-item"
style="background-image: url({video.poster});"
on:click={() => {
  $chosen_video = video;
  $video_player_is_active = true;
}}
/>


<style>
  .grid-item {
    cursor: pointer;
    background-color: var(--main-purple-opacity);
    border: 4px solid rgb(167, 98, 237);
    padding: 20px;
    font-size: 30px;
    text-align: center;
    width: 213px;
    height: 120px;
    background-size: cover; /* Resize the background image to cover the entire container */
    align-self: center;
    margin: 15px 15px 25px 15px;
    transition: all 0.2s;

  }

  .grid-item:hover{
    transform: scale(1.2);
  }

  @media (max-width: 760px) {
		.grid-item{
      height: 100px;
      width: 177px;
    }
	}

</style>