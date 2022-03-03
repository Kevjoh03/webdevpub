<script>
	import {Clock} from "./clock.js"
	import { fade } from "svelte/transition"
	import { spring } from 'svelte/motion';


	let clock = new Clock(4, 20)
	let intervalTime = 1000

	let lightness = 40
	
	let upperLeftX = 63
	let upperTopY = 35
	let upperBottomY = 95
	let upperRightX = 138

	let lowerTopY = 181
	let lowerLeftX = 91
	let lowerRightX = 111
	let lowerBottomY = 181

	let upperLeftXSpring = spring(upperLeftX);
	let upperRightXSpring = spring(upperRightX);
	let upperTopYSpring = spring(upperTopY);
	let upperBottomYSpring = spring(upperBottomY)

	let lowerTopYSpring = spring(lowerTopY);
	let lowerLeftXSpring = spring(lowerLeftX);
	let lowerRightXSpring = spring(lowerRightX);
	let lowerBottomYSpring = spring(lowerBottomY)

	let hourglassRotationSpring = spring(0)
	let hourglassIsRotated = false

	let alarmIsTriggered = false

	clock.alarmTime = "";

	let alarmName = "BEEP BEEP";

	function updateTime(){

		clock.tick()
		clock = clock
	
		if (clock.minutesPassed % 120 == 0){
			hourglassRotationSpring.set(0)
			hourglassIsRotated = false
		}
		else if (clock.minutesPassed % 60 == 0){
			hourglassRotationSpring.set(180)
			hourglassIsRotated = true
		}

		if (!hourglassIsRotated){
			lowerTopYSpring.set((45 * -(clock.minute/60) + 186))
			lowerBottomYSpring.set(186)

			upperTopYSpring.set((60 * (clock.minute/60) + 35))
			upperLeftXSpring.set((37 * (clock.minute/60) + 63))
			upperRightXSpring.set((36 * -(clock.minute/60) + 138))
			upperBottomYSpring.set(95)

			if (clock.minute < 10){
				lowerLeftXSpring.set((40 * -(clock.minute/10) + 91))
				lowerRightXSpring.set((40 * (clock.minute/10) + 111))
			}
			else if (clock.minute > 10){
				lowerLeftXSpring.set(51)
				lowerRightXSpring.set(151)
			}
		}
		else {
			lowerTopYSpring.set(107)
			lowerRightXSpring.set((37 * (clock.minute/60) + 63))
			lowerLeftXSpring.set((36 * -(clock.minute/60) + 138))
			lowerBottomYSpring.set((60 * -(clock.minute/60) + 168))

			upperTopYSpring.set(15)
			upperBottomYSpring.set((45 * (clock.minute/60) + 15))

			if (clock.minute < 10){
				upperRightXSpring.set((40 * -(clock.minute/10) + 91))
				upperLeftXSpring.set((40 * (clock.minute/10) + 111))
			}
			else if (clock.minute > 10){
				upperRightXSpring.set(51)
				upperLeftXSpring.set(151)
			}
		}
	}

	updateTime()

	setInterval(updateTime, intervalTime)

	setInterval(() => {
		if (lightness == 20){
			lightness = 40
		}
		else {
			lightness = 20
		}
	}, intervalTime);

	setInterval(() => {
		if (clock.clockTime.length == clock.alarmTime.length){
			if (clock.clockTime >= clock.alarmTime){
				alarmIsTriggered = true
			}
			else {
				alarmIsTriggered = false
			}
		}
		else {
			alarmIsTriggered = false
		}
	}, intervalTime)

	function cancelAlarm(){
		alarmIsTriggered = false
		clock.alarmTime = ""
	}
</script>

