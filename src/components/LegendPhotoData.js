//object to hold the photo data
const LegendPhotoData = {};
//iterable variable
let i = 0;
//Array of legend names to create association by name to photo url
const LegendKeys = [
    "Ash",
    "Ballistic",
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

//path params
const publicPhotoId = "Legends/";
const fileExt = ".png"

//map each name of each legend into the correctly formatted cloudniary url
LegendKeys.map(name => {
    LegendPhotoData[i] = publicPhotoId + name + "/" + name.toLowerCase() + fileExt;
    i++;
    return true;
})

//return the mapped legend data object
export default LegendPhotoData