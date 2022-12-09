document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#github-form");
    form.addEventListener("submit", (e) => { 
        e.preventDefault();
        let search = document.getElementById("search").value;
        fetch(`https://api.github.com/search/users?q=${search}`)
        .then((res) => res.json())
        .then((data) => {
            data.items.forEach((user) => {//iterate over each user in the list that matches the name searched
                let ul = document.getElementById("user-list"); //Get element with id user-list
                let li = document.createElement("li");// create li element
                let img = document.createElement("img"); //create img element
                let h5 = document.createElement("h5");// create h5 element
                let h4 = document.createElement("h4");//create h4 element
                let a = document.createElement("a"); //create a element
                let profile = document.createElement("View-profile");
                img.src = user.avatar_url;
                h4.innerText = user.login;
                a.href = user.html_url;
                h5.innerHTML = `${user.login}'s Repos`; //this will show the users repos

                a.appendChild(profile);
                li.appendChild(img)
                li.appendChild(h4)
                li.appendChild(a)
                li.appendChild(h5)
                ul.appendChild(li)
            });
        });
    })
})