let baseMaterial = new THREE.MeshStandardMaterial({ color: 0x3e3e3e });

let leftWallGeometry = new THREE.BoxGeometry(2, 120, 300);
let rightWallGeometry = new THREE.BoxGeometry(2, 120, 300);
let backWallGeometry = new THREE.BoxGeometry(200, 120, 2);
let frontWallGeometry = new THREE.BoxGeometry(200, 120, 2);
let windowGeometry = new THREE.BoxGeometry(60, 50, 4);
let doorGeometry = new THREE.BoxGeometry(55, 100, 4);

let leftWall = new THREE.Mesh(leftWallGeometry, baseMaterial);
let rightWall = new THREE.Mesh(rightWallGeometry, baseMaterial);
let backWall = new THREE.Mesh(backWallGeometry, baseMaterial);
let frontWall = new THREE.Mesh(frontWallGeometry, baseMaterial);
let window = new THREE.Mesh(windowGeometry, baseMaterial.clone());
let door = new THREE.Mesh(doorGeometry, baseMaterial);

leftWall.position.x = -99;
rightWall.position.x = 99;
backWall.position.z = -149;
frontWall.position.z = 149;
window.position.set(-99, 15, 60);
door.position.set(99, -10, -80);
window.rotation.set(0, THREE.MathUtils.degToRad(-90), 0);
door.rotation.set(0, THREE.MathUtils.degToRad(-90), 0);
// scene.add(window);
let result = OctreeCSG.operation({
    op: "union",
    material: leftWall.material,
    objA: {
        op: "union",
        objA: frontWall,
        objB: backWall
    },
    objB: {
        op: "union",
        objA: {
            op: "subtract",
            objA: rightWall,
            objB: door
        },
        objB: {
            op: "subtract",
            objA: leftWall,
            objB: window
        }
    }
});

console.log(result, result.geometry.index.count / 3);
// result.rotation.set(0, THREE.MathUtils.degToRad(-90), 0);
scene.add(result);


// let door = Shapes.Cube({
//     width: 55,
//     height: 100,
//     depth: 4
// });
// door.material.color.set(0x0000ff);
// door.position.set(-80, -10, -100);
// scene.add(door);