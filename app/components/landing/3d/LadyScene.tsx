"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const LadyHeroScene = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const container = mountRef.current;
        const W = container.clientWidth;
        const H = container.clientHeight;

        // Create renderer with alpha: true for transparent background
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(W, H);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.2;
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        
        // Adjust camera for a good hero shot
        const camera = new THREE.PerspectiveCamera(30, W / H, 0.1, 100);
        camera.position.set(0, 1.4, 5.0);
        camera.lookAt(0, 1.0, 0);

        // Lighting setup
        scene.add(new THREE.AmbientLight(0xffffff, 1.2));
        
        const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
        keyLight.position.set(5, 5, 5);
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.set(1024, 1024);
        scene.add(keyLight);
        
        const fillLight = new THREE.DirectionalLight(0xffffff, 1.2);
        fillLight.position.set(-5, 2, 2);
        scene.add(fillLight);

        const rimLight = new THREE.DirectionalLight(0xffffff, 1.0);
        rimLight.position.set(0, 2, -6);
        scene.add(rimLight);

        // Ground Shadow Catcher
        const shadowFloor = new THREE.Mesh(
            new THREE.PlaneGeometry(10, 10),
            new THREE.ShadowMaterial({ opacity: 0.06 })
        );
        shadowFloor.rotation.x = -Math.PI / 2;
        shadowFloor.receiveShadow = true;
        scene.add(shadowFloor);

        const modelGroup = new THREE.Group();
        scene.add(modelGroup);

        const loader = new GLTFLoader();
        loader.load(
            "/glb/lady.glb",
            (gltf) => {
                const model = gltf.scene;
                
                // Scale and center the model
                const box = new THREE.Box3().setFromObject(model);
                const size = box.getSize(new THREE.Vector3());
                const center = box.getCenter(new THREE.Vector3());
                
                // Target height in 3D units
                const targetHeight = 2.8; 
                const scale = targetHeight / size.y;
                model.scale.setScalar(scale);
                
                // Adjust position
                model.position.x = -center.x * scale;
                model.position.y = -box.min.y * scale; 
                model.position.z = -center.z * scale;

                model.traverse((node) => {
                    if ((node as THREE.Mesh).isMesh) {
                        node.castShadow = true;
                        node.receiveShadow = true;
                        
                        // Enhance materials if needed
                        const mesh = node as THREE.Mesh;
                        if (mesh.material instanceof THREE.MeshStandardMaterial) {
                            mesh.material.envMapIntensity = 1.5;
                        }
                    }
                });
                
                modelGroup.add(model);
                
                // Subtle entrance animation
                modelGroup.position.y = -0.5;
                modelGroup.scale.setScalar(0.9);
            },
            undefined,
            (error) => console.error("Error loading Hero GLB:", error)
        );

        let animId: number;
        const animate = () => {
            animId = requestAnimationFrame(animate);
            
            // Slow auto-rotation
            modelGroup.rotation.y += 0.004;
            
            // Smooth float/entrance
            modelGroup.position.y = THREE.MathUtils.lerp(modelGroup.position.y, 0, 0.05);
            modelGroup.scale.setScalar(THREE.MathUtils.lerp(modelGroup.scale.x, 1, 0.05));
            
            renderer.render(scene, camera);
        };
        animate();

        const onResize = () => {
            if (!container) return;
            const w = container.clientWidth;
            const h = container.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener("resize", onResize);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", onResize);
            renderer.dispose();
            if (container && container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div 
            ref={mountRef} 
            className="w-full h-full cursor-default select-none pointer-events-none" 
            style={{ touchAction: "none" }}
        />
    );
};
