import * as THREE from "three";
import { createDoubleTriangle } from "./functions";
import { createHouse } from "./functions";
import { createCar } from "./functions";

// * Zmienne te muszą być na zewnątrz aby wszędzie był do nich dostęp
var renderer, scene, camera;

function initializeView() {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  scene.background = new THREE.Color("#b9e8ec");
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  scene.add(camera);
  camera.position.set(0, 2, 16);

  // * Pomocnicze osie symetrii
  const axesHelper = new THREE.AxesHelper(4);
  scene.add(axesHelper);
}

initializeView();
// !

const t1 = createDoubleTriangle(renderer, scene, camera, -3, 0, 0);
const t2 = createDoubleTriangle(renderer, scene, camera, -3, 1.0, 0);
const t3 = createDoubleTriangle(renderer, scene, camera, -3, 2.0, 0);

// TODO: Stworzyć pien choinki
const trunkGeometry = new THREE.BoxGeometry(0.3, 0.7, 0.3);
const trunkMaterial = new THREE.MeshBasicMaterial({ color: "#996633" });
const trunkMesh = new THREE.Mesh(trunkGeometry, trunkMaterial);
trunkMesh.position.set(-3.0, -1.4, 0.0);
scene.add(trunkMesh);

const dom = createHouse(renderer, scene, camera);

const car = createCar(renderer, scene, camera);
let speed = -0.05;

// !
function animate() {
  requestAnimationFrame(animate);

  t1.rotation.y += 0.01;
  t2.rotation.y += 0.01;
  t3.rotation.y += 0.01;
  trunkMesh.rotation.y += 0.01;

  // * Car animation
  console.log(car.position.x);
  car.position.x += speed;
  if (car.position.x <= -8) {
    speed = 0.05;
  } else if (car.position.x >= 8) {
    speed = -0.05;
  }

  renderer.render(scene, camera);
}

animate();
