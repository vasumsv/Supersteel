import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

function GroundPlane() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#d8dce0" roughness={0.95} metalness={0.02} />
      </mesh>
      <gridHelper args={[50, 50, '#c0c4c8', '#c0c4c8']} position={[0, 0.01, 0]} />
    </>
  );
}

function HColumn({ position, height, material }: { position: [number, number, number]; height: number; material: THREE.Material }) {
  const flangeWidth = 0.35;
  const flangeThickness = 0.06;
  const webThickness = 0.04;
  const webHeight = height;

  return (
    <group position={position}>
      <mesh castShadow>
        <boxGeometry args={[flangeWidth, flangeThickness, flangeWidth]} />
        <primitive object={material} attach="material" />
      </mesh>
      <mesh position={[0, -height / 2 + flangeThickness / 2, 0]} castShadow>
        <boxGeometry args={[webThickness, webHeight - flangeThickness, flangeWidth]} />
        <primitive object={material} attach="material" />
      </mesh>
      <mesh position={[0, -height + flangeThickness / 2, 0]} castShadow>
        <boxGeometry args={[flangeWidth, flangeThickness, flangeWidth]} />
        <primitive object={material} attach="material" />
      </mesh>
    </group>
  );
}

function IBeam({ position, length, rotation, material, isVertical = false }: { position: [number, number, number]; length: number; rotation: [number, number, number]; material: THREE.Material; isVertical?: boolean }) {
  const flangeWidth = 0.25;
  const flangeThickness = 0.05;
  const webThickness = 0.035;
  const beamHeight = 0.3;

  return (
    <group position={position} rotation={rotation}>
      <mesh castShadow>
        <boxGeometry args={[length, flangeThickness, flangeWidth]} />
        <primitive object={material} attach="material" />
      </mesh>
      <mesh position={[0, -beamHeight / 2 + flangeThickness / 2, 0]} castShadow>
        <boxGeometry args={[length, beamHeight - flangeThickness, webThickness]} />
        <primitive object={material} attach="material" />
      </mesh>
      <mesh position={[0, -beamHeight + flangeThickness / 2, 0]} castShadow>
        <boxGeometry args={[length, flangeThickness, flangeWidth]} />
        <primitive object={material} attach="material" />
      </mesh>
    </group>
  );
}

function ConnectionPlate({ position, size, material }: { position: [number, number, number]; size: [number, number, number]; material: THREE.Material }) {
  return (
    <mesh position={position} castShadow>
      <boxGeometry args={size} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}

function BoltGroup({ position, material }: { position: [number, number, number]; material: THREE.Material }) {
  const boltPositions: [number, number, number][] = [
    [0.08, 0, 0.08],
    [0.08, 0, -0.08],
    [-0.08, 0, 0.08],
    [-0.08, 0, -0.08],
  ];

  return (
    <group position={position}>
      {boltPositions.map((pos, idx) => (
        <mesh key={idx} position={pos} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.08, 8]} />
          <primitive object={material} attach="material" />
        </mesh>
      ))}
    </group>
  );
}

