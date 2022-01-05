import { fetchRequests } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"
import { sendRequest } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"


 


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userDescription = document.querySelector("input[name='serviceDescription']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userBudget = document.querySelector("input[name='serviceBudget']").value
        const userDate = document.querySelector("input[name='serviceDate']").value
        
        // below is a truthy statement used to avoid a user from submitting an incomplete form
        if (userDescription && userAddress && userBudget && userDate){
           
         // Send the data to the API for permanent storage
            const dataToSendToAPI = {
                description: userDescription,
                address: userAddress,
                budget: userBudget,
                neededBy: userDate
            }
            // Send the data to the API for permanent storage
            sendRequest(dataToSendToAPI)
        }

    }
})


mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})


const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()

// this mainContainer.addEventListener is use to render() the function to build all the HTML again.
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)