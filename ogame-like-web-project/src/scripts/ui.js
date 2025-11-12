document.addEventListener('DOMContentLoaded', () => {
    const fleetPanel = document.getElementById('fleet-panel');
    const sidebar = document.getElementById('sidebar');
    const navbar = document.getElementById('navbar');

    function updateFleetPanel(data) {
        fleetPanel.innerHTML = '';
        data.forEach(fleet => {
            const fleetItem = document.createElement('div');
            fleetItem.className = 'fleet-item';
            fleetItem.innerHTML = `
                <h3>${fleet.name}</h3>
                <p>Ships: ${fleet.ships}</p>
                <p>Status: ${fleet.status}</p>
            `;
            fleetPanel.appendChild(fleetItem);
        });
    }

    function toggleSidebar() {
        sidebar.classList.toggle('active');
    }

    function updateNavbar(activeSection) {
        const navLinks = navbar.querySelectorAll('a');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Example usage
    const mockFleetData = [
        { name: 'Fleet A', ships: 10, status: 'Ready' },
        { name: 'Fleet B', ships: 5, status: 'In Transit' }
    ];

    updateFleetPanel(mockFleetData);
    updateNavbar('home');

    document.getElementById('toggle-sidebar-btn').addEventListener('click', toggleSidebar);
});