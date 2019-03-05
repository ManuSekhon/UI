// Get DOM nodes
const sidebar = document.getElementsByClassName("sidebar")[0];
const topbar = document.getElementsByClassName("topbar")[0];
const menuBtn = topbar.getElementsByClassName("menu")[0];

// Hides sidebar
const hideSidebar = () => {
    sidebar.style.visibility = "hidden";
    sidebar.style.opacity = 0;
    sidebar.style.width = 0;
}

// Shows sidebar
const showSidebar = () => {
    sidebar.style.visibility = "";
    sidebar.style.width = "248px";
    sidebar.style.opacity = 1;
}

// Toggle sidebar by screen change (883px)
window.matchMedia("(max-width: 900px)").addListener((event) => {
    if (event.matches) hideSidebar();
    else showSidebar();
});

// Toggle sidebar on menu button click
menuBtn.onclick = () => {
    if (sidebar.style.visibility === "") hideSidebar();
    else showSidebar();
}

// Set height of chatbox to match table height
const setChatBoxHeight = () => {
    // Get number of tr in transaction table
    let len = document.getElementsByClassName("people")[0].getElementsByTagName("tr").length;
    // get chat-box node
    let chatBox = document.getElementsByClassName("chat-box")[0].getElementsByClassName("messages")[0];
    // set message box length
    chatBox.style.height = `${(len - 1) * 83}px`;
} 
setChatBoxHeight();