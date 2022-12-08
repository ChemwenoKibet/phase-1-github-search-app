function getFormValue(){
    let getForm = document. querySelector('#github-form');
    getForm.addEventListener('submit', (e) => {
        e.preventDefault() //function hoisted to be used next 
        fetchData(e.target.search.value)
    })
}

function fetchData(username){ //fetch request is sent to the username endpoint
    fetch(`https://api.github.com/search/users?q=${username}`)
    .then(response => response.json()) // returns the response in json format
    .then(data => profileLoader(data))
}

function profileLoader(dataUrl){
    console.log(dataUrl)
    removeContent(document.querySelector('#user-list')) //Loops through the array one by one in the list 
    for (let i = 0; i<4; i++){
        let imgElement = document.createElement('img')//creates image element
        imgElement.src = dataUrl.items[i].avatar_url;
        let gitProfileLink = document.createElement('p')
        imgElement.style.height = "200px" // styling image height
        imgElement.style.width = '200px' // styling image width
        imgElement.id = 'profile_pic'; // id of the image is profile_pic
        gitProfileLink.textContent = "Git Hub Repo" //
        gitProfileLink.addEventListener('click', () => { //creating event listener when the link is clicked 
            fetch(dataUrl.items[i].repos_url)
            .then(resp => resp.json())
            .then(data => renderRepo(data))
        })
        document.querySelector('#user-list').append(imgElement, gitProfileLink) // adds the image and the github profile link to the user-list array
    }
}

function renderRepo(data){
    removeContent(document.querySelector('#repos-List'))// removes content from the repo list array 
    console.log(data);
    data.forEach(element => {
        let repoName = document.createElement('li');
        repoName.textContent = element['full_name']; // fetches full name data using the foreach loop as it goes over every element in the array
        document.querySelector('#repos-list').append(repoName)
    })
}

function removeContent(parent){
    if (parent!=undefined){
        while(parent.firstChild){
            parent.removeChild(parent.firstChild); 
        }
    }
}

getFormValue();
