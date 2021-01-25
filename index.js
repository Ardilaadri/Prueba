//getting all required elements
const searchContainer = document.querySelector(".search-input");
const inputBox = searchContainer.querySelector("input");
const autoBox = searchContainer.querySelector(".autocomplete");
const icon = searchContainer.querySelector(".icon");
let linkTag = searchContainer.querySelector("a");
let webLink;

//if user press any key and release
inputBox.onkeyup = (e) => {
  let userData = e.target.value; //user entered data
  let emptyArray = [];
  if (userData) {
    icon.onclick = () => {
      webLink = "https://www.google.com/search?q=" + userData;
      linkTag.setAttribute("href", webLink);
      console.log(webLink);
      linkTag.click();
    };
    emptyArray = suggestions.filter((data) => {
      //filtering array value and user char to lowercase and return only those word/sent which are starts with user entered word
      return data.toLowerCase().startsWith(userData.toLowerCase());
    });

    emptyArray = emptyArray.map((data) => {
      // passing return data inside li tag
      return (data = `<li>${data}</li>`);
    });
    searchContainer.classList.add("active"); //show autocomplete box
    showSuggestions(emptyArray);
    let allList = autoBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding on click attribute in all li tag
      allList[i].setAttribute("onClick", "select(this)");
    }
  } else {
    searchContainer.classList.remove("active"); //hide autocomplete box
  }
};

function select(element) {
  let selectData = element.textContent;
  inputBox.value = selectData; //passing the user selected list item data in textfield
  searchContainer.classList.remove("active");
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join("");
  }
  autoBox.innerHTML = listData;
}
