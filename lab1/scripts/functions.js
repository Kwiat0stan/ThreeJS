import * as THREE from "three";
import { ThreeMFLoader, Wireframe } from "three/examples/jsm/Addons.js";
import { color } from "three/examples/jsm/nodes/Nodes.js";

function createDoubleTriangle(renderer, scene, camera, a, b, c) {
  var groupDoubleTriangle = new THREE.Group();

  // * First side
  var v1 = new THREE.Vector3(0.0, 1.0, 0.0);
  var v2 = new THREE.Vector3(1.0, -1.0, 0.0);
  var v3 = new THREE.Vector3(-1.0, -1.0, 0.0);
  var triangle1Geometry = new THREE.BufferGeometry().setFromPoints([
    v1,
    v2,
    v3,
  ]);
  var triangle1Material = new THREE.MeshBasicMaterial({
    color: "green",
    side: THREE.DoubleSide,
  });
  var triangle1Mesh = new THREE.Mesh(triangle1Geometry, triangle1Material);
  groupDoubleTriangle.add(triangle1Mesh);

  // * First side wireframes
  var wireframeMaterial = new THREE.MeshBasicMaterial({
    color: "black",
    wireframe: true,
    side: THREE.DoubleSide,
  });
  var wireframeMesh = new THREE.Mesh(triangle1Geometry, wireframeMaterial);
  groupDoubleTriangle.add(wireframeMesh);

  // * Second side
  var a1 = new THREE.Vector3(0.0, 1.0, 0.0);
  var a2 = new THREE.Vector3(0.0, -1.0, 1.0);
  var a3 = new THREE.Vector3(0.0, -1.0, -1.0);
  var triangle2Geometry = new THREE.BufferGeometry().setFromPoints([
    a1,
    a2,
    a3,
  ]);
  var triangle2Material = new THREE.MeshBasicMaterial({
    color: "green",
    side: THREE.DoubleSide,
  });
  var triangle2Mesh = new THREE.Mesh(triangle2Geometry, triangle2Material);
  groupDoubleTriangle.add(triangle2Mesh);
  groupDoubleTriangle.position.set(a, b, c);

  // * Second side wireframes
  var wireframe2Material = new THREE.MeshBasicMaterial({
    color: "black",
    wireframe: true,
    side: THREE.DoubleSide,
  });
  var wireframe2Mesh = new THREE.Mesh(triangle2Geometry, wireframe2Material);
  groupDoubleTriangle.add(wireframe2Mesh);

  // !
  scene.add(groupDoubleTriangle);
  return groupDoubleTriangle;
}

function createHouse(renderer, scene, camera) {
  var groupHouse = new THREE.Group();

  // * Roof
  var p1 = new THREE.Vector3(-3.0, 0.0, 0.0);
  var p2 = new THREE.Vector3(3.0, 0.0, 0.0);
  var p3 = new THREE.Vector3(0.0, 1.5, 0.0);
  var roofGeometry = new THREE.BufferGeometry().setFromPoints([p1, p2, p3]);
  var roofMaterial = new THREE.MeshBasicMaterial({
    color: "#d66969",
    side: THREE.DoubleSide,
  });
  var roofMesh = new THREE.Mesh(roofGeometry, roofMaterial);
  roofMesh.position.set(3, 1.2, 0.0);
  groupHouse.add(roofMesh);

  // * Block
  var blockGeometry = new THREE.BoxGeometry(4.0, 3.0, 0);
  var blockMaterial = new THREE.MeshBasicMaterial({ color: "grey" });
  var blockMesh = new THREE.Mesh(blockGeometry, blockMaterial);
  blockMesh.position.set(3.0, -0.3, 0.0);
  groupHouse.add(blockMesh);

  // * Window
  var window1Geometry = new THREE.BoxGeometry(1, 1, 0);
  var window1Material = new THREE.MeshBasicMaterial({ color: "#bac9e9" });
  var window1Mesh = new THREE.Mesh(window1Geometry, window1Material);
  window1Mesh.position.set(2, -0.3, 0.0);
  groupHouse.add(window1Mesh);

  // * Door
  var doorGeometry = new THREE.BoxGeometry(1, 2, 0);
  var doorMaterial = new THREE.MeshBasicMaterial({ color: "#a5682a" });
  var doorMesh = new THREE.Mesh(doorGeometry, doorMaterial);
  doorMesh.position.set(4.0, -0.8, 0.0);
  groupHouse.add(doorMesh);

  // * Chimney
  var chimneyGeometry = new THREE.PlaneGeometry(0.7, 1.3);
  var chimneyMaterial = new THREE.MeshBasicMaterial({
    color: "#803f3f",
    side: THREE.DoubleSide,
  });
  var chimneyMesh = new THREE.Mesh(chimneyGeometry, chimneyMaterial);
  chimneyMesh.position.set(2.5, 2.8, -1);
  groupHouse.add(chimneyMesh);

  // * Handle
  var handleGeometry = new THREE.CircleGeometry(0.1);
  var handleMaterial = new THREE.MeshBasicMaterial({ color: "black" });
  var handleMesh = new THREE.Mesh(handleGeometry, handleMaterial);
  handleMesh.position.set(3.7, -0.8, 0.0);
  groupHouse.add(handleMesh);

  scene.add(groupHouse);
}

function createCar(renderer, scene, camera) {
  const groupCar = new THREE.Group();

  // * Body
  const bodyGeometry = new THREE.BoxGeometry(3, 0.5, 1);
  const bodyMaterial = new THREE.MeshBasicMaterial({ color: "#4d4b2c" });
  const bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);

  const upperBodyGeomtery = new THREE.BoxGeometry(1.5, 0.5, 1);
  const uppperBodyMaterial = new THREE.MeshBasicMaterial({ color: "#d7dee4" });
  const upperBodyMesh = new THREE.Mesh(upperBodyGeomtery, uppperBodyMaterial);
  upperBodyMesh.translateY(0.5);

  groupCar.add(bodyMesh);
  groupCar.add(upperBodyMesh);

  // * Wheels
  const wheelGeometry = new THREE.CircleGeometry(0.4);
  const wheelMaterial = new THREE.MeshBasicMaterial({ color: "black" });
  const wheelMesh = new THREE.Mesh(wheelGeometry, wheelMaterial);
  wheelMesh.position.set(-0.8, -0.55, 0.5);

  const wheel2Geometry = new THREE.CircleGeometry(0.4);
  const wheel2Material = new THREE.MeshBasicMaterial({ color: "black" });
  const wheel2Mesh = new THREE.Mesh(wheel2Geometry, wheel2Material);
  wheel2Mesh.position.set(-0.8, -0.55, 0.0);

  const wheel3Geometry = new THREE.CircleGeometry(0.4);
  const wheel3Material = new THREE.MeshBasicMaterial({ color: "black" });
  const wheel3Mesh = new THREE.Mesh(wheel3Geometry, wheel3Material);
  wheel3Mesh.position.set(1.1, -0.55, 0.0);

  const wheel4Geometry = new THREE.CircleGeometry(0.4);
  const wheel4Material = new THREE.MeshBasicMaterial({ color: "black" });
  const wheel4Mesh = new THREE.Mesh(wheel4Geometry, wheel4Material);
  wheel4Mesh.position.set(1.1, -0.55, 0.5);

  groupCar.add(wheelMesh);
  groupCar.add(wheel2Mesh);
  groupCar.add(wheel3Mesh);
  groupCar.add(wheel4Mesh);

  // !
  groupCar.position.set(6, 0, 6);
  scene.add(groupCar);
  return groupCar;
}

export { createDoubleTriangle, createHouse, createCar };
