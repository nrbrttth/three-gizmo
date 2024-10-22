export { getColor, setColor }

const colors = {
    "color1": "#ff4343",
    "color2": "#43ff43",
    "color3": "#43c0ff",
    "color4": "#a370fa",
    "hover": "#ffff43",
}

function setColor(name, value) {
    colors[name] = value
}
function getColor(name) {
    return colors[name]
}