<main>
	{#if !alarmIsTriggered}
		<div class="mainPage" in:fade out:fade>

			<div class="analogClock">
				<svg id="svgAnalogClock" viewBox="-50 -50 100 100">
					<circle class="clockOuterRing"  r=48px />
		
					<circle class="clockMiddleRing"  r=45px />
		
					<circle class="clockInnerRing"  r=39px />
		
					<circle class="clockMostInnerRing"  r=35px />
		
					{#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minutes}
						<line
							class="hour"
							y1="44"
							y2="35"
							transform="rotate({30 * minutes})"
						/>
		
						{#each [1, 2, 3, 4] as offset}
							<line
								class="minute"
								y1="44"
								y2="39"
								transform="rotate({6 * (minutes + offset)})"
							/>
						{/each}
						
					{/each}
		
					<line 
						class="hourHand"
						y1="28"
						y2="-3"
						transform="rotate({180 + (6/12) * (clock.minute + clock.hour * 60)})"
					/>
		
					<line 
						class="minuteHand"
						y1="32"
						y2="-6"
						transform="rotate({180 + 6 * clock.minute})"
					/>
				</svg>
			</div>
			
			<div class="clockText">
				<h2 id="text" style="color:darkgray;background-color:hsl(211, 45%, {lightness}%)">
					Time:
				</h2>
		
				<h3 id="text" style="color:lightgray;background-color:hsl(211, 45%, {lightness}%)">
					{clock.clockTime}
				</h3>
			</div>

			<div class="hourglass">
				<svg class="svgHourglass" viewbox="0 0 201 201" style="transform: rotate({$hourglassRotationSpring}deg);">
					
					<line class="hourglassSide" x1="40" y1="9" x2="40" y2="192"></line>

					<line class="hourglassSide" x1="161" y1="9" x2="161" y2="192"></line>

					<path 	class="hourglassMain" 
							d="M 40 10 
							L 161 10 
							L 104 101
							L 161 191
							L 40 191
							L 98 101
							Z">
					</path>

					<path 	class="hourglassSand" 
							d="M {$upperLeftXSpring} {$upperTopYSpring} 
							L 101 {$upperBottomYSpring}
							L {$upperRightXSpring} {$upperTopYSpring}
							Z">
					</path>
					
					<path 	class="hourglassSand" 
							d="M {$lowerLeftXSpring} {$lowerBottomYSpring} 
							L 101 {$lowerTopYSpring}
							L {$lowerRightXSpring} {$lowerBottomYSpring} 
							Z">
					</path>
				</svg>
			</div>
			
			<div class="timeSkipButton">
				<button id="button" on:click={updateTime}>Press to jump forward one minute</button>
			</div>
			
			<div class="alarmText">
				<h4>Set Alarm:</h4>

				<input bind:value={clock.alarmTime} class="input" id="alarmTimeInput" placeholder="Type the alarm's time here">
				<input bind:value={alarmName} class="input" id="alarmNameInput" placeholder="Type the alarm's name here">
			</div>
		</div>
	{:else}
		<div class="wakeUpScreen" in:fade>
			<p class="wakeUpText">
				{alarmName}
			</p>

			<button class="alarmButton" on:click={cancelAlarm}>Cancel Alarm</button>
		</div>
	{/if}
</main>

<style>
	:global(body){
		background: linear-gradient(-20deg, rgba(0,0,0,0) 67%, rgb(42, 148, 86) 67%, rgb(16, 87, 45) 100%), linear-gradient(65deg, rgb(31, 31, 87) 0%, #01162e 57%, #402f57 57%, #665777 100%);

		background-attachment: fixed;
	}

	.mainPage{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 0.2fr 1fr 1fr;
	}

	.clockText{
		grid-row: 2;
		grid-column: 2;
		align-self: center;
	}

	.analogClock{
		grid-row: 2;
		grid-column: 1;
		align-self: center;
	}

	.hourglass{
		grid-row: 2;
		grid-column: 3;
		align-self: center;
	}

	.alarmText{
		grid-row: 3;
		grid-column: 2;
		align-self: auto;
	}

	.wakeUpScreen{
		vertical-align: auto;
	}

	.timeSkipButton{
		grid-column: 1;
		grid-row: 3;
		align-self: center;
	}

	#button{
		width: 140px;
		height: 120px;
		font-size: 20px;
	}

	#button:hover{
		box-shadow: 0px 0px 20px rgb(132, 233, 199);
	}

	@font-face{
		font-family:'digital-clock-font';
		src: url('./DIGITALDREAM.ttf');
    }

	@font-face{
		font-family:'digital-clock';
		src: url('./digital-7.ttf');
    }

	/* Clock styling */
	#svgAnalogClock{
		max-width: 240px;
		min-width: 160px;
		height: auto;

		margin-right: 140px;
		margin-bottom: 70px;
	}

	.clockOuterRing{
		stroke: hsl(198, 75%, 60%);
		fill: hsl(198, 75%, 53%);
		stroke-width: 2px;
	}

	.clockMiddleRing{
		stroke: hsl(198, 75%, 40%);
		fill: hsl(198, 75%, 33%);
		stroke-width: 1.5px;
	}

	.clockInnerRing{
		stroke: hsl(198, 75%, 20%);
		fill:hsl(198, 75%, 13%);
		stroke-width: 1px;
	}
	
	.clockMostInnerRing{
		stroke: hsl(198, 75%, 10%);
		fill: hsl(198, 75%, 5%);
		stroke-width: 0.5px;
	}

	.minute{
		stroke: rgb(132, 233, 199);
	}

	.hour{
		stroke: rgb(187, 225, 230);
	}
	
	.minuteHand{
		stroke: rgb(0, 255, 128);
		stroke-width: 1.2px;
		stroke-linecap: round;
	}

	.hourHand{
		stroke: rgb(0, 126, 84);
		stroke-width: 2px;
		stroke-linecap: round;
	}
	
	/* Hourglass Styling */
	.svgHourglass{
		width: auto;
		max-height: 330px;
		min-height: 180px;
	}

	.hourglassMain{
		stroke: rgb(0, 255, 128);
		stroke-width: 3px;
		fill: rgba(63, 215, 226, 0.4);
	}

	.hourglassSide{
		stroke: hsl(198, 75%, 60%);
		stroke-width: 4px;
	}

	.hourglassSand{
		stroke: rgb(235, 215, 255);
		fill: rgb(156, 58, 255);
	}


	/* Text */
	main {
		text-align: center;
	}

	.input{
		text-align: center;
		width: 2.5cm;
		font-size: 26px;
		text-transform: uppercase;

		background-color: lightgray;
		width: 330px;
		height: fit-content;
	}

	#alarmTimeInput{
		font-family: "digital-clock", helvetica;
	}

	#alarmNameInput{
		font-size: 20px;
		height: 49.2px;
	}

	h2{
		font-size: 3em;

		margin-bottom: 0px;
		margin-top: 0px;
		padding-top: 11.9px;

		border-radius: 15px 15px 0px 0px;
	}

	h3{
		font-size: 7em;
		font-family: "digital-clock", Helvetica;

		margin-top: 0px;
		margin-bottom: 0px;

		padding-bottom: 16.9px;
		padding-left: 15px;
		padding-right: 15px;
	
		border-radius: 0px 0px 15px 15px;
	}

	h4{
		font-size: 2em;
		color: hsl(211, 50%, 40%);
		margin-bottom: 0cm;
		margin-top: 20px;
	}

	@keyframes wakeUpAnimation{
		0%, 100% {transform: translateX(1px); color: red}
		10%, 90% {transform: translateX(2px);}
		20%, 80% {transform: translateX(-3px);}
		30%, 70% {transform: translateX(4px);}
		40%, 60% {transform: translateX(-6px);}
		50% {transform: translateX(8px); color: hsl(198, 75%, 60%);}
	}

	.wakeUpText{
		font-size: 7em;
		color:hsl(211, 50%, 40%);
		font-weight: bold;
		text-transform: uppercase;

		animation-name: wakeUpAnimation;
		animation-duration: 1.5s;
		animation-iteration-count: infinite;

		align-self: center;
		text-shadow: 0px 0px 20px rgb(208, 162, 255), 0px 0px 35px rgb(142, 30, 255);
	}

	.alarmButton{
		font-size: 1.5em;
	}
	
	@media (max-width: 900px) {
		.mainPage{
			display: flex;
			flex-direction: column;
		}

		#svgAnalogClock{
			margin: 0px 0px 0px 0px;
		}

		.alarmText{
			margin: 0px 0px 0px 0px;
		}
	}
</style>