function ConstructionSite({ startDelay = 0 }: { startDelay?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const [phase, setPhase] = useState(0);

  useFrame((state) => {
    const elapsed = Math.max(0, state.clock.getElapsedTime() - startDelay);
    setPhase(elapsed);
  });

  const steelMaterial = new THREE.MeshStandardMaterial({
    color: '#4A5568',
    metalness: 0.9,
    roughness: 0.35,
    envMapIntensity: 1.5,
  });

  const steelBeamMaterial = new THREE.MeshStandardMaterial({
    color: '#3A4556',
    metalness: 0.88,
    roughness: 0.38,
    envMapIntensity: 1.4,
  });

  const plateMaterial = new THREE.MeshStandardMaterial({
    color: '#2D3748',
    metalness: 0.92,
    roughness: 0.32,
    envMapIntensity: 1.3,
  });

  const boltMaterial = new THREE.MeshStandardMaterial({
    color: '#1a202c',
    metalness: 0.95,
    roughness: 0.25,
  });

  const deckingMaterial = new THREE.MeshStandardMaterial({
    color: '#536878',
    metalness: 0.82,
    roughness: 0.45,
    envMapIntensity: 1.2,
  });

  const floors = 6;
  const floorHeight = 1.8;
  const buildingWidth = 6;
  const buildingDepth = 4.5;

  const foundationProgress = Math.min(phase / 1.5, 1);
  const columnsProgress = Math.max(0, Math.min((phase - 1.5) / 2.5, 1));
  const beamsProgress = Math.max(0, Math.min((phase - 2.5) / 1.5, 1));
  const decksProgress = Math.max(0, Math.min((phase - 3.5) / 1.5, 1));
  const wallsProgress = Math.max(0, Math.min((phase - 5.0) / 1.5, 1));
  const finalProgress = Math.max(0, Math.min((phase - 6.5) / 1, 1));

  const elements: JSX.Element[] = [];

  if (foundationProgress > 0) {
    const gridLines: JSX.Element[] = [];
    for (let i = -3; i <= 3; i++) {
      gridLines.push(
        <mesh
          key={`grid-x-${i}`}
          position={[i * 1, 0.02, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[0.02 * foundationProgress, buildingDepth * foundationProgress]} />
          <meshBasicMaterial color="#C89B3C" opacity={0.6} transparent />
        </mesh>
      );
    }
    for (let i = -2; i <= 2; i++) {
      gridLines.push(
        <mesh
          key={`grid-z-${i}`}
          position={[0, 0.02, i * 1]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[buildingWidth * foundationProgress, 0.02 * foundationProgress]} />
          <meshBasicMaterial color="#C89B3C" opacity={0.6} transparent />
        </mesh>
      );
    }
    elements.push(...gridLines);
  }

  if (columnsProgress > 0) {
    const columnPositions: [number, number][] = [
      [-buildingWidth / 2, -buildingDepth / 2],
      [buildingWidth / 2, -buildingDepth / 2],
      [-buildingWidth / 2, buildingDepth / 2],
      [buildingWidth / 2, buildingDepth / 2],
      [0, -buildingDepth / 2],
      [0, buildingDepth / 2],
    ];

    for (let floor = 0; floor < floors; floor++) {
      const floorColumnProgress = Math.max(0, Math.min((columnsProgress * floors - floor), 1));

      if (floorColumnProgress > 0) {
        columnPositions.forEach((pos, idx) => {
          const height = floorHeight * floorColumnProgress;

          elements.push(
            <HColumn
              key={`column-${floor}-${idx}`}
              position={[pos[0], floor * floorHeight + height, pos[1]]}
              height={height}
              material={steelMaterial}
            />
          );

          if (floorColumnProgress > 0.8 && floor > 0) {
            elements.push(
              <ConnectionPlate
                key={`column-plate-${floor}-${idx}`}
                position={[pos[0], floor * floorHeight, pos[1]]}
                size={[0.45, 0.06, 0.45]}
                material={plateMaterial}
              />
            );

            elements.push(
              <BoltGroup
                key={`column-bolts-${floor}-${idx}`}
                position={[pos[0], floor * floorHeight, pos[1]]}
                material={boltMaterial}
              />
            );
          }
        });
      }
    }
  }

  if (beamsProgress > 0) {
    for (let floor = 1; floor <= floors; floor++) {
      const floorBeamProgress = Math.max(0, Math.min((beamsProgress * floors - floor + 1), 1));

      if (floorBeamProgress > 0) {
        const y = floor * floorHeight;

        const primaryBeams = [
          { pos: [0, y, -buildingDepth / 2], length: buildingWidth * floorBeamProgress, rot: [0, 0, 0] as [number, number, number] },
          { pos: [0, y, buildingDepth / 2], length: buildingWidth * floorBeamProgress, rot: [0, 0, 0] as [number, number, number] },
          { pos: [-buildingWidth / 2, y, 0], length: buildingDepth * floorBeamProgress, rot: [0, Math.PI / 2, 0] as [number, number, number] },
          { pos: [buildingWidth / 2, y, 0], length: buildingDepth * floorBeamProgress, rot: [0, Math.PI / 2, 0] as [number, number, number] },
        ];

        primaryBeams.forEach((beam, idx) => {
          elements.push(
            <IBeam
              key={`beam-${floor}-${idx}`}
              position={beam.pos as [number, number, number]}
              length={beam.length}
              rotation={beam.rot}
              material={steelBeamMaterial}
            />
          );
        });

        const secondaryBeams = [
          { pos: [0, y, 0], length: buildingDepth * 0.9 * floorBeamProgress, rot: [0, Math.PI / 2, 0] as [number, number, number] },
        ];

        secondaryBeams.forEach((beam, idx) => {
          elements.push(
            <IBeam
              key={`sec-beam-${floor}-${idx}`}
              position={beam.pos as [number, number, number]}
              length={beam.length}
              rotation={beam.rot}
              material={steelBeamMaterial}
            />
          );
        });

        if (floorBeamProgress > 0.7) {
          const connectionPoints: [number, number, number][] = [
            [-buildingWidth / 2, y, -buildingDepth / 2],
            [buildingWidth / 2, y, -buildingDepth / 2],
            [-buildingWidth / 2, y, buildingDepth / 2],
            [buildingWidth / 2, y, buildingDepth / 2],
            [0, y, -buildingDepth / 2],
            [0, y, buildingDepth / 2],
          ];

          connectionPoints.forEach((pos, idx) => {
            elements.push(
              <ConnectionPlate
                key={`beam-plate-${floor}-${idx}`}
                position={pos}
                size={[0.35, 0.05, 0.25]}
                material={plateMaterial}
              />
            );
          });
        }
      }
    }
  }

  if (decksProgress > 0) {
    for (let floor = 1; floor <= floors; floor++) {
      const floorDeckProgress = Math.max(0, Math.min((decksProgress * floors - floor + 1), 1));

      if (floorDeckProgress > 0) {
        const y = floor * floorHeight - 0.15;
        const deckThickness = 0.05;
        const deckPanelWidth = 1.2;
        const numPanels = Math.ceil(buildingWidth / deckPanelWidth);

        for (let i = 0; i < numPanels; i++) {
          const xOffset = -buildingWidth / 2 + (i + 0.5) * deckPanelWidth;
          const panelProgress = Math.max(0, Math.min((floorDeckProgress * numPanels - i), 1));

          if (panelProgress > 0) {
            elements.push(
              <mesh
                key={`deck-panel-${floor}-${i}`}
                position={[xOffset, y, 0]}
                castShadow
                receiveShadow
              >
                <boxGeometry args={[deckPanelWidth * 0.95, deckThickness, buildingDepth * panelProgress * 0.98]} />
                <primitive object={deckingMaterial} attach="material" />
              </mesh>
            );

            const ribSpacing = 0.15;
            const numRibs = Math.floor((buildingDepth * panelProgress) / ribSpacing);

            for (let r = 0; r < numRibs; r++) {
              const zOffset = -buildingDepth * panelProgress / 2 + r * ribSpacing;
              elements.push(
                <mesh
                  key={`deck-rib-${floor}-${i}-${r}`}
                  position={[xOffset, y + deckThickness / 2, zOffset]}
                  castShadow
                >
                  <boxGeometry args={[deckPanelWidth * 0.9, 0.02, 0.01]} />
                  <primitive object={steelBeamMaterial} attach="material" />
                </mesh>
              );
            }
          }
        }
      }
    }
  }

  if (wallsProgress > 0) {
    const bracingFloors = [2, 4];

    bracingFloors.forEach((floor) => {
      if (floor <= floors) {
        const floorBracingProgress = Math.max(0, Math.min((wallsProgress * 2 - (bracingFloors.indexOf(floor))), 1));

        if (floorBracingProgress > 0) {
          const y1 = (floor - 1) * floorHeight;
          const y2 = floor * floorHeight;
          const bracingWidth = 0.08;

          const bracingConfigs = [
            {
              start: [-buildingWidth / 2, y1, -buildingDepth / 2],
              end: [0, y2, -buildingDepth / 2],
            },
            {
              start: [0, y1, -buildingDepth / 2],
              end: [-buildingWidth / 2, y2, -buildingDepth / 2],
            },
          ];

          bracingConfigs.forEach((config, idx) => {
            const dx = config.end[0] - config.start[0];
            const dy = config.end[1] - config.start[1];
            const dz = config.end[2] - config.start[2];
            const length = Math.sqrt(dx * dx + dy * dy + dz * dz) * floorBracingProgress;

            const midX = (config.start[0] + config.end[0]) / 2;
            const midY = (config.start[1] + config.end[1]) / 2;
            const midZ = (config.start[2] + config.end[2]) / 2;

            const angleY = Math.atan2(dx, dz);
            const angleZ = Math.atan2(dy, Math.sqrt(dx * dx + dz * dz));

            elements.push(
              <mesh
                key={`bracing-${floor}-${idx}`}
                position={[midX, midY, midZ]}
                rotation={[0, angleY, angleZ]}
                castShadow
              >
                <boxGeometry args={[bracingWidth, length, bracingWidth]} />
                <primitive object={steelBeamMaterial} attach="material" />
              </mesh>
            );
          });
        }
      }
    });
  }

  return <group ref={groupRef}>{elements}</group>;
}

function Camera({ startDelay = 0 }: { startDelay?: number }) {
  const { camera } = useThree();
  const isMobile = window.innerWidth < 768;

  useFrame((state) => {
    const elapsed = Math.max(0, state.clock.getElapsedTime() - startDelay);

    const startX = isMobile ? 14 : 12;
    const startY = isMobile ? 7 : 6;
    const startZ = isMobile ? 14 : 12;

    const endX = isMobile ? 10 : 8;
    const endY = isMobile ? 6 : 5;
    const endZ = isMobile ? 12 : 10;

    const progress = Math.min(elapsed / 8, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3);

    camera.position.x = startX + (endX - startX) * easeProgress;
    camera.position.y = startY + (endY - startY) * easeProgress;
    camera.position.z = startZ + (endZ - startZ) * easeProgress;

    camera.lookAt(0, isMobile ? 3.5 : 4, 0);
  });

  return null;
}

function Scene({ startDelay = 0 }: { startDelay?: number }) {
  return (
    <>
      <color attach="background" args={['#e0e5ea']} />
      <fog attach="fog" args={['#e0e5ea', 20, 45]} />

      <ambientLight intensity={0.6} />
      <hemisphereLight args={['#d0e0f0', '#9aa5b0', 0.6]} />

      <directionalLight
        position={[15, 20, 10]}
        intensity={2.2}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
        shadow-bias={-0.0001}
      />

      <directionalLight
        position={[-12, 18, -8]}
        intensity={1.2}
        color="#e8f2fc"
      />

      <pointLight position={[0, 14, 0]} intensity={0.8} color="#ffffff" />

      <spotLight
        position={[10, 16, 12]}
        angle={0.5}
        penumbra={0.6}
        intensity={1.2}
        color="#ffffff"
        castShadow
      />

      <spotLight
        position={[-8, 12, -10]}
        angle={0.4}
        penumbra={0.5}
        intensity={0.8}
        color="#e0f0ff"
      />

      <GroundPlane />
      <ConstructionSite startDelay={startDelay} />
      <Camera startDelay={startDelay} />
    </>
  );
}

export default function OpeningAnimation({ onComplete }: { onComplete: () => void }) {
  const [showSkip, setShowSkip] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [logoIntroComplete, setLogoIntroComplete] = useState(false);

  useEffect(() => {
    const logoIntroTimer = setTimeout(() => setLogoIntroComplete(true), 4000);
    const skipTimer = setTimeout(() => setShowSkip(true), 6000);
    const logoTimer = setTimeout(() => setShowLogo(true), 10000);
    const completeTimer = setTimeout(() => onComplete(), 12000);

    return () => {
      clearTimeout(logoIntroTimer);
      clearTimeout(skipTimer);
      clearTimeout(logoTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] bg-[#e0e5ea] flex items-center justify-center"
    >
      <AnimatePresence>
        {!logoIntroComplete && (
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            animate={{ scale: [1, 1, 1.15] }}
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 3.5, times: [0, 0.75, 1], ease: [0.22, 1, 0.36, 1] }
            }}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#d5dce3] via-[#e0e5ea] to-[#dae0e6] z-50 overflow-hidden"
          >
            {[...Array(60)].map((_, i) => {
              const size = Math.random() * 6 + 2;
              const isGold = Math.random() > 0.4;
              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: isGold
                      ? `radial-gradient(circle, #f4d03f 0%, #f7dc6f 40%, transparent 70%)`
                      : `radial-gradient(circle, #fff 0%, #e8e8e8 40%, transparent 70%)`,
                    boxShadow: isGold
                      ? `0 0 ${size * 2}px rgba(244, 208, 63, 0.8), 0 0 ${size * 4}px rgba(244, 208, 63, 0.4)`
                      : `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`,
                  }}
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  animate={{
                    opacity: [0, 1, 0.9, 0.7, 0],
                    scale: [0, 1.5, 1.8, 1.2, 0],
                    rotate: [0, 180, 360],
                    x: [(Math.random() - 0.5) * 150, (Math.random() - 0.5) * 300],
                    y: [(Math.random() - 0.5) * 150, (Math.random() - 0.5) * 300],
                  }}
                  transition={{
                    duration: 1.5 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2.5,
                    ease: "easeOut"
                  }}
                />
              );
            })}

            {[...Array(20)].map((_, i) => {
              const angle = (i / 20) * Math.PI * 2;
              const distance = 150 + Math.random() * 100;
              return (
                <motion.div
                  key={`star-${i}`}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: '3px',
                    height: '3px',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0, 2, 1.5, 0],
                    x: [0, Math.cos(angle) * distance],
                    y: [0, Math.sin(angle) * distance],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: 2.3 + (i * 0.05),
                    ease: "easeOut"
                  }}
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background: 'radial-gradient(circle, #f4d03f 0%, #f7dc6f 50%, transparent 80%)',
                      boxShadow: '0 0 12px rgba(244, 208, 63, 0.9), 0 0 24px rgba(244, 208, 63, 0.5)',
                    }}
                  />
                </motion.div>
              );
            })}

            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.4, 0.6, 0.5, 0] }}
              transition={{
                duration: 4,
                times: [0, 0.3, 0.5, 0.8, 1],
                ease: "easeInOut"
              }}
              style={{
                background: 'radial-gradient(circle at center, rgba(244, 208, 63, 0.15) 0%, rgba(200, 170, 80, 0.1) 40%, transparent 70%)',
              }}
            />

            <motion.div
              style={{ perspective: '2000px' }}
              className="relative z-10"
            >
              <motion.div
                initial={{
                  y: '120vh',
                  rotateY: 0,
                  scale: 0.5,
                }}
                animate={{
                  y: 0,
                  rotateY: 720,
                  scale: [0.5, 1.3, 1.4, 1.4],
                }}
                transition={{
                  duration: 3.5,
                  ease: [0.22, 1, 0.36, 1],
                  times: [0, 0.6, 0.75, 1],
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <motion.img
                  src="/logo.png"
                  alt="Super Steels"
                  className="h-40 md:h-52 object-contain"
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.2)) brightness(1.1)',
                    backfaceVisibility: 'visible',
                  }}
                  animate={{
                    filter: [
                      'drop-shadow(0 25px 50px rgba(0,0,0,0.2)) brightness(1.1)',
                      'drop-shadow(0 35px 70px rgba(244, 208, 63, 0.6)) brightness(1.4)',
                      'drop-shadow(0 30px 60px rgba(244, 208, 63, 0.4)) brightness(1.25)',
                      'drop-shadow(0 30px 60px rgba(244, 208, 63, 0.4)) brightness(1.25)',
                    ]
                  }}
                  transition={{
                    duration: 3.5,
                    times: [0, 0.5, 0.7, 1],
                  }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.8, 0.7, 0] }}
              transition={{
                duration: 3.5,
                times: [0, 0.45, 0.65, 0.85, 1],
                ease: "easeInOut"
              }}
            >
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-2 h-2"
                  style={{
                    background: 'radial-gradient(circle, rgba(244, 208, 63, 0.9) 0%, rgba(247, 220, 111, 0.6) 30%, transparent 70%)',
                    boxShadow: '0 0 20px rgba(244, 208, 63, 0.8)',
                  }}
                  initial={{
                    scale: 0,
                    x: '-50%',
                    y: '-50%',
                  }}
                  animate={{
                    scale: [0, 35, 60, 65],
                    opacity: [0.9, 0.5, 0.3, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: 0.4 + (i * 0.12),
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>

            {[...Array(8)].map((_, i) => {
              const angle = (i / 8) * Math.PI * 2;
              return (
                <motion.div
                  key={`beam-${i}`}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: '4px',
                    height: '200px',
                    background: 'linear-gradient(to bottom, rgba(244, 208, 63, 0.8) 0%, transparent 100%)',
                    transformOrigin: 'top center',
                    rotate: `${(angle * 180) / Math.PI}deg`,
                  }}
                  initial={{
                    opacity: 0,
                    scaleY: 0,
                  }}
                  animate={{
                    opacity: [0, 0.8, 0.6, 0],
                    scaleY: [0, 1.5, 2, 2.2],
                  }}
                  transition={{
                    duration: 2,
                    delay: 2.3,
                    ease: "easeOut"
                  }}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full h-full relative">
        <Canvas
          camera={{ position: [12, 6, 12], fov: window.innerWidth < 768 ? 65 : 50 }}
          shadows
          gl={{ antialias: true, alpha: false }}
          onCreated={({ gl }) => {
            gl.setClearColor('#e0e5ea');
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.4;
          }}
        >
          <Scene startDelay={4.0} />
        </Canvas>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: logoIntroComplete ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-8 left-4 md:bottom-12 md:left-16 text-left pointer-events-none z-10 max-w-[85%] md:max-w-none"
        >
          <h1 className="text-2xl md:text-5xl font-black text-[#222] tracking-tight mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontStretch: 'condensed' }}>
            SUPER STEELS
          </h1>
          <p className="text-xs md:text-base text-[#555] font-medium tracking-wide">
            Structural Steel Supply Since 2003
          </p>
          <p className="text-[10px] md:text-sm text-[#777] font-normal mt-1">
            Mangalore | Udupi | Uttara Kannada
          </p>
        </motion.div>

        <AnimatePresence>
          {showLogo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 1 }}
              className="absolute bottom-6 right-4 md:bottom-12 md:right-16 pointer-events-none z-20"
            >
              <img
                src="/logo.png"
                alt="Super Steels"
                className="h-12 md:h-24 object-contain opacity-90"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))' }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showSkip && (
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleSkip}
              className="absolute top-4 right-4 md:top-8 md:right-8 px-4 py-1.5 md:px-6 md:py-2 bg-white/90 hover:bg-white text-[#222] text-xs md:text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-30 backdrop-blur-sm border border-gray-200"
            >
              Skip
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
