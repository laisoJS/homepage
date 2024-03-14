const username = "laisoJS",             // Username
      userIcon = "../img/pdp.png",      // user icon next to the title
      pageIcon = "../img/icon.png";     // Document icon

// Get elements
const user = document.getElementById("username"),
      icon = document.getElementById("pdp"),
      documentIcon = document.getElementById("icon");

icon.src = userIcon;                    // Change the icon depending on the user icon
documentIcon.href = pageIcon;           // Change page icon depending on the page icon

user.innerHTML = `Hello ${username}`;   // Change the title depending of the username
document.title = `Welcome ${username}`; // change the page title depending of the username