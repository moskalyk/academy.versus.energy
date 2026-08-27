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
    
	async view() {
		return <>
			<a class="block" onclick="this.select"><div style='color: $\{this.publicMembers()[0] == "party chat" ? "purple":"black"\}' class='\$\{this.publicMembers()[0] == "party chat" ? "grid":"grid"\}'><p>\$\{this.publicMembers()[0]\}</p></div> </a>
			<div style='display: none;' id="\$\{this.publicMembers()[0]\}"><br/>
			<br/>
			progress
			    <div id="myProgress">
              <div id="myBar"></div>
                </div>
                \$\{this.publicMembers()[1]\}
			</div>

		</>
	} 
}

module.exports = Course
