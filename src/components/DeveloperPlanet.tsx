import { Canvas, useFrame } from '@react-three/fiber'
import './planet-interaction.css'
import { Float, Line, Stars, OrbitControls, ContactShadows, Html } from '@react-three/drei'
import { useRef, useState, useMemo, useEffect, useCallback } from 'react'
import * as THREE from 'three'
// Inline default logos (raw SVG) for reliable rendering
import reactLogo from '/tech-logos/react.svg?raw'
import typescriptLogo from '/tech-logos/typescript.svg?raw'
import viteLogo from '/tech-logos/vite.svg?raw'
import tailwindLogo from '/tech-logos/tailwind.svg?raw'
import threeLogo from '/tech-logos/three-js.svg?raw'

type DeveloperPlanetProps = {
  selected?: string | null
  onProjectSelect?: (id: string) => void
}

// warmer, less 'AI-generic' accents
const cyan = '#ffd08a'
const blue = '#ff9b85'
const planetSurfaceRadius = 1.29

function surfacePosition(theta: number, phi: number, radius = planetSurfaceRadius) {
  return [
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ] as [number, number, number]
}

function alignToSurfaceNormal(position: [number, number, number]) {
  const normal = new THREE.Vector3(...position).normalize()
  return new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal)
}

function Mountain({ position, rotation = 0, scale = 1 }: { position: [number, number, number], rotation?: number, scale?: number }) {
  return <mesh position={position} rotation={[0, rotation, 0]} scale={scale}><coneGeometry args={[.18, .48, 5]} /><meshStandardMaterial color="#19314a" flatShading roughness={.88} /></mesh>
}

function Tower({ position, height = .26 }: { position: [number, number, number], height?: number }) {
  return <group position={position}>
    <mesh position={[0, height / 2, 0]}><cylinderGeometry args={[.055, .075, height, 6]} /><meshStandardMaterial color="#25445c" flatShading /></mesh>
    <mesh position={[0, height + .025, 0]}><sphereGeometry args={[.045, 6, 6]} /><meshBasicMaterial color={cyan} /></mesh>
    <pointLight color={cyan} intensity={.65} distance={.55} position={[0, height + .04, 0]} />
  </group>
}

function ProjectSpire({ color, selected, hovered }: { color: string, selected?: boolean, hovered?: boolean }) {
  return <group>
    <mesh position={[0, 0.01, 0]}>
      <cylinderGeometry args={[0.09, 0.1, 0.02, 24]} />
      <meshStandardMaterial color="#0b1012" roughness={0.72} metalness={0.05} />
    </mesh>
    <mesh position={[0, 0.035, 0]}>
      <cylinderGeometry args={[0.08, 0.085, 0.03, 18]} />
      <meshStandardMaterial color="#10181d" roughness={0.68} metalness={0.06} />
    </mesh>
    <mesh position={[0, 0.13, 0]}>
      <cylinderGeometry args={[0.045, 0.07, 0.14, 12]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={selected ? 0.92 : hovered ? 0.55 : 0.28} roughness={0.24} metalness={0.22} />
    </mesh>
    <mesh position={[0, 0.235, 0]}>
      <coneGeometry args={[0.035, 0.12, 10]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={selected ? 1.55 : hovered ? 0.85 : 0.55} roughness={0.18} metalness={0.18} />
    </mesh>
    <mesh position={[0, 0.065, 0]} rotation={[0, 0, 0]}>
      <torusGeometry args={[0.095, 0.007, 12, 64]} />
      <meshBasicMaterial color={color} transparent opacity={selected ? 0.28 : 0.14} />
    </mesh>
    <mesh position={[0, 0.22, 0.035]} rotation={[0, Math.PI / 8, 0]}>
      <boxGeometry args={[0.02, 0.08, 0.01]} />
      <meshStandardMaterial color="#0a1113" roughness={0.6} metalness={0.03} />
    </mesh>
    <mesh position={[0, 0.22, -0.035]} rotation={[0, -Math.PI / 8, 0]}>
      <boxGeometry args={[0.02, 0.08, 0.01]} />
      <meshStandardMaterial color="#0a1113" roughness={0.6} metalness={0.03} />
    </mesh>
  </group>
}

function ProjectPavilion({ color, selected, hovered }: { color: string, selected?: boolean, hovered?: boolean }) {
  return <group>
    <mesh position={[0, 0.01, 0]}>
      <cylinderGeometry args={[0.1, 0.12, 0.02, 24]} />
      <meshStandardMaterial color="#0b1012" roughness={0.72} metalness={0.05} />
    </mesh>
    <mesh position={[0, 0.04, 0]}>
      <boxGeometry args={[0.18, 0.05, 0.18]} />
      <meshStandardMaterial color="#10161b" roughness={0.7} metalness={0.05} />
    </mesh>
    <mesh position={[0, 0.08, 0]}>
      <boxGeometry args={[0.16, 0.08, 0.16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={selected ? 0.8 : hovered ? 0.45 : 0.26} roughness={0.22} metalness={0.2} />
    </mesh>
    <mesh position={[0, 0.15, 0]}>
      <boxGeometry args={[0.14, 0.1, 0.14]} />
      <meshStandardMaterial color="#10161b" roughness={0.72} metalness={0.05} />
    </mesh>
    <mesh position={[0, 0.23, 0]}>
      <coneGeometry args={[0.1, 0.08, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={selected ? 1.1 : hovered ? 0.65 : 0.4} roughness={0.2} metalness={0.12} />
    </mesh>
    <mesh position={[0.045, 0.19, 0.06]} rotation={[0, 0.4, 0]}>
      <boxGeometry args={[0.06, 0.02, 0.04]} />
      <meshStandardMaterial color="#0f171b" roughness={0.7} metalness={0.04} />
    </mesh>
    <mesh position={[-0.045, 0.19, 0.06]} rotation={[0, -0.4, 0]}>
      <boxGeometry args={[0.06, 0.02, 0.04]} />
      <meshStandardMaterial color="#0f171b" roughness={0.7} metalness={0.04} />
    </mesh>
  </group>
}

function ProjectGateway({ color, selected, hovered }: { color: string, selected?: boolean, hovered?: boolean }) {
  return <group>
    <mesh position={[0, 0.01, 0]}>
      <cylinderGeometry args={[0.12, 0.14, 0.02, 24]} />
      <meshStandardMaterial color="#0b1012" roughness={0.72} metalness={0.05} />
    </mesh>
    <mesh position={[0, 0.05, 0]}>
      <boxGeometry args={[0.2, 0.06, 0.08]} />
      <meshStandardMaterial color="#10161b" roughness={0.7} metalness={0.05} />
    </mesh>
    <mesh position={[0, 0.12, 0]}>
      <boxGeometry args={[0.16, 0.12, 0.08]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={selected ? 0.9 : hovered ? 0.48 : 0.28} roughness={0.24} metalness={0.2} />
    </mesh>
    <mesh position={[0, 0.24, 0]}>
      <cylinderGeometry args={[0.055, 0.055, 0.08, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={selected ? 1.15 : hovered ? 0.65 : 0.4} roughness={0.28} metalness={0.18} />
    </mesh>
    <mesh position={[0, 0.055, 0]}>
      <torusGeometry args={[0.12, 0.02, 10, 64]} />
      <meshStandardMaterial color="#0f171d" roughness={0.72} metalness={0.04} />
    </mesh>
    <mesh position={[0.06, 0.14, 0.04]}>
      <boxGeometry args={[0.04, 0.08, 0.02]} />
      <meshStandardMaterial color="#0f171d" roughness={0.7} metalness={0.05} />
    </mesh>
    <mesh position={[-0.06, 0.14, 0.04]}>
      <boxGeometry args={[0.04, 0.08, 0.02]} />
      <meshStandardMaterial color="#0f171d" roughness={0.7} metalness={0.05} />
    </mesh>
  </group>
}

function Satellite({ id, radius, speed, phase, color, selected }: { id: string, radius: number, speed: number, phase: number, color: string, selected?: string | null }) {
  const orbit = useRef<THREE.Group>(null)
  const satellite = useRef<THREE.Group>(null)
  const satMesh = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + phase
    if (orbit.current) orbit.current.rotation.y = t
    if (satellite.current) satellite.current.rotation.z = -t * 2
    if (satMesh.current) {
      const mat = (satMesh.current.material as THREE.MeshStandardMaterial)
      if (mat) mat.emissiveIntensity = 1.1 + Math.sin(clock.getElapsedTime() * 3 + phase) * 0.45
    }
  })
  return <group ref={orbit} rotation={[phase * .25, phase, .15]}>
    <group position={[radius, 0, 0]} ref={satellite}>
      <mesh name={id} ref={satMesh} scale={selected === id ? 1.25 : 1}><octahedronGeometry args={[.055, 0]} /><meshStandardMaterial color="#bfefff" emissive={color} emissiveIntensity={1.3} /></mesh>
      <mesh position={[.1, 0, 0]}><boxGeometry args={[.1, .028, .09]} /><meshStandardMaterial color="#204264" /></mesh>
      <mesh position={[-.1, 0, 0]}><boxGeometry args={[.1, .028, .09]} /><meshStandardMaterial color="#204264" /></mesh>
      <pointLight color={color} intensity={.7} distance={.5} />
    </group>
  </group>
}

function World({ selected, onSelect }: { selected: string | null, onSelect: (id: string | null) => void }) {
  const world = useRef<THREE.Group>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const basePos = useRef<Float32Array | null>(null)
  const target = useRef({ x: 0, y: 0 })
  const pointerDown = useRef<[number, number] | null>(null)
  const particlesRef = useRef<THREE.Points>(null)
  const particlesPos = useMemo(() => {
    const count = 160
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      const r = 1.6 + Math.random() * 1.0
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)
      const idx = i * 3
      arr[idx] = x
      arr[idx + 1] = y
      arr[idx + 2] = z
    }
    return arr
  }, [])

  // Tech nodes that appear over time. You can populate these later programmatically.
  const [techQueue, setTechQueue] = useState<string[]>(['React', 'TypeScript', 'Vite', 'Tailwind', 'Three.js'])
  const [techNodes, setTechNodes] = useState<Array<{ id: string; name: string; basePos: [number, number, number]; pos: [number, number, number]; seed: number; amp: number; freq: number }>>([])
  const techRefs = useRef<Record<string, THREE.Group | null>>({})

  function slugify(name: string) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }

  function TechLabel({ name }: { name: string }) {
    const [failed, setFailed] = useState(false)
    const [loading, setLoading] = useState(true)
    const [blobUrl, setBlobUrl] = useState<string | null>(null)
    const slug = slugify(name)
    const base = (import.meta as any).env?.BASE_URL || '/'
    const src = `${base}tech-logos/${slug}.svg`
    const initials = name.split(/\s|\.|-/).map(s => s[0]).slice(0,2).join('').toUpperCase()

    const inlineMap: Record<string, string> = {
      'react': reactLogo,
      'typescript': typescriptLogo,
      'vite': viteLogo,
      'tailwind': tailwindLogo,
      'three-js': threeLogo,
    }
    if (inlineMap[slug]) {
      return <div className="tech-label" dangerouslySetInnerHTML={{ __html: inlineMap[slug] }} />
    }

    useEffect(() => {
      let mounted = true
      let objectUrl: string | null = null
      setLoading(true)
      fetch(src, { cache: 'no-store' }).then(res => {
        if (!mounted) return
        if (!res.ok) {
          setFailed(true)
          setLoading(false)
          console.warn('Tech logo not found:', src, res.status)
          return
        }
        return res.blob().then(b => {
          objectUrl = URL.createObjectURL(b)
          if (!mounted) return
          setBlobUrl(objectUrl)
          setLoading(false)
        })
      }).catch(err => {
        if (!mounted) return
        setFailed(true)
        setLoading(false)
        console.error('Error loading tech logo', src, err)
      })
      return () => {
        mounted = false
        if (objectUrl) URL.revokeObjectURL(objectUrl)
      }
    }, [src])

    return (
      <div className="tech-label">
        {loading ? <div className="tech-initials">…</div>
          : !failed && blobUrl ? <img src={blobUrl} alt={name} />
          : <div className="tech-initials">{initials}</div>}
      </div>
    )
  }

  const randomPoint = useCallback((r = 1.7) => {
    const u = Math.random()
    const v = Math.random()
    const theta = 2 * Math.PI * u
    const phi = Math.acos(2 * v - 1)
    const x = r * Math.sin(phi) * Math.cos(theta)
    const y = r * Math.sin(phi) * Math.sin(theta)
    const z = r * Math.cos(phi)
    return [x, y, z] as [number, number, number]
  }, [])

  useEffect(() => {
    // expose a helper so you can add tech later from the console: window.__addTech('React')
    ;(window as any).__addTech = (name: string) => {
      setTechQueue((q) => [...q, name])
    }
    return () => { (window as any).__addTech = undefined }
  }, [])

  useEffect(() => {
    if (!techQueue || techQueue.length === 0) return
    let mounted = true
    const spawnInterval = setInterval(() => {
      if (!mounted) return
      setTechQueue((q) => {
        if (q.length === 0) return q
        const next = q[0]
        const p = randomPoint(1.7 + Math.random() * 0.6)
        setTechNodes((nodes) => [...nodes, { id: `${next}-${Date.now()}`, name: next, basePos: p, pos: p, seed: Math.random() * Math.PI * 2, amp: 0.06 + Math.random() * 0.08, freq: 0.4 + Math.random() * 0.8 }])
        return q.slice(1)
      })
    }, 1400)
    return () => { mounted = false; clearInterval(spawnInterval) }
  }, [techQueue, randomPoint])
  useFrame(({ clock, pointer }) => {
    target.current.x = pointer.x * .12
    target.current.y = pointer.y * .08
    if (world.current) {
      world.current.rotation.y = THREE.MathUtils.lerp(world.current.rotation.y, clock.getElapsedTime() * .075 + target.current.x, .025)
      world.current.rotation.x = THREE.MathUtils.lerp(world.current.rotation.x, target.current.y, .025)
      world.current.position.y = Math.sin(clock.getElapsedTime() * .7) * .055
    }
    // subtle vertex wobble on core
    if (coreRef.current) {
      const geom = coreRef.current.geometry as THREE.BufferGeometry
      const posAttr = geom.attributes.position
      const normAttr = geom.attributes.normal
      if (!basePos.current) basePos.current = (posAttr.array as Float32Array).slice()
      const base = basePos.current
      const pos = posAttr.array as Float32Array
      const norm = normAttr.array as Float32Array
      const t = clock.getElapsedTime()
      const amp = 0.006
      for (let i = 0; i < pos.length; i += 3) {
        const idx = i / 3
        const ox = base[i]
        const oy = base[i + 1]
        const oz = base[i + 2]
        const nx = norm[i]
        const ny = norm[i + 1]
        const nz = norm[i + 2]
        const offset = Math.sin(t * 1.8 + idx * 0.23) * amp
        pos[i] = ox + nx * offset
        pos[i + 1] = oy + ny * offset
        pos[i + 2] = oz + nz * offset
      }
      posAttr.needsUpdate = true
      geom.computeVertexNormals()
    }
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0015
        particlesRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.12) * 0.02
      }
      // animate tech nodes with subtle floating motion
      if (techNodes.length > 0) {
        const tnow = clock.getElapsedTime()
        for (const n of techNodes) {
          const g = techRefs.current[n.id]
          if (!g) continue
          const dx = Math.sin(tnow * n.freq + n.seed) * n.amp
          const dy = Math.cos(tnow * (n.freq * 1.1) + n.seed * 1.3) * (n.amp * 0.6)
          const dz = Math.sin(tnow * (n.freq * 0.9) + n.seed * 0.7) * (n.amp * 0.6)
          g.position.set(n.basePos[0] + dx, n.basePos[1] + dy, n.basePos[2] + dz)
          g.rotation.y += 0.003 + (n.amp * 0.05)
        }
      }
  })
  const handlePointerDown = (e: any) => {
    e.stopPropagation()
    pointerDown.current = [e.clientX, e.clientY]
  }
  const handlePointerUp = (e: any) => {
    e.stopPropagation()
    if (!pointerDown.current) return
    const [x0, y0] = pointerDown.current
    const dx = Math.abs(e.clientX - x0)
    const dy = Math.abs(e.clientY - y0)
    pointerDown.current = null
    const moved = Math.hypot(dx, dy)
    if (moved < 6) {
      const obj = e.object
      const id = (obj && (obj.name || obj.uuid)) ?? null
      onSelect(id)
    }
  }
  const projectNodes = useMemo(() => [
    { id: 'project-01', title: 'Web applications', basePos: surfacePosition(-0.18, 1.45), quaternion: alignToSurfaceNormal(surfacePosition(-0.18, 1.45)), color: '#d7ff64', type: 'spire' },
    { id: 'project-02', title: 'Scalable systems', basePos: surfacePosition(3.05, 1.35), quaternion: alignToSurfaceNormal(surfacePosition(3.05, 1.35)), color: '#6c8cff', type: 'gateway' },
    { id: 'project-03', title: 'Developer tools', basePos: surfacePosition(1.58, 1.2), quaternion: alignToSurfaceNormal(surfacePosition(1.58, 1.2)), color: '#4dd5cb', type: 'pavilion' },
  ], [])

  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const handleProjectClick = (e: any, id: string) => {
    e.stopPropagation()
    onSelect(id)
  }
  const handleProjectHover = (id: string | null) => {
    setHoveredProject(id)
    if (typeof document !== 'undefined') {
      document.body.style.cursor = id ? 'pointer' : 'grab'
    }
  }

  return <group ref={world} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp}>
    <Float floatIntensity={0.08} rotationIntensity={0.25}>
      <mesh ref={coreRef} name="core" scale={selected === 'core' ? 1.06 : 1} rotation={[.12, .15, 0]}>
        <icosahedronGeometry args={[1.26, 2]} />
        <meshStandardMaterial color="#0e1416" flatShading roughness={.86} metalness={.08} />
      </mesh>
      <mesh name="core-wire" scale={1.01} rotation={[.12, .15, 0]}>
        <icosahedronGeometry args={[1.26, 1]} />
        <meshBasicMaterial color={blue} wireframe transparent opacity={.12} />
      </mesh>
    </Float>
    {/* subtle atmosphere */}
    <mesh scale={1.12} position={[0, 0.02, 0]} renderOrder={10}>
      <icosahedronGeometry args={[1.28, 2]} />
      <meshBasicMaterial color={cyan} transparent opacity={0.06} blending={THREE.AdditiveBlending} />
    </mesh>
    {/* ambient particles / dust */}
    <points ref={particlesRef} rotation={[0.2, 0.6, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={particlesPos} count={particlesPos.length / 3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.01} color={cyan} transparent opacity={0.6} sizeAttenuation={true} />
    </points>
    <group position={[0, .98, .1]} rotation={[-.1, .15, 0]}>
      <Mountain position={[-.52, .04, .03]} rotation={.6} scale={1.4} /><Mountain position={[-.15, .05, -.16]} rotation={1.1} scale={.9} /><Mountain position={[.49, .03, .03]} rotation={.3} scale={1.15} />
      <Tower position={[-.25, .05, .1]} height={.34} /><Tower position={[.05, .07, .05]} height={.48} /><Tower position={[.3, .04, -.03]} height={.25} />
      <mesh position={[.05, .01, .15]} rotation={[-Math.PI / 2, 0, 0]}><ringGeometry args={[.24, .27, 6]} /><meshBasicMaterial color={blue} transparent opacity={.85} /></mesh>
      <Line points={[[-.53,.05,.05],[-.25,.2,.1],[.05,.28,.06],[.32,.14,-.03]]} color={cyan} lineWidth={.8} transparent opacity={.8} />
    </group>
    <Satellite id="sat-0" radius={1.73} speed={.42} phase={0} color={cyan} selected={selected} />
    <Satellite id="sat-1" radius={1.92} speed={.30} phase={2.15} color="#6c8cff" selected={selected} />
    <Satellite id="sat-2" radius={1.57} speed={.57} phase={4.1} color="#4dd5cb" selected={selected} />
    {/* project history monuments anchored on the world */}
    {projectNodes.map((node) => {
      const isActive = selected === node.id
      const isHover = hoveredProject === node.id
      return (
        <Float key={node.id} floatIntensity={0.18} rotationIntensity={0.05}>
          <group position={node.basePos} quaternion={node.quaternion}>
            <mesh position={[0, 0.01, 0]}>
              <ringGeometry args={[0.095, 0.125, 40]} />
              <meshBasicMaterial color={node.color} transparent opacity={isActive || isHover ? 0.24 : 0.1} />
            </mesh>
            <mesh position={[0, 0.008, 0]}>
              <torusGeometry args={[0.112, 0.013, 12, 80]} />
              <meshBasicMaterial color={node.color} transparent opacity={isActive || isHover ? 0.3 : 0.14} />
            </mesh>
            <group
              name={node.id}
              onClick={(e) => handleProjectClick(e, node.id)}
              onPointerOver={(e) => { e.stopPropagation(); handleProjectHover(node.id) }}
              onPointerOut={(e) => { e.stopPropagation(); handleProjectHover(null) }}
              scale={isActive ? 1.14 : 1}
            >
              {node.type === 'spire' ? <ProjectSpire color={node.color} selected={isActive} hovered={isHover} /> : null}
              {node.type === 'gateway' ? <ProjectGateway color={node.color} selected={isActive} hovered={isHover} /> : null}
              {node.type === 'pavilion' ? <ProjectPavilion color={node.color} selected={isActive} hovered={isHover} /> : null}
            </group>
            <mesh position={[0, 0.16, 0]}>
              <cylinderGeometry args={[0.045, 0.055, 0.02, 16]} />
              <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={isActive || isHover ? 0.8 : 0.25} roughness={0.5} metalness={0.1} />
            </mesh>
            <mesh position={[0, 0.24, 0]}>
              <sphereGeometry args={[0.015, 12, 12]} />
              <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={isActive || isHover ? 1.3 : 0.45} roughness={0.2} metalness={0.15} />
            </mesh>
            {isActive && <pointLight color={node.color} intensity={1.4} distance={0.85} position={[0, 0.3, 0]} />}
          </group>
        </Float>
      )
    })}
    {/* render tech nodes (spawned in this World scope) */}
    {techNodes.map((t) => (
      <group key={t.id} ref={el => (techRefs.current[t.id] = el)} position={t.basePos}>
        <mesh>
          <sphereGeometry args={[0.03, 6, 6]} />
          <meshStandardMaterial color={'#222426'} emissive={cyan} emissiveIntensity={0.12} roughness={0.8} metalness={0.02} />
        </mesh>
        <Html center distanceFactor={10} style={{ pointerEvents: 'none' }}>
          <TechLabel name={t.name} />
        </Html>
      </group>
    ))}
  </group>
}

export default function DeveloperPlanet({ selected, onProjectSelect }: DeveloperPlanetProps) {
  const [localSelected, setLocalSelected] = useState<string | null>(null)
  const activeSelection = selected ?? localSelected

  const handleWorldSelect = (id: string | null) => {
    setLocalSelected(id)
    if (id?.startsWith('project-')) {
      onProjectSelect?.(id)
    }
  }

  return <Canvas dpr={[1, 1.75]} camera={{ position: [0, .15, 4.1], fov: 39 }} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
    <ambientLight intensity={.45} />
    <hemisphereLight args={['#2b2b2f', '#001014', 0.35]} />
    <directionalLight position={[-3, 4, 3]} intensity={1.25} color={'#ffd8b3'} />
    <pointLight position={[2, -1, 2]} intensity={.8} color={blue} />
    <Stars radius={8} depth={3} count={230} factor={1.2} saturation={0} fade speed={.15} />
    <World selected={activeSelection} onSelect={handleWorldSelect} />
    <ContactShadows position={[0, -1.5, 0]} opacity={0.5} blur={1.5} far={3} />
    <OrbitControls enablePan={false} enableZoom={false} enableDamping dampingFactor={0.12} rotateSpeed={0.6} />
  </Canvas>
}
