  // --- Basic Setup ---

  // Find the container div
  const container = document.getElementById('dodecahedron-container');

  // Create a scene
  const scene = new THREE.Scene();

  // Create a camera
  // Using a perspective camera for a 3D effect
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.z = 2; // Move the camera back a bit

  // Create a renderer
  // alpha: true makes the background transparent
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio); // Adjust for high-res displays

  // Add the renderer's canvas element to our container div
  container.appendChild(renderer.domElement);

  // --- Create the Dodecahedron ---

  // 1. Define the geometry (the shape)
  // DodecahedronGeometry(radius)
  const geometry = new THREE.DodecahedronGeometry(0.8);

  // 2. Define the material (the appearance)
  // MeshStandardMaterial is a good choice for realistic lighting
  const material = new THREE.MeshStandardMaterial({
      color: 0xF24F13, // The requested color, hex needs to be prefixed with 0x
      roughness: 0.5,
      metalness: 0.1
  });

  // 3. Create the mesh (the final object)
  const dodecahedron = new THREE.Mesh(geometry, material);
  scene.add(dodecahedron);

  // --- Add Lighting ---

  // An ambient light to softly illuminate the whole scene
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // A directional light to create highlights and shadows
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(1, 1, 1); // Position the light
  scene.add(directionalLight);


  // --- Animation Loop ---

  function animate() {
      // This creates a loop that calls the function on every frame
      requestAnimationFrame(animate);

      // Rotate the dodecahedron on the X and Y axes
      dodecahedron.rotation.x += 0.01;
      dodecahedron.rotation.y += 0.01;

      // Render the scene from the perspective of the camera
      renderer.render(scene, camera);
  }

  // --- Handle Resizing ---
  // This makes sure the object scales correctly if the container size changes
  function onWindowResize() {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
  }
  // Note: For a fixed size div, this isn't strictly necessary, but it's good practice.
  // window.addEventListener('resize', onWindowResize, false);


  // Start the animation!
  animate();