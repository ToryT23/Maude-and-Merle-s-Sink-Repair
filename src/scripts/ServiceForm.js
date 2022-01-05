//HTML input fields are how you collect user data. 
// <div class = "field"
// input type is very important.. text or img <input type = " blah"
// placeholder = allows you to input a short descripition inside the text box
export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="serviceDescription">Description</label>
            <input type="text" name="serviceDescription" placeholder="Enter Descripition Here" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" placeholder="Enter Address Here" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceBudget">Budget</label>
            <input type="number" name="serviceBudget" placeholder="Enter Your Budget"  class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" placeholder="Enter Date You Need Repair By" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}


