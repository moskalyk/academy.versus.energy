

function hideBlocks() {
        	const els = document.getElementsByClassName("block")
    	
    	Array.from(els).map((el ) => {el.style.display = 'none' }) 
}

var i = 0;
        function move() {
          if (i == 0) {
            i = 1;
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
              if (width >= 100) {
                clearInterval(id);
                i = 0;
              } else {
                width++;
                elem.style.width = width + "%";
              }
            }
          }
        } 
        
function runner() {
	eval(`
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
    
	async view (onload, registration) {
		return \`
			<div>
			    <p>chapters</p>
			    <ul>
			    	<li style="cursor: pointer" onclick="(async (self) => {
    	const chapters = self.split(',')
    	console.log(chapters[Number(this.innerHTML) - 1])
    	console.log('selecting quiz star')
    	document.getElementById('quiz').style.display = 'block'
    	document.getElementById('vid').style.display = 'none'
    })(\'\$\{this.publicMembers().filter((el,i) => !RegExp.prototype.test.bind(/(<([^>]+)>)/i)(el) )\}\')"">1</li>
			    	<li style="cursor: pointer" onclick="(async (self) => {
    	const chapters = self.split(',')
    	console.log(chapters[Number(this.innerHTML) - 1])
    	console.log('selecting vid')
    	document.getElementById('quiz').style.display = 'none'

    	document.getElementById('vid').style.display = 'block'
    	
    })(\'\$\{this.publicMembers().filter((el,i) => !RegExp.prototype.test.bind(/(<([^>]+)>)/i)(el) )\}\')"">2</li>
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
		\`
	} 
}


 class Course extends EventTarget {
	courseTitle
	
	constructor(courseTitle, chapters){
		super()
		this.courseTitle = courseTitle
		this.chapters = chapters
		
		

	}
	
    async select (self) {
    	document.getElementById('courses').innerHTML = self 
    	document.getElementById(self).style.display = 'block' 
        hideBlocks()
        move()
    }
    
    publicMembers() {
        return [this.courseTitle, this.chapters]
    }	
    
	async view (onload, registration) {
		return \`
			<a class="block" onclick="(async (self) => {
    	document.getElementById('courses').innerHTML = self 
    	document.getElementById(self).style.display = 'block' 
        hideBlocks()
        move()
    })(\'\$\{this.publicMembers().filter((el,i) => !RegExp.prototype.test.bind(/(<([^>]+)>)/i)(el) )\}\')""><div class='grid'><p>\$\{this.publicMembers()[0]\}</p></div> </a>
			<div style='display: none' id="\$\{this.publicMembers()[0]\}"><br/>
			<br/>
			progress
			    <div id="myProgress">
              <div id="myBar"></div>
                </div>
                \$\{this.publicMembers()[1]\}
			</div>

		\`
	} 
}


 


class Index extends EventTarget {
	coursesList
	constructor(){
		super()
		
		setTimeout(async () => {
			const courses = [{courseTitle: 'vfaas.net'}, {courseTitle: 'agents'}, {courseTitle: 'party chat'}, {courseTitle: 'hoon'}]
			this.coursesList = await courses.reduce(async (accumulatorV, r, index) => {
				return await Promise.resolve(accumulatorV) + (await (new Course(r.courseTitle,await (new Chapters(['video 1','quiz'])).view(true, true))).view(true,true));

			}, '')
			this.dispatchEvent(new Event('dynamics'))
		})
	}
	
    publicMembers() {
        return [this.coursesList]
    }	
    
	async view (onload, registration) {
		return \`
			<div>
		        <div class="container">
		        	<p onclick="(() => {location.href = ''})()" id="courses" style='cursor: pointer; margin-left: 45px;  margin-top: 45px;'>courses</p> 
					\$\{this.publicMembers()[0]\}
				</div>
			</div>
		\`
	} 
}



	
	
	const vf = new VFAASNet({protocol: 'ws', host: '127.0.0.1', port: 8081})

	db = {
		get: async (key, onload, registration) => {

			const promise = (onload) => {
				return new Promise((res, rej) => {
					let update = (datum) => {
					    // TODO: dispatch per component
					    
						res(datum.msg.value)	
									
						onload && vf.webSocket.send('update', JSON.stringify({status: 170, msg: {key: key, value: value}}))

					}			
					vf.aPath(update)
				})
			}
			
			if(onload && registration) {
				const pr = () => {
					return new Promise((res) => {
						const loadDatabase = (datum) => {
							setTimeout(() => {
								
								
							}, 10)
							if('v' in datum.msg){
								res(datum.msg.v[key])

							} else {
									res(datum.msg.v[key])
							}
						}
						
						const onloadUpdate = (datum) => { 
				 			
							
						}
						
						vf.aPath(onloadUpdate)
						vf.aPath(loadDatabase)
						
						setTimeout(() => {
							vf.webSocket.send('loadDatabase', JSON.stringify({ status: 139, msg: {key : key} }))
						}, 10)
					})
				}

				return await pr()
			}
			else if(!onload && registration) {
				return await promise(false)
			}
		},
		put: async (key, value) => {
			vf.webSocket.send('update', JSON.stringify({status: 170, msg: {key: key, value: value}}))
		}
	};
	
	
	vf.aBoot(({boot}) => {
	   vf.webSocket.send('client', JSON.stringify({status: 204, msg: 'msg send'}))
	});
	
	
	(async () => {
		let index = new Index();
		
		const contents = await index.view();
		const element = document.getElementById('anchor');
		let main = contents;
		element.setHTMLUnsafe(main);
		
         index.addEventListener('dynamics', async (e) => {
         
            main = await index.view(false, index.registration)
            index.dispatchEvent(new Event('^dynamics'))

            

            element.setHTMLUnsafe(main)
        });   
    
	})();
`)
};

(async () => {
	await runner();
})()
