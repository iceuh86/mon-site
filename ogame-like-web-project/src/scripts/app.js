// This file contains the main JavaScript logic for the application, handling game state management and interactions.

document.addEventListener('DOMContentLoaded', () => {
    const gameState = {
        resources: {
            metal: 500,
            crystal: 300,
            deuterium: 200
        },
        fleet: [],
        buildings: {
            metalMine: 1,
            crystalMine: 1,
            deuteriumSynthesizer: 1
        }
    };

    function updateResourcesDisplay() {
        const resourcesElement = document.getElementById('resources');
        resourcesElement.innerHTML = `
            Metal: ${gameState.resources.metal} 
            Crystal: ${gameState.resources.crystal} 
            Deuterium: ${gameState.resources.deuterium}
        `;
    }

    function addFleet(ship) {
        gameState.fleet.push(ship);
        updateFleetDisplay();
    }

    function updateFleetDisplay() {
        const fleetElement = document.getElementById('fleet');
        fleetElement.innerHTML = gameState.fleet.map(ship => `<li>${ship}</li>`).join('');
    }

    // Initial display update
    updateResourcesDisplay();
    updateFleetDisplay();

    // Example of adding a ship to the fleet
    document.getElementById('addShipButton').addEventListener('click', () => {
        const shipName = document.getElementById('shipNameInput').value;
        if (shipName) {
            addFleet(shipName);
            document.getElementById('shipNameInput').value = '';
        }
    });
});