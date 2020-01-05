if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    let i = 0;
    document.querySelectorAll(".code").forEach((x) => {
        if(i++ > 1) 	
            x.innerHTML = "Code is not available on mobile devices!";
    });
}