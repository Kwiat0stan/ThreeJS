import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 15;

const geometry = new THREE.BoxGeometry(10, 5, 5);
const material = new THREE.MeshBasicMaterial({color: 'red'});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();