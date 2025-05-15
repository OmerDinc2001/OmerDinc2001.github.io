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
        const text = document.ATTRIBUTE_NODE.getElementById("lyrics");

        text.src = text;
    }
    catch{
        console.error(error);
    }
}