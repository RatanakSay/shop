function togglePopup(rankName, price) {
    let popup = document.getElementById("popup");
    
    if (popup.style.display === "flex") {
        popup.style.display = "none";
        document.body.style.overflow = "auto";
    } else {
        popup.style.display = "flex";
        document.body.style.overflow = "hidden";
        
        // Update the order summary if rank and price are provided
        if (rankName && price) {
            document.getElementById("selected-rank").textContent = rankName;
            document.getElementById("selected-price").textContent = "$" + price;
            document.getElementById("total-amount").textContent = "$" + price;
        }
    }
}

// Close popup when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        let popup = document.getElementById("popup");
        if (popup.style.display === "flex") {
            togglePopup();
        }
    }
});