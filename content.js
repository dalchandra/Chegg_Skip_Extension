/**
 * global variable: It is used to check if the current path is required path which is expertqna path or not
 */
var targetPath = "https://expert.chegg.com/expertqna";
var exitClassName = "sc-1eq90u-3 sc-1eq90u-7 jaaInW"; // to hide btn when exit is clicked
/**
 * On load of the window, skip btn is created and appended to document's body
 */
window.addEventListener("load", function(event){
    let currentPath = window.location.href;
    let skipBtn = document.createElement("button");
    skipBtn.innerText = "Skip Question";
    skipBtn.id = "skip_extension_btn";
    skipBtn.addEventListener("click", skip);
    skipBtn.style = "position:fixed;bottom: 100px;right:20px;padding:10px;background-color: orange; color:white;margin:0px;border:0px; border-radius:5px";
    if(currentPath ==targetPath){
        skipBtn.style.visibility = "visible";
    }else{
        skipBtn.style.visibility = "hidden";
    }
    skipBtn.style.cursor = "pointer";
    document.body.appendChild(skipBtn);
})

/**
 * This will be useful, to hide or show the skip button based on the current url or path
 */
window.addEventListener("click", function(event){
    if(event.target.className == exitClassName){
        document.getElementById("skip_extension_btn").style.visibility = "hidden";
        return;
    }
    let currentPath = window.location.href;
    // check for existence of ski btn using skip_extension_btn id
    if(document.getElementById("skip_extension_btn") != null){
        // means already existed
        // check for visibility
        if(currentPath == targetPath){
            // whatever the btn visibility status, we set it to visible
            document.getElementById("skip_extension_btn").style.visibility = "visible";
        }else{
            // whatever the btn visibility status, we set it to hidden
            document.getElementById("skip_extension_btn").style.visibility = "hidden";
        }
    }else{
        // this should not be reached
    }
});

/**
 * skip() function does the main work of skipping the question using DOM.
 */
var i=1;
function skip(){
		if(document.getElementsByClassName("sc-1eq90u-3 sc-1eq90u-5 cggaqZ noeGi")[0]==null)
		{
			window.open("https://expert.chegg.com/expertqna","_self");
		}
		else
		{
			i=0;
		    document.getElementsByClassName("sc-1eq90u-3 sc-1eq90u-5 cggaqZ noeGi")[0].click() // skip button
		    let skipOptions = document.getElementsByClassName("q4pgtx-0 fHWyar");
		    skipOptions[skipOptions.length - 1].click() ; // to select the skip reason
            if (document.getElementsByClassName("sc-1eq90u-3 sc-1eq90u-4 gixyh iRbxZC")[0])
		        document.getElementsByClassName("sc-1eq90u-3 sc-1eq90u-4 gixyh iRbxZC")[0].click()
            else
                document.getElementsByClassName("sc-1eq90u-3 sc-1eq90u-4 bbEETb iRbxZC")[0].click() // modal submit
		}
}
setTimeout(function(){
	if(document.getElementsByClassName("sc-1eq90u-3 sc-1eq90u-5 cggaqZ noeGi")[0]==null)
	{
		window.open("https://expert.chegg.com/expertqna","_self");
	}
	else if(i==1)
	{
		i=0;
		var sound = new Audio;
		sound.src = "https://assets.mixkit.co/sfx/download/mixkit-arcade-retro-game-over-213.wav";
		sound.play();
	}
},15000);

