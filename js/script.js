const visitorCount = document.getElementById("visitor-count");

fetch("https://etzv2a27ld.execute-api.af-south-1.amazonaws.com/visitors")
    .then(response => response.json())
    .then(data => {
        visitorCount.textContent = data.count;
    })
    .catch(error => {
        console.error("Visitor counter error:", error);
    });
