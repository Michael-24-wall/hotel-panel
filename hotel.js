 function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('-translate-x-full');
    }
     function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('-translate-x-full');
    }

    function openAuthModal() {
      document.getElementById('authModal').classList.remove('hidden');
      showTab('login');
    }

    function closeAuthModal() {
      document.getElementById('authModal').classList.add('hidden');
    }

    function showTab(tab) {
      document.getElementById('loginForm').classList.toggle('hidden', tab !== 'login');
      document.getElementById('registerForm').classList.toggle('hidden', tab !== 'register');
    }

    // function loginUser(event) {
    //   event.preventDefault();
    //   const email = document.getElementById('loginEmail').value;
    //   const password = document.getElementById('loginPassword').value;
    //   alert(`Logged in as: ${email}`);
    //   closeAuthModal();
    // }

    // function registerUser(event) {
    //   event.preventDefault();
    //   const email = document.getElementById('registerEmail').value;
    //   const password = document.getElementById('registerPassword').value;
    //   alert(`Registered as: ${email}`);
    //   closeAuthModal();
    // }
    let guests = [
      { name: "Jane Wanjiku", room: 201, status: "Checked In" },
      { name: "Kevin Otieno", room: 105, status: "Pending" }
    ];

    function renderGuestTable() {
      const container = document.getElementById('guestTable');
      if (guests.length === 0) {
        container.innerHTML = "<p class='text-gray-600'>No bookings yet.</p>";
        return;
      }

      let html = `
        <table class="min-w-full text-sm text-left text-gray-700">
          <thead class="bg-gray-100 text-xs uppercase font-bold">
            <tr>
              <th class="px-4 py-3">Name</th>
              <th class="px-4 py-3">Room</th>
              <th class="px-4 py-3">Status</th>
              <th class="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">`;

      guests.forEach((guest, index) => {
        html += `
          <tr>
            <td class="px-4 py-2">${guest.name}</td>
            <td class="px-4 py-2">${guest.room}</td>
            <td class="px-4 py-2">${guest.status}</td>
            <td class="px-4 py-2 text-right space-x-2">
              ${guest.status === 'Checked In' 
                ? `<button onclick="checkout(${index})" class="bg-yellow-500 text-white px-3 py-1 rounded text-xs hover:bg-yellow-600">Check Out</button>` 
                : `<button onclick="checkin(${index})" class="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700">Check In</button>`
              }
              <button onclick="removeGuest(${index})" class="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700">Remove</button>
            </td>
          </tr>`;
      });

      html += "</tbody></table>";
      container.innerHTML = html;
    }

    function checkin(index) {
      guests[index].status = "Checked In";
      renderGuestTable();
    }

    function checkout(index) {
      guests[index].status = "Pending";
      renderGuestTable();
    }

    function removeGuest(index) {
      guests.splice(index, 1);
      renderGuestTable();
    }

    function openForm() {
      document.getElementById('formModal').classList.remove('hidden');
    }

    function closeForm() {
      document.getElementById('formModal').classList.add('hidden');
      document.getElementById('guestName').value = "";
      document.getElementById('roomNumber').value = "";
    }

    function addBooking(event) {
      event.preventDefault();
      const name = document.getElementById('guestName').value.trim();
      const room = document.getElementById('roomNumber').value.trim();
      if (name && room) {
        guests.push({ name, room, status: "Pending" });
        closeForm();
        renderGuestTable();
      }
    }

  
    renderGuestTable();

    function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const pageContent = document.getElementById('pageContent');
    
    sidebar.classList.toggle('-translate-x-full');
    pageContent.classList.toggle('lg:ml-64'); 
  }

  window.addEventListener('click', function (e) {
  const menu = document.getElementById('dropdownMenu');
  const button = document.querySelector('button[onclick="toggleDropdown()"]');
  if (!menu.contains(e.target) && !button.contains(e.target)) {
    menu.classList.add('hidden');
  }
});

function toggleDropdown() {
  const menu = document.getElementById('dropdownMenu');
  menu.classList.toggle('hidden');
}
function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('-translate-x-full');
      document.getElementById('pageContent').classList.toggle('lg:ml-64');
    }


    function updateDashboardCounts() {
  const checkedInGuests = guests.filter(g => g.status === 'Checked In').length;
  document.getElementById('checkedInCount').textContent = checkedInGuests;
}
function checkin(index) {
  guests[index].status = "Checked In";
  renderGuestTable();
  updateDashboardCounts()
}

function checkout(index) {
  guests[index].status = "Pending";
  renderGuestTable();
  updateDashboardCounts(); 
}

function removeGuest(index) {
  guests.splice(index, 1);
  renderGuestTable();
  updateDashboardCounts(); 
}

