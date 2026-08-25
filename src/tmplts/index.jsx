const Course = require('./Course.jsx')
const Chapters = require('./Chapters.jsx')

class Index extends EventTarget {
	coursesList
	constructor(){
		super()
		
		setTimeout(async () => {
			const courses = [{courseTitle: 'vfaas.net'}, {courseTitle: 'agents'}, {courseTitle: 'party chat'}, {courseTitle: 'hoon'}]
			this.coursesList = await courses.reduce(async (accumulatorV, r, index) => {
				return await Promise.resolve(accumulatorV) + <Course key={index} courseTitle={r.courseTitle} chapters={await (new Chapters(['video 1','quiz'])).view(true, true)}/>
			}, '')
			this.dispatchEvent(new Event('dynamics'))
		})
	}
	
    publicMembers() {
        return [this.coursesList]
    }	
    
	async view() {
		return <>
			<div>
		        <div class="container">
		        	<p onclick="(() => {location.href = ''})()" id="courses" style='cursor: pointer; margin-left: 45px;  margin-top: 45px;'>courses</p> 
					\$\{this.publicMembers()[0]\}
				</div>
			</div>
		</>
	} 
}

module.exports = Index
