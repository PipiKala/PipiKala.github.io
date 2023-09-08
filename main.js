/*3d model js */
import * as THREE from 'three';

import {GLTFLoader} from "https://cdn.rawgit.com/mrdoob/three.js/master/examples/jsm/loaders/GLTFLoader.js"
// Get a reference to the container element
const container = document.getElementById("model-container");

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a WebGLRenderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Load and display the 3D model
const loader = new GLTFLoader();
loader.load('C:\Users\Wolve\Documents\GitHub\PipiKala.github.io\CUP OBJ.obj', (gltf) => {
    scene.add(gltf.scene);
});

// Add animation or interactivity as needed

// Render the scene
const animate = () => {
    requestAnimationFrame(animate);
    // Add animations or interactions here if needed
    renderer.render(scene, camera);
};
animate();