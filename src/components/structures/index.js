const structureS = require("../../structureS.json");
const structureM = require("../../structureM.json");
const structureXXL = require("../../structureXXL.json");

const dictionary = {
    S: require("../../structureS.json"),
    M: require("../../structureM.json"),
    XXL: require("../../structureXXL.json")
}

const getStructures = (name) => dictionary[name] ?? dictionary.S;

module.exports = { getStructures }