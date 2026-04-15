import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function initScene(container: HTMLDivElement): () => void {
    const W = container.clientWidth;
    const H = container.clientHeight;

    // ── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // ── Scene ─────────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();

    // ── Camera ────────────────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(35, W / H, 0.1, 100);
    camera.position.set(0, 1.4, 4.5);
    camera.lookAt(0, 1.0, 0);

    // ── Grid overlay plane ────────────────────────────────────────────────────
    const gridCanvas = document.createElement("canvas");
    gridCanvas.width = 1024; gridCanvas.height = 1024;
    const gc = gridCanvas.getContext("2d")!;
    gc.clearRect(0, 0, 1024, 1024);
    gc.strokeStyle = "#e5e5e5"; 
    gc.lineWidth = 1.5;
    const gStep = 1024 / 14; 
    for (let i = 0; i <= 14; i++) {
        gc.beginPath(); gc.moveTo(i * gStep, 0); gc.lineTo(i * gStep, 1024); gc.stroke();
        gc.beginPath(); gc.moveTo(0, i * gStep); gc.lineTo(1024, i * gStep); gc.stroke();
    }
    const gridTex = new THREE.CanvasTexture(gridCanvas);
    gridTex.wrapS = gridTex.wrapT = THREE.RepeatWrapping;
    gridTex.repeat.set(1.5, 1.5);
    const gridPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(30, 30),
        new THREE.MeshBasicMaterial({ map: gridTex, transparent: true, opacity: 0.15 })
    );
    gridPlane.position.set(0, 5, -5);
    scene.add(gridPlane);

    // ── Ground Shadow Catcher ──────────────────────────────────────────────────
    const shadowFloor = new THREE.Mesh(
        new THREE.PlaneGeometry(100, 100),
        new THREE.ShadowMaterial({ opacity: 0.05 })
    );
    shadowFloor.rotation.x = -Math.PI / 2;
    shadowFloor.position.y = 0;
    shadowFloor.receiveShadow = true;
    scene.add(shadowFloor);

    // ── Lights ────────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 1.4));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.6);
    keyLight.position.set(5, 8, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(2048, 2048);
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 20;
    keyLight.shadow.camera.left = -5;
    keyLight.shadow.camera.right = 5;
    keyLight.shadow.camera.top = 5;
    keyLight.shadow.camera.bottom = -5;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
    fillLight.position.set(-5, 4, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.6);
    rimLight.position.set(0, 4, -8);
    scene.add(rimLight);

    // ── Model group ───────────────────────────────────────────────────────────
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // ── Load GLB ──────────────────────────────────────────────────────────────
    const loader = new GLTFLoader();
    loader.load(
        "/glb/lady.glb",
        (gltf) => {
            const model = gltf.scene;
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            
            const scale = 2.4 / size.y; 
            model.scale.setScalar(scale);
            model.position.x = -center.x * scale;
            model.position.y = -box.min.y * scale;
            model.position.z = -center.z * scale;
            
            model.traverse((node) => {
                if ((node as THREE.Mesh).isMesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            });
            
            modelGroup.add(model);

            // ── ROTATION ELLIPSES ─────────────────────────────────────────────
            const ellipseMat = new THREE.LineBasicMaterial({ color: 0xbbbbbb });
            const makeEllipseLine = (rx: number, rz: number, y: number) => {
                const pts: THREE.Vector3[] = [];
                for (let i = 0; i <= 96; i++) {
                    const a = (i / 96) * Math.PI * 2;
                    pts.push(new THREE.Vector3(Math.cos(a) * rx, y, Math.sin(a) * rz));
                }
                const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), ellipseMat);
                modelGroup.add(line);
                return line;
            };

            const topY = size.y * scale + 0.15;
            makeEllipseLine(0.8, 0.22, topY); // around head
            makeEllipseLine(0.88, 0.25, -0.1); // around feet

            // Arrow heads
            const arrMat = new THREE.LineBasicMaterial({ color: 0xbbbbbb });
            const arrowHead = (x: number, y: number, z: number, dx: number, dz: number) => {
                const s = 0.12;
                const pts = [
                    new THREE.Vector3(x - dx * s - dz * s * 0.5, y, z - dz * s + dx * s * 0.5),
                    new THREE.Vector3(x, y, z),
                    new THREE.Vector3(x - dx * s + dz * s * 0.5, y, z - dz * s - dx * s * 0.5),
                ];
                const l = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), arrMat);
                modelGroup.add(l);
            };
            arrowHead(-0.8, topY, 0, -1, 0);   // top arrow
            arrowHead(0.88, -0.1, 0, 1, 0);    // bottom arrow
        },
        undefined,
        (error) => console.error("Error loading GLB:", error)
    );

    // ── Drag to rotate ────────────────────────────────────────────────────────
    let isDragging = false;
    let prevX = 0;
    const onDown = (e: MouseEvent | TouchEvent) => {
        isDragging = true;
        prevX = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    };
    const onUp = () => { isDragging = false; };
    const onMove = (e: MouseEvent | TouchEvent) => {
        if (!isDragging) return;
        const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
        modelGroup.rotation.y += (x - prevX) * 0.01;
        prevX = x;
    };
    renderer.domElement.addEventListener("mousedown", onDown);
    renderer.domElement.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });

    // ── Animate ───────────────────────────────────────────────────────────────
    let animId: number;
    const animate = () => {
        animId = requestAnimationFrame(animate);
        if (!isDragging) modelGroup.rotation.y += 0.005;
        renderer.render(scene, camera);
    };
    animate();

    // ── Resize ────────────────────────────────────────────────────────────────
    const onResize = () => {
        if (!container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", onResize);
        window.removeEventListener("mouseup", onUp);
        window.removeEventListener("touchend", onUp);
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("touchmove", onMove);
        renderer.domElement.removeEventListener("mousedown", onDown);
        renderer.domElement.removeEventListener("touchstart", onDown);
        renderer.dispose();
        if (container && container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
        }
    };
}