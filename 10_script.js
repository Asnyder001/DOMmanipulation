// ==============================
// Show / Hide Filter Section
// ==============================

function showFilter() {

    var filter = document.getElementById("filterContent");

    // toggle display
    if (filter.style.display === "none") {
        filter.style.display = "block";
    } else {
        filter.style.display = "none";
    }
}


// ==============================
// Show / Hide Add Article Form
// ==============================

function showAddNew() {

    var form = document.getElementById("newContent");

    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "flex";
    } else {
        form.style.display = "none";
    }
}


// ==============================
// Filter Articles Based on Checkboxes
// ==============================

function filterArticles() {

    var opinionBox = document.getElementById("opinionCheckbox").checked;
    var recipeBox = document.getElementById("recipeCheckbox").checked;
    var updateBox = document.getElementById("updateCheckbox").checked;

    var articles = document.querySelectorAll("#articleList article");

    for (var i = 0; i < articles.length; i++) {

        var currentArticle = articles[i];

        if (currentArticle.classList.contains("opinion")) {
            if (opinionBox) {
                currentArticle.style.display = "block";
            } else {
                currentArticle.style.display = "none";
            }
        }

        if (currentArticle.classList.contains("recipe")) {
            if (recipeBox) {
                currentArticle.style.display = "block";
            } else {
                currentArticle.style.display = "none";
            }
        }

        if (currentArticle.classList.contains("update")) {
            if (updateBox) {
                currentArticle.style.display = "block";
            } else {
                currentArticle.style.display = "none";
            }
        }
    }
}


// ==============================
// Add New Article
// ==============================

function addNewArticle() {

    var title = document.getElementById("inputHeader").value;
    var text = document.getElementById("inputArticle").value;

    var type = "";

    if (document.getElementById("opinionRadio").checked) {
        type = "opinion";
    }

    if (document.getElementById("recipeRadio").checked) {
        type = "recipe";
    }

    if (document.getElementById("lifeRadio").checked) {
        type = "update";
    }

    if (title === "" || text === "" || type === "") {
        alert("Please fill out everything.");
        return;
    }

    // create new article element
    var article = document.createElement("article");
    article.className = type;

    // marker
    var marker = document.createElement("span");
    marker.className = "marker";

    if (type === "opinion") {
        marker.innerText = "Opinion";
    }
    if (type === "recipe") {
        marker.innerText = "Recipe";
    }
    if (type === "update") {
        marker.innerText = "Update";
    }

    // title
    var h2 = document.createElement("h2");
    h2.innerText = title;

    // article text
    var p = document.createElement("p");
    p.innerText = text;

    // read more link
    var readMore = document.createElement("p");
    readMore.innerHTML = '<a href="moreDetails.html">Read more...</a>';

    // add everything to article
    article.appendChild(marker);
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(readMore);

    // add article to page
    document.getElementById("articleList").appendChild(article);

    // clear form
    document.getElementById("newContent").reset();
}