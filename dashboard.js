const darkModeBtn = document.querySelector(".nyt");
const head = document.head;
const dashboardWrapper = document.getElementById("dashboard-wrapper");
const dark = document.getElementById("dark-style");
const copyIcon = document.getElementById("copy-img");
const depositImg = document.getElementById("deposit-img");
const moreIcon = document.querySelectorAll(".more-icon");
const newNotification = document.getElementById("new-notification");
const chart = document.getElementById("chartImg");
const darkLists = ["dashboard-dark.css", "dashboard.css"];
const newNotificationLists = ["carbon_notification-newwnoti.png", "carbon_notification-newnew-notification.png"];
const moreIconLists = ["carbon_overflow-menu-verticaldotiri.png", "carbon_overflow-menu-verticalmore.png"];
const depositImgLists = ["Vectordep.png", "Vectordeposit-icon.png"];
const copyIconLists = ["Vectorcopi.png", "Vectorcopy.png"];
const chartLists = ["Group 15chartdark.png", "Group 15chart.png"];
const cancelBtnLists = ["cancel-btn2.svg", "cancel-btn.svg"];
let i = 0;

const darkMode = () => {
    // var dark = document.getElementById("dark-style");
    // dark.x = "dashboard-dark" == dark.x ? "dashboard" : "dashboard-dark";
    // dark.href = dark.x + ".css";
    if (i === newNotificationLists.length
        && darkLists.length
        && copyIconLists.length
        && moreIconLists.length
        && depositImgLists.length
        && cancelBtnLists.length
        && chartLists.length) {
        i = 0;
    }
    dark.href = darkLists[i]
    newNotification.src = newNotificationLists[i];
    copyIcon.src = copyIconLists[i];
    moreIcon[0].src = moreIconLists[i];
    moreIcon[1].src = moreIconLists[i];
    moreIcon[2].src = moreIconLists[i];
    depositImg.src = depositImgLists[i];
    chart.src = chartLists[i];
    cancelTransferBtn.src = cancelBtnLists[i];
    cancelNotificationBtn.src = cancelBtnLists[i];
    cancelsavingsBtn.src = cancelBtnLists[i];

    i++;
}

darkModeBtn.addEventListener("click", darkMode);

const menuBtn = document.getElementsByClassName("menu-btn");
const transferWrapper = document.getElementById("transfer-wrapper");
const cancelTransferBtn = document.getElementById("transfer-cancel-btn");
const notificationWrapper = document.getElementById("notification-wrapper");
const cancelNotificationBtn = document.getElementById("notification-cancel-btn");
const savingsWrapper = document.getElementById("savings-wrapper");
const cancelsavingsBtn = document.getElementById("savings-cancel-btn");

for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", () => {
        menuBtn[i].classList.remove("button-background");
        menuBtn[i].classList.add("clicked-btn");
        for (let j = 0; j < menuBtn.length; j++) {
            if (i === j) { continue; }
            menuBtn[j].classList.remove("clicked-btn");
            menuBtn[j].classList.add("button-background");
        }

        if (i === 2) {
            transferWrapper.style.display = "flex";
            cancelTransferBtn.addEventListener("click", () => {
                transferWrapper.style.display = "none";
                dashboardClone.replaceWith(dashboardWrapper);
                menuBtn[1].classList.remove("button-background");
                menuBtn[1].classList.add("clicked-btn");
                menuBtn[2].classList.remove("clicked-btn");
                menuBtn[2].classList.add("button-background");
            });
        } else {
            transferWrapper.style.display = "none";
        }

        if (i === 3) {
            savingsWrapper.style.display = "flex";
            cancelsavingsBtn.addEventListener("click", () => {
                savingsWrapper.style.display = "none";
                dashboardClone.replaceWith(dashboardWrapper);
                menuBtn[1].classList.remove("button-background");
                menuBtn[1].classList.add("clicked-btn");
                menuBtn[3].classList.remove("clicked-btn");
                menuBtn[3].classList.add("button-background");
            });
        } else {
            savingsWrapper.style.display = "none";
        }

        if (i === 4) {
            notificationWrapper.style.display = "flex";
            cancelNotificationBtn.addEventListener("click", () => {
                notificationWrapper.style.display = "none";
                dashboardClone.replaceWith(dashboardWrapper);
                menuBtn[1].classList.remove("button-background");
                menuBtn[1].classList.add("clicked-btn");
                menuBtn[4].classList.remove("clicked-btn");
                menuBtn[4].classList.add("button-background");
            });
        } else {
            notificationWrapper.style.display = "none";
        }

        const dashboardClone = dashboardWrapper.cloneNode(true);
        dashboardWrapper.replaceWith(dashboardClone);
        dashboardClone.style.filter = "blur(0.5px)";
        dashboardClone.style.opacity = "0.3";
    });
}







