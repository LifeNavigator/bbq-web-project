'use strict'

let collectionForm = document.getElementById('email-collector');

collectionForm.addEventListener("submit", event => {
    event.preventDefault(); //note: avoids conflict with any default behaviour

    console.log("The event is firing!")

    let ourFormData = new FormData(event.target)

    let userFirstName = ourFormData.get("fname")

    let updatedHtmlContent = `
                    <h2>Congratulations, ${userFirstName}!</h2>

                    <p>You're on your way to becoming a BBQ Master!</p>
                    
                    <p class="fine-print">We look forward for you to embark on a journey with us</p>
                `
    let ourMainContent = document.getElementById("content-submit");
    ourMainContent.innerHTML = updatedHtmlContent;
})