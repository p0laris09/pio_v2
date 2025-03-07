document.addEventListener("DOMContentLoaded", function () {
    console.log("Dropdown script loaded");

    document.querySelectorAll(".menu__item--has-children > a").forEach(function (menuLink) {
        menuLink.addEventListener("click", function (e) {
            e.preventDefault(); // Stop page refresh

            let parentItem = this.parentElement;

            console.log("Clicked on:", this.textContent);

            // Toggle submenu visibility
            let submenu = parentItem.querySelector(".menu--level-2");
            if (submenu) {
                submenu.style.display = submenu.style.display === "block" ? "none" : "block";
            }
        });
    });

    // Optional: Close submenu when clicking outside
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".menu__item--has-children")) {
            document.querySelectorAll(".menu--level-2").forEach(function (submenu) {
                submenu.style.display = "none";
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Handle dropdown menu clicks
    document.querySelectorAll("#navigation .menu__item--has-children").forEach(item => {
        item.addEventListener("click", function (e) {
            e.stopPropagation(); // Prevents event bubbling
            this.classList.toggle("active");
        });
    });

    // Mobile menu toggle button
    let menuToggle = document.getElementById("menuToggle");
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            document.querySelector("#navigation .menu").classList.toggle("show");
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    let contentElement = document.querySelector(".views-field-body .field-content p");
    if (contentElement) {
        let words = contentElement.innerText.split(" ");
        let maxWords = 300; // Set your word limit

        if (words.length > maxWords) {
            contentElement.innerText = words.slice(0, maxWords).join(" ") + "..."; // Add ellipsis
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    let dateElements = document.querySelectorAll(".views-field-field-event-date .field-content");

    dateElements.forEach(dateElement => {
        let dateText = dateElement.innerText.trim(); // Extract existing text
        let dateObj = new Date(dateText); // Convert to Date object

        if (!isNaN(dateObj)) { // Ensure valid date
            let day = dateObj.getDate();
            let month = dateObj.toLocaleString('en-US', { month: 'short' }); // Jan, Feb...
            let year = dateObj.getFullYear();

            // Apply new HTML structure
            dateElement.innerHTML = `<span class="event-day">${day}</span><br> <span class="event-month-year">${month} ${year}</span>`;
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let eventList = document.querySelector(".event-list.contextual-region"); // Corrected selector

    if (eventList) {
        eventList.classList.add("second-section"); // Adds the new class
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let titleFields = document.querySelectorAll(".views-field.views-field-title-1"); // Select all matching elements

    titleFields.forEach(function (element) {
        element.classList.add("card-title"); // Add the class to each matched element
    });
});
(function ($, Drupal) {
    Drupal.behaviors.addUnderlineClass = {
        attach: function (context, settings) {
            $("h3", context).each(function () {
                var $this = $(this);
                var text = $this.text().trim();

                if (text.includes("Event") || text.includes("News")) {
                    $this.addClass("underline");
                    var targetUrl = text.includes("Event") ? "/events" : "/news";

                    // Ensure the button is added below `.views-view-grid--vertical`
                    var gridContainer = $(".views-view-grid--vertical", context);

                    if (gridContainer.length && !gridContainer.next(".see-more-wrapper").length) {
                        gridContainer.after('<div class="see-more-wrapper"><a href="' + targetUrl + '" class="see-more-btn">SEE MORE ' + text.toUpperCase() + ' <span>➜</span></a></div>');
                    }

                    // Prepend "Latest" if not already there
                    if (!text.startsWith("Latest")) {
                        $this.text("Latest " + text);
                    }
                }
            });
        }
    };
})(jQuery, Drupal);
