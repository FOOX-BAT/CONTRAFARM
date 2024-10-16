document.addEventListener('DOMContentLoaded', function() {
    loadSellerContract();
});

document.getElementById('previewButton').addEventListener('click', previewContract);
document.getElementById('confirmButton').addEventListener('click', confirmContract);
document.getElementById('acceptContractButton').addEventListener('click', acceptContract);

function loadSellerContract() {
    // Fetch contract data from localStorage (simulating receiving contract from seller)
    const sellerContract = JSON.parse(localStorage.getItem('contractData'));

    const sellerContractSection = document.getElementById('sellerContractDetails');
    const acceptContractButton = document.getElementById('acceptContractButton');

    if (sellerContract) {
        // Display the seller's contract
        sellerContractSection.innerHTML = `
            <p><strong>Farmer:</strong> ${sellerContract.farmerName} (${sellerContract.farmerAddress})</p>
            <p><strong>Crop Type:</strong> ${sellerContract.amount} units of ${sellerContract.cropType}</p>
            <p><strong>Price per Unit:</strong> Rs. ${sellerContract.price}</p>
            <p><strong>Delivery Date:</strong> ${sellerContract.deliveryDate}</p>
            <p><strong>Payment Due:</strong> ${sellerContract.paymentDue} days after delivery</p>
            <p><strong>Contract Period:</strong> ${sellerContract.contractPeriod} ${sellerContract.periodUnit}</p>
        `;
        acceptContractButton.style.display = 'inline-block'; // Show accept button
    } else {
        sellerContractSection.innerHTML = `<p>No contract has been received yet.</p>`;
    }
}

function acceptContract() {
    // Automatically fill buyer's form with seller's contract details
    const sellerContract = JSON.parse(localStorage.getItem('contractData'));

    if (sellerContract) {
        document.getElementById('farmerName').value = sellerContract.farmerName;
        document.getElementById('farmerAddress').value = sellerContract.farmerAddress;
        document.getElementById('cropType').value = sellerContract.cropType;
        document.getElementById('amount').value = sellerContract.amount;
        document.getElementById('price').value = sellerContract.price;
        document.getElementById('deliveryDate').value = sellerContract.deliveryDate;
        document.getElementById('paymentDue').value = sellerContract.paymentDue;
    }
}

function previewContract() {
    // Get values from the form
    const buyerName = document.getElementById("buyerName").value;
    const farmerName = document.getElementById("farmerName").value;
    const farmerAddress = document.getElementById("farmerAddress").value;
    const cropType = document.getElementById("cropType").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const price = parseFloat(document.getElementById("price").value);
    const deliveryDate = document.getElementById("deliveryDate").value;
    const paymentDue = parseInt(document.getElementById("paymentDue").value, 10);
    const terms = document.getElementById("terms").value;

    // Validation for empty fields
    if (!buyerName || !farmerName || !cropType || isNaN(amount) || isNaN(price) || !deliveryDate || isNaN(paymentDue)) {
        alert("Please fill out all required fields.");
        return;
    }

    // Ensure amount and price are non-negative
    if (amount < 0 || price < 0) {
        alert("Amount and Price cannot be negative.");
        return;
    }

    // Calculate total price
    const totalPrice = (amount * price).toFixed(2);

    // Generate the contract preview
    const contractPreviewText = `
        <h3>Contract Preview</h3>
        <p><strong>Buyer:</strong> ${buyerName}</p>
        <p><strong>Farmer:</strong> ${farmerName} (${farmerAddress})</p>
        <p><strong>Crop:</strong> ${amount} units of ${cropType}</p>
        <p><strong>Price per Unit:</strong> Rs. ${price}</p>
        <p><strong>Total Price:</strong> Rs. ${totalPrice}</p>
        <p><strong>Proposed Delivery Date:</strong> ${deliveryDate}</p>
        <p><strong>Payment Due:</strong> ${paymentDue} days after delivery</p>
        <p><strong>Additional Terms:</strong> ${terms}</p>
    `;

    // Display the contract preview
    const contractPreviewDiv = document.getElementById("contractPreview");
    contractPreviewDiv.innerHTML = contractPreviewText;
    contractPreviewDiv.style.display = "block";

    // Show the Confirm Contract button
    document.getElementById("confirmButton").style.display = "inline-block";
}

function confirmContract() {
    // Get values from the form
    const contractData = {
        buyerName: document.getElementById("buyerName").value,
        farmerName: document.getElementById("farmerName").value,
        farmerAddress: document.getElementById("farmerAddress").value,
        cropType: document.getElementById("cropType").value,
        amount: document.getElementById("amount").value,
        price: document.getElementById("price").value,
        deliveryDate: document.getElementById("deliveryDate").value,
        paymentDue: document.getElementById("paymentDue").value,
        terms: document.getElementById("terms").value
    };

    // Store contract details in localStorage to simulate sending to farmer
    localStorage.setItem("buyerContractData", JSON.stringify(contractData));

    // Simulate sending the contract
    alert("The contract has been sent to the farmer!");

    // Reset the form and hide preview
    document.getElementById("buyerContractForm").reset();
    document.getElementById("contractPreview").style.display = "none";
    document.getElementById("confirmButton").style.display = "none";
}

