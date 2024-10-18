document.addEventListener('DOMContentLoaded', loadContractFromBuyer);
document.getElementById('acceptContractButton').addEventListener('click', acceptContract);

function loadContractFromBuyer() {
    // Retrieve the contract from localStorage
    const contractData = JSON.parse(localStorage.getItem("buyerContract"));

    if (contractData) {
        // Display contract details
        const contractDisplay = `
            <h3>Contract Details</h3>
            <p><strong>Buyer:</strong> ${contractData.buyerName}</p>
            <p><strong>Seller:</strong> ${contractData.sellerName}</p>
            <p><strong>Crop:</strong> ${contractData.amount} units of ${contractData.cropType}</p>
            <p><strong>Price per Unit:</strong> ${contractData.price}</p>
            <p><strong>Delivery Date:</strong> ${contractData.deliveryDate}</p>
            <p><strong>Payment Due:</strong> ${contractData.paymentDue} days after delivery</p>
            <p><strong>Contract Period:</strong> ${contractData.contractPeriod} ${contractData.periodUnit}</p>
        `;

        document.getElementById('contractDisplay').innerHTML = contractDisplay;
        document.getElementById('contractDisplay').style.display = 'block';

        // Show the accept contract button
        document.getElementById('acceptContractButton').style.display = 'inline-block';
    } else {
        alert("No contract found from the buyer.");
    }
}

function acceptContract() {
    alert("You have accepted the contract.");
    // Clear the localStorage to simulate contract completion
    localStorage.removeItem("buyerContract");
}
