<script>
  import { video_player_is_active, video_is_fullscreen } from "./stores.js";
  import { Button, Overlay } from "svelte-materialify";
  import { videos } from "./videos.js";
  import Player from "./Player.svelte";
  import Thumbnail from "./Thumbnail.svelte";

  let is_fullscreen = false;
</script>

<main class:fullscreen={is_fullscreen == true}>
  <div id="title_logo">
    <h1 class="title" id="first_word">vid</h1>
    <h1 class="title" id="second_word">flow</h1>
  </div>
  

  <p class="first_category">All videos</p>

  <div class="grid" id="all_vids">
    {#each Array(7) as _, i}
      <Thumbnail video={videos[i%7]}> </Thumbnail>
    {/each}
  </div>


  <p>Gaming videos</p>

  <div class="grid" id="gaming_vids">
    <Thumbnail video={videos[5]}> </Thumbnail>
    <Thumbnail video={videos[2]}> </Thumbnail>
  </div>


  <p>Videos that will never give you up</p>

  <div class="grid" id="rickrolls">
      <Thumbnail video={videos[6]}> </Thumbnail>
      <Thumbnail video={videos[4]}> </Thumbnail>
      <Thumbnail video={videos[1]}> </Thumbnail>
  </div>


  <p style="color: white;">Miscellaneous videos</p>

  <div class="grid" id="misc_vids">
    <Thumbnail video={videos[0]}> </Thumbnail>
    <Thumbnail video={videos[3]}> </Thumbnail>
  </div>


  <Overlay
    opacity={is_fullscreen ? 1 : 0.9}
    color="black"
    active={$video_player_is_active}
    on:click={() => {
      $video_player_is_active = false;
    }}
  >
    <div
      id="video"
      class:fullscreen={is_fullscreen == true}
      on:click={(e) => {
        e.stopPropagation();
      }}
    >
      <div id="close">
        <Button
          class="error-color"
          size="small"
          on:click={() => {
            $video_player_is_active = false;
          }}
        >
          Close
        </Button>
      </div>
      <div id="theater_mode">
        <Button
          size="small"
          class="primary-color"
          on:click={() => {
            is_fullscreen = !is_fullscreen;
            $video_is_fullscreen = !$video_is_fullscreen;
            // do not focus the fullscreenbutton if clicked
            // this is because otherwise clicking space will cause
            // the video player to maximize/minimize instead of pause/play
            // when space is clicked
            if (document.activeElement != document.body)
              document.activeElement.blur();
          }}
        >
          {is_fullscreen ? "Minimize" : "Theatre Mode"}
        </Button>
      </div>

      {#if is_fullscreen}
        <div id="fullscreen">
          <Button
            size="small"
            class="secondary-color"
            rounded=true
            on:click={() => {
              // do not focus the fullscreenbutton if clicked
              // this is because otherwise clicking space will cause
              // the video player to maximize/minimize instead of pause/play
              // when space is clicked
              if (document.activeElement != document.body)
                document.activeElement.blur();

              let div = document.getElementById("vid");
              if (div.requestFullscreen) div.requestFullscreen();
              else if (div.webkitRequestFullscreen)
                div.webkitRequestFullscreen();
              else if (div.msRequestFullScreen) div.msRequestFullScreen();
            }}
          >
            {"Fullscreen"}
          </Button>
        </div>
      {/if}

      <Player />
    </div>
  </Overlay>

  <src />
</main>

<link href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Fredoka+One" rel="stylesheet" type="text/css">

<style>
  :global(:root) {
    --main-purple: rgb(99, 46, 152);
    --main-purple-opacity: rgba(99, 46, 152, 0.3);
  }

  /** https://onaircode.com/html-css-custom-scrollbar-examples/ */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 25px;
    background-color: rgba(176, 217, 255, 0.151);
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c3b4fc;
    border-radius: 25px;
  }

  :global(body) {
    padding: 0;
    margin: 0;
    background-color: black;
  }

  main {
    min-height: 100vh;
    width: 100vw;
    background: black;
    padding-left: 5%;
    padding-right: 5%;
    box-sizing: border-box;
    overflow: hidden;
  }

  #video {
    position: fixed;
    transition: all 0.3s ease-out;
    left: 20%;
    right: 20%;
    top: 20%;
    bottom: 18%;
    z-index: 100;
    align-self: center;
  }

  #video.fullscreen {
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    z-index: 100;
  }

  #video.fullscreen #fullscreen {
    position: absolute;
    top: 10px; /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */

    transform: translate(-50%, 0);
    z-index: 100;
  }

  /* Buttons */
  #video #close {
    position: absolute;
    top: 0%;
    right: 0%;
    z-index: 100;
    transition: all 0.3s ease-out;
  }
  #video #theater_mode {
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: 100;
    transition: all 0.3s ease-out;
  }
  #video.fullscreen #close {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 100;
  }
  #video.fullscreen #theater_mode {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 100;
  }

  .first_category{
    margin-top: 120px;
  }

  p{
    margin-top: 42px;
    font-size: 18px;
    margin-bottom: 0px;
    font-family: Comfortaa;
    color: aliceblue;
    font-weight: 300;
  }

  .grid {
    display: grid;
    padding: 0px 8px 0px 8px;
    align-content: center;
  }

  #all_vids{
    grid-template-columns: repeat(7, 250px);
    overflow-x: scroll;
  }

  #misc_vids{
    grid-template-columns: repeat(2, 250px);
    margin-bottom: 40px;
  }

  #rickrolls{
    grid-template-columns: repeat(3, 250px);
  }

  #gaming_vids {
    grid-template-columns: repeat(2, 250px);
  }

  #title_logo{
    display: flex;
    flex-flow: row;
    line-height: 100px;
    position: fixed;
    top: -5px;
    left: 0;
    right: 0;
    background: rgba(37, 37, 37, 0.745);
    height: 100px;
    padding-left: calc(2% + 2px);
    padding-top: 15px;
    border-bottom: var(--main-purple) solid 4px;
    backdrop-filter: blur(5px) brightness(0.7);
    z-index: 1;
    box-shadow: 0px 10px 50px rgba(196, 79, 255, 0.644);
  }

  .title {
    font-size: 60px;
    font-family: Comfortaa;
  }
  #first_word{
    color: rgb(203, 152, 255);
    font-family: Fredoka One;
    font-size: 58px;
    margin-right: 2px;
  }
  #second_word{
    color: rgb(163, 71, 255);
    font-weight: 700;
    padding-top: 2px;
  }

  @media (max-width: 1060px) {
    #video{
      bottom: 30%;
    }
	}

  @media (max-width: 760px) {
    #all_vids{
      grid-template-columns: repeat(7, 200px);
    }

    #misc_vids{
      grid-template-columns: repeat(2, 200px);
    }

    #gaming_vids{
      grid-template-columns: repeat(2, 200px);
    }

    #rickrolls{
      grid-template-columns: repeat(3, 200px);
    }
	}

  @media (max-width: 650px) {
    #rickrolls{
      overflow-x: scroll;
    }

    #video{
      bottom: 36%; 
    }

    #video.fullscreen{
      transform: scale(0.9);
    }

    #video #close {
      top: 26%;
    }
    #video #theater_mode {
      top: 26%;
    }
  }

  @media (max-width: 400px) {
    #misc_vids{
      overflow-x: scroll;
    }

    #gaming_vids{
      overflow-x: scroll;
    }

    #video{
      bottom: 43%; 
    }
  }

  @media screen{
    main{
      overflow: hidden;
    }
  }
</style>
