 const form = document.getElementById("billingForm");
    const modal = document.getElementById("receiptModal");
    const receiptContent = document.getElementById("receiptContent");
    const closeModal = document.getElementById("closeModal");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const guest = document.getElementById("guestName").value;
      const roomNo = document.getElementById("roomNumber").value;
      const room = parseFloat(document.getElementById("roomCharge").value) || 0;
      const food = parseFloat(document.getElementById("restaurantCharge").value) || 0;
      const laundry = parseFloat(document.getElementById("laundryCharge").value) || 0;
      const other = parseFloat(document.getElementById("otherCharge").value) || 0;
      const total = room + food + laundry + other;

      receiptContent.innerHTML = `
        <p><strong>Guest:</strong> ${guest}</p>
        <p><strong>Room:</strong> ${roomNo}</p>
        <p>Room Charge: KES ${room.toFixed(2)}</p>
        <p>Restaurant: KES ${food.toFixed(2)}</p>
        <p>Laundry: KES ${laundry.toFixed(2)}</p>
        <p>Other: KES ${other.toFixed(2)}</p>
        <hr />
        <p><strong>Total:</strong> KES ${total.toFixed(2)}</p>
        <p class="text-xs text-gray-500 mt-2">${new Date().toLocaleString()}</p>
      `;

      modal.classList.remove("hidden");
    });

    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });