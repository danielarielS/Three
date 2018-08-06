//////Scene//////
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.000001,
    5000000
);
camera.position.z = 35;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setSize(600, 600);
document.body.appendChild(renderer.domElement);

/////Lighting/////
var light = new THREE.AmbientLight(0xffffff);
scene.add(light);

///////Bonus: dat.GUI//////
var controls = new function() {
    this.textColor = 0xffae23;
    this.guiRotationX = 0.005;
    this.guiRotationY = 0.005;
}();

var gui = new dat.GUI();
gui.add(controls, "guiRotationX", 0, 0.2);
gui.add(controls, "guiRotationY", 0, 0.2);

gui.addColor(controls, "textColor").onChange(function(e) {
    textMesh.material.color = new THREE.Color(e);
});
///// new stuff //////
var textureLoader = new THREE.TextureLoader();

var texture0 = textureLoader.load("./dog.gif");
var texture1 = textureLoader.load("./dog1.gif");
var texture2 = textureLoader.load("./dog2.gif");
var texture3 = textureLoader.load("./dog3.gif");
var texture4 = textureLoader.load("./dog4.gif");
var texture5 = textureLoader.load("./dog5.gif");

var materials = [
    new THREE.MeshBasicMaterial({ map: texture0 }),
    new THREE.MeshBasicMaterial({ map: texture1 }),
    new THREE.MeshBasicMaterial({ map: texture2 }),
    new THREE.MeshBasicMaterial({ map: texture3 }),
    new THREE.MeshBasicMaterial({ map: texture4 }),
    new THREE.MeshBasicMaterial({ map: texture5 })
];
var faceMaterial = new THREE.MeshFaceMaterial(materials);

var geometry = new THREE.BoxGeometry(20, 20, 20);
var boxMesh = new THREE.Mesh(geometry, faceMaterial);
scene.add(boxMesh);

/////The Mesh /////
// var geometry = new THREE.SphereGeometry(10, 32, 32);
// var material = new THREE.MeshPhongMaterial();
// material.map = new THREE.TextureLoader().load("/earthmap4k.jpg");
// var earthMesh = new THREE.Mesh(geometry, material);

// scene.add(earthMesh);
/////OrbitControls/////
var orbit = new THREE.OrbitControls(camera, renderer.domElement);
orbit.enableZoom = true;

/////Adding a Skybox/////
var imagePrefix = "/";
var urls = [
    "space.jpg",
    "space.jpg",
    "space.jpg",
    "space.jpg",
    "space.jpg",
    "space.jpg"
];
var skyBox = new THREE.CubeTextureLoader().setPath(imagePrefix).load(urls);
scene.background = skyBox;

///// Render ///////
var render = function() {
    requestAnimationFrame(render);
    boxMesh.rotation.x += controls.guiRotationX;
    boxMesh.rotation.y += controls.guiRotationY;
    renderer.render(scene, camera);
};
render();
