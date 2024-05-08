import * as THREE from 'three';

var renderer, scene, camera;

function initializeView(){
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    scene.add(camera);
    camera.position.set(0, 2, 8);

    const axesHelper = new THREE.AxesHelper(4);
    scene.add(axesHelper);
}

initializeView();
// !

// TODO: Function to create triangle and add to scene
function createDoubleSideTriangle(a, b, c){
    var v1 = new THREE.Vector3(0.0, 1.0, 0.0);
    var v2 = new THREE.Vector3(1.0, -1.0, 0.0);
    var v3 = new THREE.Vector3(-1.0, -1.0, 0.0);
    var a1 = new THREE.Vector3(0.0, 1.0, 0.0);
    var a2 = new THREE.Vector3(0.0, -1.0, 1.0);
    var a3 = new THREE.Vector3(0.0, -1.0, -1.0);

    var triangleGeometry = new THREE.BufferGeometry().setFromPoints([v1, v2, v3]);
    var triangleMaterial = new THREE.MeshBasicMaterial({
        color: 'green',
        side: THREE.DoubleSide
    });
    var triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial);
    scene.add(triangleMesh);
    triangleMesh.position.set(a, b, c);

    var triangle2Geomtry = new THREE.BufferGeometry().setFromPoints([a1, a2, a3]);
    var triangle2Material = new THREE.MeshBasicMaterial({
        color: 'red',
        side: THREE.DoubleSide
    });
    var triangle2Mesh = new THREE.Mesh(triangle2Geomtry, triangle2Material);
    scene.add(triangle2Mesh);
    triangle2Mesh.position.set(a, b, c);
    
    return {triangleMesh, triangle2Mesh};
}

// const {triangleMesh: t1_1, triangle2Mesh: t1_2} = createDoubleSideTriangle(2.0, 0.0, 0.0);
createDoubleSideTriangle(2.0, 0.0, 0.0);
for(let i = 0.0; i < 6.0; i += 2){
    createDoubleSideTriangle(2.0, i, 0.0)
}

// !
function animate(){
    requestAnimationFrame(animate);
    // t1_1.rotation.y += 0.01;
    // t1_2.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();