function addBooking(event) {
  event.preventDefault();
  const name = document.getElementById('guestName').value.trim();
  const room = document.getElementById('roomNumber').value.trim();
  if (name && room) {
    guests.push({ name, room, status: "Pending" });
    closeForm();
    renderGuestTable();
    updateDashboardCounts(); 
  }
}

renderGuestTable();
updateDashboardCounts();

const maintenanceList = document.getElementById("maintenanceList");

    const tasks = [
      { room: "101", issue: "Air Conditioner", status: "Pending" },
      { room: "204", issue: "Leaking Sink", status: "In Progress" },
      { room: "305", issue: "Broken Light", status: "Pending" },
      { room: "108", issue: "TV Not Working", status: "Fixed" },
      { room: "410", issue: "Clogged Toilet", status: "Pending" },
    ];

    function getRandomStatus() {
      const statuses = ["Pending", "In Progress", "Fixed"];
      return statuses[Math.floor(Math.random() * statuses.length)];
    }

    function renderMaintenance() {
      maintenanceList.innerHTML = "";
      tasks.forEach(task => {
        task.status = getRandomStatus();
        const div = document.createElement("div");
        div.className = "bg-white rounded-lg shadow p-4 flex justify-between items-center";

        div.innerHTML = `
          <div>
            <h2 class="text-lg font-semibold">${task.issue}</h2>
            <p class="text-sm text-gray-600">Room ${task.room}</p>
          </div>
          <span class="text-sm px-3 py-1 rounded-full ${
            task.status === "Fixed" ? "bg-green-100 text-green-700" :
            task.status === "In Progress" ? "bg-yellow-100 text-yellow-700" :
            "bg-red-100 text-red-700"
          }">${task.status}</span>
        `;
        maintenanceList.appendChild(div);
      });
    }

    renderMaintenance();
    setInterval(renderMaintenance, 5000); 

     function login() {
      const user = document.getElementById("loginUser").value;
      const pass = document.getElementById("loginPass").value;
      const savedUser = localStorage.getItem("username");
      const savedPass = localStorage.getItem("password");

      if (user === savedUser && pass === savedPass) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
      } else {
        alert("Wrong username or password.");
      }
    }

    function register() {
      const newUser = document.getElementById("registerUser").value;
      const newPass = document.getElementById("registerPass").value;

      if (newUser && newPass) {
        localStorage.setItem("username", newUser);
        localStorage.setItem("password", newPass);
        alert("Registered successfully! You can now log in.");
      } else {
        alert("Please fill in both fields.");
      }
    }

    const requestList = document.getElementById("requestList");

    const sampleRequests = [
      { type: "Room Cleaning", user: "John Doe", status: "Pending" },
      { type: "Food Delivery", user: "Jane Smith", status: "In Progress" },
      { type: "Maintenance", user: "Room 305", status: "Pending" },
      { type: "Towel Request", user: "Room 212", status: "Resolved" },
      { type: "Wake Up Call", user: "Michael", status: "Pending" },
    ];

    function getRandomStatus() {
      const statuses = ["Pending", "In Progress", "Resolved"];
      return statuses[Math.floor(Math.random() * statuses.length)];
    }

    function renderRequests() {
      requestList.innerHTML = ""; 
      sampleRequests.forEach((req, i) => {
        req.status = getRandomStatus(); 
        const card = document.createElement("div");
        card.className = "bg-white rounded-lg shadow p-4 flex justify-between items-center";

        card.innerHTML = `
          <div>
            <h2 class="font-semibold text-lg">${req.type}</h2>
            <p class="text-sm text-gray-600">Requested by: ${req.user}</p>
          </div>
          <span class="text-sm px-3 py-1 rounded-full ${
            req.status === "Resolved" ? "bg-green-100 text-green-700" :
            req.status === "In Progress" ? "bg-yellow-100 text-yellow-700" :
            "bg-red-100 text-red-700"
          }">
            ${req.status}
          </span>
        `;
        requestList.appendChild(card);
      });
    }

    renderRequests();
    setInterval(renderRequests, 5000); 

     const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const toggleLogin = document.getElementById("toggleLogin");
    const toggleRegister = document.getElementById("toggleRegister");
    const formTitle = document.getElementById("formTitle");

    toggleRegister.addEventListener("click", () => {
      loginForm.classList.add("hidden");
      registerForm.classList.remove("hidden");
      toggleRegister.classList.add("hidden");
      toggleLogin.classList.remove("hidden");
      formTitle.textContent = "Register";
    });

    toggleLogin.addEventListener("click", () => {
      registerForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
      toggleLogin.classList.add("hidden");
      toggleRegister.classList.remove("hidden");
      formTitle.textContent = "Login";
    });

    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Logged in successfully (demo)");
    });

    registerForm.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Registered successfully (demo)");
    });