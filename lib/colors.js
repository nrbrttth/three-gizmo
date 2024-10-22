export { getColor, setColor }

const colors = {
    "color1": "#ff4343",
    "color2": "#43ff43",
    "color3": "#43c0ff",
    "hover": "#ffff43",
    "color4": "#a370fa",
}

function setColor(name, value) {
    colors[name] = value
}
function getColor(name) {
    return colors[name]
}
