const LegendPhotoData = {};
let i = 0;
const LegendKeys = [
    "Ash",
    "Bangalore",
    "Bloodhound",
    "Catalyst",
    "Caustic",
    "Crypto",
    "Fuse",
    "Gibraltar",
    "Horizon",
    "Lifeline",
    "Loba",
    "MadMaggie",
    "Mirage",
    "Newcastle",
    "Octane",
    "Pathfinder",
    "Rampart",
    "Revenant",
    "Seer",
    "Valkyrie",
    "Vantage",
    "Wattson",
    "Wraith"
]

const publicPhotoId = "Legends/";
const fileExt = ".png"

LegendKeys.map(name => {
    LegendPhotoData[i] = publicPhotoId + name + "/" + name.toLowerCase() + fileExt;
    i++;
    return true;
})



export default LegendPhotoData