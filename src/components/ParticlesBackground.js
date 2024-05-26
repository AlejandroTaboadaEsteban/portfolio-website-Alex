/* Big Flex - Animated 3D background*/
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticlesBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const particles = new THREE.BufferGeometry();
    const particleCount = 5000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() * 2 - 1) * 5;
      positions[i * 3 + 1] = (Math.random() * 2 - 1) * 5;
      positions[i * 3 + 2] = (Math.random() * 2 - 1) * 5;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: "#ffffff",
      size: 0.1,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    const animate = () => {
      requestAnimationFrame(animate);
      particleSystem.rotation.x += 0.001;
      particleSystem.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const halfWidth = width / 2;
      const halfHeight = height / 2;
      const rotateX = (clientY - halfHeight) / halfHeight;
      const rotateY = (clientX - halfWidth) / halfWidth;
      particleSystem.rotation.x = rotateX * 0.5;
      particleSystem.rotation.y = rotateY * 0.5;
    };

    mountRef.current.addEventListener('mousemove', handleMouseMove);

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      mountRef.current.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="particles-background" ref={mountRef} />;
};

export default ParticlesBackground;