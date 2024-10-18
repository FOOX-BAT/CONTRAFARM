document.getElementById('sendContractButton').addEventListener('click', sendContractToSeller);

function sendContractToSeller() {
    // Get values from the form
    const buyerName = document.getElementById("buyerName").value;
    const sellerName = document.getElementById("sellerName").value;
    const cropType = document.getElementById("cropType").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const price = parseFloat(document.getElementById("price").value);
    const deliveryDate = document.getElementById("deliveryDate").value;
    const paymentDue = parseInt(document.getElementById("paymentDue").value, 10);
    const contractPeriod = parseInt(document.getElementById("contractPeriod").value, 10);
    const periodUnit = document.getElementById("periodUnit").value;

    // Validate form inputs
    if (amount < 0 || price < 0 || paymentDue < 0 || contractPeriod < 0) {
        alert("Amount, Price, Payment Due, and Contract Period cannot be negative.");
        return;
    }

    // Create contract object
    const contractData = {
        buyerName,
        sellerName,
        cropType,
        amount,
        price,
        deliveryDate,
        paymentDue,
        contractPeriod,
        periodUnit
    };

    // Store contract in localStorage (simulating sending the contract)
    localStorage.setItem("buyerContract", JSON.stringify(contractData));

    alert("Contract has been sent to the seller!");
}
