class Player {
    constructor(name) {
        this.name = name;
        this.resources = {
            metal: 0,
            crystal: 0,
            deuterium: 0
        };
        this.buildings = {};
        this.technologies = {};
    }

    createPlayer(name) {
        this.name = name;
        this.resources = {
            metal: 500,
            crystal: 500,
            deuterium: 0
        };
        this.buildings = {};
        this.technologies = {};
    }

    updateResources(metal, crystal, deuterium) {
        this.resources.metal += metal;
        this.resources.crystal += crystal;
        this.resources.deuterium += deuterium;
    }

    getPlayerStatus() {
        return {
            name: this.name,
            resources: this.resources,
            buildings: this.buildings,
            technologies: this.technologies
        };
    }
}

export default Player;