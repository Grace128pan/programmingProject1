setCookie = (cName, cValue, exDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (exDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + "; path=/";
}

getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split(";");
    let value;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) value = val.substring(name.length);
    })
    return value;
}

document.querySelector("#cookies-btn").addEventListener("click", () => {
    document.querySelector("#cookies").style.display = "none";
    setCookie("cookie", true, 30);
});

cookieMessage = () => {
    if (!getCookie("cookie")) {
        document.querySelector("#cookies").style.display = "block";
    }
}

window.addEventListener("load", cookieMessage);

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search-button").addEventListener("click", function() {
      // Get the search query entered by the user
      var searchQuery = document.getElementById("search-input").value.toLowerCase();
  
      // Define search mappings
      var searchMappings = {
        "contact": "https://www.linkedin.com/in/zhen-pan-725426275/",
        "contacts": "https://www.linkedin.com/in/zhen-pan-725426275/",
        "contact me": "https://www.linkedin.com/in/zhen-pan-725426275/",
        "cat": "https://www.instagram.com/gracepan128/?igsh=enptNm5zeW9tMGZh",
        "cats": "https://www.instagram.com/gracepan128/?igsh=enptNm5zeW9tMGZh",
        "cat pictures": "cat.html",
        "cat pics": "cat.html",
        "cat gallery": "cat.html",
        "calorie": "calorie.html",
        "calories": "calorie.html"
      };
  
      // Check if search query exists in mappings
      if (searchMappings.hasOwnProperty(searchQuery)) {
        var redirectURL = searchMappings[searchQuery];
        // Redirect to the corresponding URL
        window.location.href = redirectURL;
      } else {
        // If content not found, redirect to Google search
        var googleSearchURL = "https://www.google.com/search?q=" + encodeURIComponent(searchQuery + " site:yourwebsite.com");
        window.location.href = googleSearchURL;
      }
    });
  });
  