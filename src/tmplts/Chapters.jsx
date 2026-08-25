class Chapters extends EventTarget {
	chapters
	constructor(chapters){
		super()
		this.chapters = chapters
		
		window.addEventListener('DOMContentLoaded', function() {
			const video = document.getElementById("vid");
			console.log('video')
			console.log(video)
			// video.addEventListener("seeking", (event) => {
			video.addEventListener("timeupdate", (event) => {
				console.log(Object.keys(event))
				var hours=parseInt(video.currentTime/(60*60),10);
				var minutes = parseInt(video.currentTime / 60, 10);
				var seconds = video.currentTime % 60;
				console.log(seconds)
				console.log(
				    "The Boolean paused property is now 'false'. Either the play() method was called or the autoplay attribute was toggled.",
				);
			});
		});

	}
	
    publicMembers() {
        return [this.chapters]
    }	
    
    async selectVid (self) {
    	const chapters = self.split(',')
    	console.log(chapters[Number(this.innerHTML) - 1])
    	console.log('selecting quiz star')
    	document.getElementById('quiz').style.display = 'block'
    	document.getElementById('vid').style.display = 'none'
    }
    
    async selectVid2 (self) {
    	const chapters = self.split(',')
    	console.log(chapters[Number(this.innerHTML) - 1])
    	console.log('selecting vid')
    	document.getElementById('quiz').style.display = 'none'

    	document.getElementById('vid').style.display = 'block'
    	
    }
    
	async view() {
		return <>
			<div>
			    <p>chapters</p>
			    <ul>
			    	<li style="cursor: pointer" onclick="this.selectVid">1</li>
			    	<li style="cursor: pointer" onclick="this.selectVid2">2</li>
			    </ul>
			</div>
			<div>
			<div style='display: none' id="quiz">
				<p  >
					what is the largest moon of jupiter?
					<fieldset>
					  <legend>Please select one of the following</legend>
					  <input type="radio" name="action" id="track" value="track" /><label for="track">Track Submission</label><br />
					  <input type="radio" name="action" id="event" value="event"  /><label for="event">Events and Artist booking</label><br />
					  <input type="radio" name="action" id="message" value="message" /><label for="message">Message us</label><br />
					</fieldset>
				<p>
			</div>

			<video style='display: none' id='vid' width='500' height='300' controls>
			  <source  src="./src/assets/easyv.webm" type="audio/mpeg">
			</video>
			</div>
		</>
	} 
}

module.exports = Chapters
