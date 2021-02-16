const jokeContainer = document.querySelector("#joke-container");
const btnSubmit = document.querySelector("button[type=submit]");

const config = {
    headers:{
        Accept: 'application/json'
    }
}

const getJoke = async()=>{
    try {
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        jokeContainer.innerHTML = res.data.joke;
    } catch (error) {
        jokeContainer.innerHTML = "Sorry, something went wrong.";
        console.log(error);
    }
}

btnSubmit.addEventListener("click", e=>{
    e.preventDefault();
    getJoke();
});

btnSubmit.addEventListener("mousedown", e=>{
    btnSubmit.style.boxShadow = "inset 9px 9px 20px 7px #000000";
    btnSubmit.style.backgroundColor="#131838";
    btnSubmit.style.color="#BAAA43";
});
btnSubmit.addEventListener("touchstart", e=>{
    btnSubmit.style.boxShadow = "inset 9px 9px 20px 7px #000000";
    btnSubmit.style.backgroundColor="#131838";
    btnSubmit.style.color="#BAAA43";
});

btnSubmit.addEventListener("mouseup", ()=>{
    btnSubmit.style.boxShadow = "5px 5px 12px 0px rgba(0,0,0,0.59)";
    btnSubmit.style.backgroundColor="#03071e";
    btnSubmit.style.color="#FCE130";
})
btnSubmit.addEventListener("touchend", ()=>{
    btnSubmit.style.boxShadow = "5px 5px 12px 0px rgba(0,0,0,0.59)";
    btnSubmit.style.backgroundColor="#03071e";
    btnSubmit.style.color="#FCE130";
})