// Youtube API

fetch ("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&part=player&id=PLYK5kVPCxrpvzDmSTSVZXgJsM1zgMNyPR&maxResults=4&key=AIzaSyDlL6S3FmtRtCzglcAKi8FA0EyO_bVMvSs")

.then((result)=>{
    return result.json()
}).then((data)=>{
    console.log(data)
    let videos = data.items
    let videoContainer = document.querySelector(".youtube-container")
    for(video of videos){
        videoContainer.innerHTML += `
            
            
            ${video.player.embedHtml}
        `
        
    }
})

