var targetPath = "https://expert.chegg.com/expertqna";
var exitClassName = "sc-1eq90u-3 sc-1eq90u-7 jaaInW"; // to hide btn when exit is clicked

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


window.addEventListener("click", function(event){
    if(event.target.className == exitClassName){
        document.getElementById("skip_extension_btn").style.visibility = "hidden";
        return;
    }
    let currentPath = window.location.href;
    // check for existence of ski btn using skip_extension_btn id
    if(document.getElementById("skip_extension_btn") != null){
        if(currentPath == targetPath){
            document.getElementById("skip_extension_btn").style.visibility = "visible";
        }else{
            document.getElementById("skip_extension_btn").style.visibility = "hidden";
        }
    }else{
        //never reach
    }
});

var i=1;
//skip function
function skip(){
		if(document.getElementsByClassName("sc-1eq90u-5 sc-1eq90u-7 bSVpBt ixAKLL")[0]==null)
		{
			window.open("https://expert.chegg.com/expertqna","_self");
		}
		else
		{
			i=0;
		    document.getElementsByClassName("sc-1eq90u-5 sc-1eq90u-7 bSVpBt ixAKLL")[0].click() // skip button
		    let skipOptions = document.getElementsByClassName("q4pgtx-0 dlvpFB");
		    skipOptions[skipOptions.length - 1].click() ; // to select the skip reason
            if (document.getElementsByClassName("sc-1eq90u-5 sc-1eq90u-6 drYDRY ibrWOj")[0])
		        document.getElementsByClassName("sc-1eq90u-5 sc-1eq90u-6 drYDRY ibrWOj")[0].click()
            else
                document.getElementsByClassName("sc-1eq90u-5 sc-1eq90u-6 jfgqtc ibrWOj")[0].click()
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

