document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#github-form");
    form.addEventListener("submit", (e) => { 
        e.preventDefault();
        let search = document.getElementById("search").value;
        fetch(`https://api.github.com/search/users?q=${search}`)
        .then((res) => res.json())
        .then((data) => {
            data.items.forEach((user) => {
                let ul = document.getElementById("user-list");
                let li = document.createElement("li");
                let img = document.createElement("img");
                let h5 = document.createElement("h5");
                let h4 = document.createElement("h4");
                let a = document.createElement("a");
                let profile = document.createElement("View-profile");
                img.src = user.avatar_url;
                h4.innerText = user.login;
                a.href = user.html_url;
                h5.innerHTML = `${user.login}'s Repos`;

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