async function fetchData(){
    try{
        const artistName = document.getElementById("artist").value;
        const trackTitle = document.getElementById("track").value;
        const response = await fetch(`https://api.lyrics.ovh/v1/${artistName}/${trackTitle}`);
        
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const lyrics = data.lyrics;
        const text = document.getElementById("lyrics");

        text.src = lyrics;
    }
    catch(error){
        console.error(error);
    }
}