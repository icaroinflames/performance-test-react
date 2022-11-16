const structureS = {
    match: (size) => size === "S",
    render: ()=> require("./structureS.json")
}

const structureM = {
    match: (size) => size === "M",
    render: ()=> require("./structureM.json")
}

const structureL = {
    match: (size) => size === "L",
    render: ()=> require("./structureL.json")
}

const structureXL = {
    match: (size) => size === "XL",
    render: ()=> require("./structureXL.json")
}

const structureXXL = {
    match: (size) => size === "XXL",
    render: ()=> require("./structureXXL.json")
}

const strategies = [
    structureS,
    structureM,
    structureL,
    structureXL,
    structureXXL
]

const getStructure = (size) => {
    const strategy = strategies.find(strategy => strategy.match(size));
    return strategy?.render() ?? structureS.render();
}

module.exports = { getStructure } 