const heading = document.getElementById("heading")
const userName = "Agneay B Nair"
var greetingMessage = ""
const inputField = document.getElementById("searchField")
var today = new Date()
var hoursPassed = today.getHours()

if (hoursPassed < 12){
    greetingMessage = "Good Morning," 
}else if (hoursPassed < 18){
    greetingMessage = "Good Afternoon," 
}else{
    greetingMessage = "Good Evening," 
}

heading.innerHTML = greetingMessage + userName

function search(){
    const searchText = inputField.value
    const query = "https://google.com/search?q="+searchText
    window.location.replace(query)
}

inputField.addEventListener('keydown',(event)=>{
    if (event.key === "Enter"){
        search()
    }
})

function searchSpecific(link){
    window.location.replace(link)
}

const fav1 = document.getElementById("favbtn1")
const fav2 = document.getElementById("favbtn2")
const fav3 = document.getElementById("favbtn3")

fav1.addEventListener('click',()=>{
        searchSpecific("https://github.com")
})

fav2.addEventListener('click',()=>{
        searchSpecific("https://youtube.com")
})

fav3.addEventListener('click',()=>{
        searchSpecific("https://stackoverflow.com")
})

function changeTime() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();

    // Check whether AM or PM
    let newformat = hours >= 12 ? 'PM' : 'AM';

    // Find current hour in AM-PM Format
    hours = hours % 12;

    // To display "0" as "12"
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const reuiredTime = hours + ':' + minutes + ' ' + newformat;
    const timeBody = document.getElementById("Time");
    timeBody.innerHTML = reuiredTime;
}
const timer = setInterval(changeTime(),10)

