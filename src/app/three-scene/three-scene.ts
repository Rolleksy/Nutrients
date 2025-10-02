import {
  Component,
  ElementRef,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';

@Component({
  selector: 'app-three-scene',
  templateUrl: './three-scene.html',
  styleUrls: ['./three-scene.scss']
})
export class ThreeScene implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) private canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private model: THREE.Group | THREE.Object3D | null = null;
  private frameId: number = 0;

  private loader = new GLTFLoader();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Dodajemy małe opóźnienie żeby nie kolidować z renderowaniem CSS
      setTimeout(() => {
        this.initThree();
        this.startRenderingLoop();
        window.addEventListener('resize', this.onResize);
        this.onResize(); // ustaw od razu na start
      }, 100);
    }
  }

  ngOnDestroy(): void {
    if (this.frameId) cancelAnimationFrame(this.frameId);
    if (this.renderer) this.renderer.dispose();
    window.removeEventListener('resize', this.onResize);
  }

  private initThree(): void {
    const canvas = this.canvasRef.nativeElement;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = null;

    // Camera
    this.camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
    this.camera.position.z = 1.2;
    this.camera.position.y = 0.9;
    
    // Focus kamery na środek sceny (0,0,0) gdzie będzie model
    this.camera.lookAt(0, 0, 0);

    // Ładowanie modelu ramen.glb
    this.loader.load(
      '/ramen.glb',
      (gltf) => {
        // Dodaj model do sceny
        this.model = gltf.scene;
        
        // Opcjonalnie: skalowanie modelu
        this.model.scale.setScalar(2);
        
        // Opcjonalnie: pozycjonowanie modelu
        this.model.position.set(0, 0, 0);
        
        // Dodaj do sceny
        this.scene.add(this.model);
        
        console.log('Model ramen załadowany pomyślnie!');
      },
      (progress) => {
        // Progress callback
        console.log('Postęp ładowania:', (progress.loaded / progress.total * 100) + '%');
      },
      (error) => {
        // Error callback
        console.error('Błąd ładowania modelu:', error);
      }
    );

    // Lighting - lepsze oświetlenie dla modelu 3D
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4); // Miękkie światło otoczenia
    this.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.4);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    this.scene.add(directionalLight);
    
    // Dodatkowe światło z drugiej strony
    const light2 = new THREE.DirectionalLight(0xffffff, 0.3);
    light2.position.set(-5, -5, -5);
    this.scene.add(light2);
    
    // Area Light - miękkie oświetlenie powierzchniowe
    const areaLight = new THREE.RectAreaLight(0xffffff, 2, 4, 4);
    areaLight.position.set(0, 3, 2);
    areaLight.lookAt(0, 0, 0); // Skierowane na model
    this.scene.add(areaLight);
    
    // Opcjonalnie: helper do wizualizacji area light (do debugowania)
    // const areaLightHelper = new RectAreaLightHelper(areaLight);
    // this.scene.add(areaLightHelper);
  }

  private startRenderingLoop(): void {
    const render = () => {
      this.frameId = requestAnimationFrame(render);

      if (this.model) {
        this.model.rotation.y += 0.005;
      }

      this.renderer.render(this.scene, this.camera);
    };
    render();
  }

  // ✅ Skalowanie przy resize
  private onResize = () => {
    const canvas = this.canvasRef.nativeElement;
    const container = canvas.parentElement; // pobierz kontener rodzica
    
    if (container) {
      const width = container.clientWidth;
      const height = container.clientHeight - 100; // Zmniejsz wysokość o 100px

      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(width, height, false);
    }
  };
}
