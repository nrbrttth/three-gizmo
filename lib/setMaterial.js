export {setMaterial}
function setMaterial(object, material)
{
    object.traverse((child) => {
        if (child.constructor.name === "Mesh") {
            child.material = material;
        }
    })
}
