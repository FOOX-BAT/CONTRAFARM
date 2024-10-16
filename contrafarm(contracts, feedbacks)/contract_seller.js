document.getElementById('previewButton').addEventListener('click', previewContract);
document.getElementById('sendButton').addEventListener('click', sendContract);

function previewContract() {
    // Get values from the form
    const farmerName = document.getElementById("farmerName").value;
    const farmerAddress = document.getElementById("farmerAddress").value;
    const buyerName = document.getElementById("buyerName").value;
    const cropType = document.getElementById("cropType").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const price = parseFloat(document.getElementById("price").value);
    const deliveryDate = document.getElementById("deliveryDate").value;
    const paymentDue = parseInt(document.getElementById("paymentDue").value, 10);

    const contractPeriod = parseInt(document.getElementById("contractPeriod").value, 10);
    const periodUnit = document.getElementById("periodUnit").value;

    // Validation for empty fields
    if (!farmerName || !farmerAddress || !buyerName || !cropType || isNaN(amount) || isNaN(price) || !deliveryDate || isNaN(paymentDue) || isNaN(contractPeriod)) {
        alert("Please fill out all fields.");
        return;
    }

    // Ensure amount, price, and contract period are non-negative
    if (amount < 0 || price < 0 || contractPeriod < 0 || paymentDue < 0) {
        alert("Amount, Price, Payment Due, and Contract Period cannot be negative.");
        return;
    }

    // Calculate total price
    const totalPrice = (amount * price).toFixed(2);

    // Generate the contract preview
    const contractPreviewText = `
        <h3>Contract Preview</h3>
        <p><strong>Farmer:</strong> ${farmerName} (${farmerAddress})</p>
        <p><strong>Buyer:</strong> ${buyerName}</p>
        <p><strong>Crop:</strong> ${amount} units of ${cropType}</p>
        <p><strong>Price per Unit:</strong> Rs. ${price}</p>
        <p><strong>Total Price:</strong> Rs. ${totalPrice}</p>
        <p><strong>Delivery Date:</strong> ${deliveryDate}</p>
        <p><strong>Payment Due:</strong> ${paymentDue} days after delivery</p>
        <p><strong>Contract Period:</strong> ${contractPeriod} ${periodUnit}</p>
    `;

    // Display the contract preview
    const contractPreviewDiv = document.getElementById("contractPreview");
    contractPreviewDiv.innerHTML = contractPreviewText;
    contractPreviewDiv.style.display = "block";

    // Show the Send Contract button
    document.getElementById("sendButton").style.display = "inline-block";
}

function sendContract() {
    // Get values from the form
    const contractData = {
        farmerName: document.getElementById("farmerName").value,
        farmerAddress: document.getElementById("farmerAddress").value,
        buyerName: document.getElementById("buyerName").value,
        cropType: document.getElementById("cropType").value,
        amount: document.getElementById("amount").value,
        price: document.getElementById("price").value,
        deliveryDate: document.getElementById("deliveryDate").value,
        paymentDue: document.getElementById("paymentDue").value,
        contractPeriod: document.getElementById("contractPeriod").value,
        periodUnit: document.getElementById("periodUnit").value
    };

    // Store contract details in localStorage to simulate sending to buyer
    localStorage.setItem("contractData", JSON.stringify(contractData));

    // Simulate sending the contract
    alert("The contract has been sent to the buyer!");

    // Reset the form and hide preview
    document.getElementById("contractForm").reset();
    document.getElementById("contractPreview").style.display = "none";
    document.getElementById("sendButton").style.display = "none";
}
