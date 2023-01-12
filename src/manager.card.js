function managerCard(manager) {
    return `


        <div class="card box-shadow shadow-lg shadow-black" style="width: 18rem">
            <!--user icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" alt="icon"
                class="mx-auto d-block" viewBox="0 0 20 16">

                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
        
                    <!--Manager box-->
            <div class="card-body">
                <h2 class="card-title">${manager.name}</h2>
                <h4 class="card-text">${manager.getRole()}</h4>
            </div>
            <ul class="list-group list-group-flush font-weight-bold">
                <li class="list-group-item">Employee ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.Email}">${manager.Email}</a></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>

    `
}
module.exports = managerCard
