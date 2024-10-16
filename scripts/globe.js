// Globe creation using Three.js and Three-Globe
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, 400);
document.getElementById('globe-container').appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
camera.position.z = 400;

const globe = new ThreeGlobe();
scene.add(globe);

const light = new THREE.AmbientLight(0xbbbbbb);
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.005;
    renderer.render(scene, camera);
}
animate();