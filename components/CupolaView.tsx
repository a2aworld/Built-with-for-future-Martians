
import React, { useState, useEffect } from 'react';

interface CupolaViewProps {
  datasetId: string; // The Google MyMap ID
  selectedLat?: number;
  selectedLng?: number;
  selectedZoom?: number;
}

export const CupolaView: React.FC<CupolaViewProps> = ({ 
  datasetId,
  selectedLat,
  selectedLng,
  selectedZoom
}) => {
  const [artistMapUrl, setArtistMapUrl] = useState('');
  const [satelliteMapUrl, setSatelliteMapUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Slider State
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100%
  const [artistOpacity, setArtistOpacity] = useState(100); // 0 to 100%

  // Base URL for the artist's map
  const artistBaseUrl = `https://www.google.com/maps/d/embed?mid=${datasetId}&ehbc=2E312F`;
  
  // Base URL for Standard Satellite (using simple embed structure)
  const satelliteBaseUrl = `https://maps.google.com/maps?t=k&output=embed`;

  useEffect(() => {
    // Trigger loading state whenever coordinates change
    setIsLoading(true);

    let targetLat = 0;
    let targetLng = 0;
    let zoom = 2;

    if (selectedLat !== undefined && selectedLng !== undefined) {
      targetLat = selectedLat;
      targetLng = selectedLng;
      zoom = selectedZoom || 6; 
    } else {
      targetLat = 20;
      targetLng = 0;
      zoom = 2;
    }

    // Update Artist Map URL
    const newArtistUrl = `${artistBaseUrl}&ll=${targetLat},${targetLng}&z=${zoom}`;
    setArtistMapUrl(newArtistUrl);

    // Update Satellite Map URL
    const newSatUrl = `${satelliteBaseUrl}&q=${targetLat},${targetLng}&z=${zoom}`;
    setSatelliteMapUrl(newSatUrl);
    
    // Fallback: If map loads instantly or fails, clear loader after 3s max
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
    
  }, [selectedLat, selectedLng, selectedZoom, datasetId]);

  const handleIframeLoad = () => {
      // Give it a split second more for tiles to render, then fade out loader
      setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <div className="relative w-full h-full bg-black rounded-xl overflow-hidden shadow-2xl border-4 border-space-800 group select-none">
      
      {/* --- A2A ALLSTAR LOADING SCREEN --- */}
      <div 
        className={`absolute inset-0 z-[60] bg-space-900 flex items-center justify-center transition-opacity duration-700 pointer-events-none ${isLoading ? 'opacity-100' : 'opacity-0'}`}
      >
         <div className="relative flex flex-col items-center">
             {/* The A2A Star / Pyramid Logo Animation */}
             <div className="relative w-24 h-24 animate-[spin_8s_linear_infinite]">
                 {/* Outer Triangle */}
                 <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                    <path d="M50 5 L95 90 H5 Z" fill="none" stroke="#d4af37" strokeWidth="2" className="animate-pulse" />
                 </svg>
                 {/* Inner Inverted Triangle */}
                 <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full rotate-180 scale-75 drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]">
                    <path d="M50 5 L95 90 H5 Z" fill="none" stroke="#00f0ff" strokeWidth="3" className="animate-pulse delay-75" />
                 </svg>
                 {/* Center Core */}
                 <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white] animate-ping"></div>
                 </div>
             </div>
             
             <div className="mt-8 font-mono text-a2a-gold text-xs tracking-[0.5em] animate-pulse">
                 CALIBRATING VIEWPORT
             </div>
         </div>
      </div>

      {/* --- LAYER 1: BASE SATELLITE (The "Real" World) --- */}
      {/* pointer-events-none ensures the user CANNOT pan/zoom manually, keeping layers synced */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <iframe 
            key="sat-layer"
            src={satelliteMapUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'contrast(1.1) brightness(0.8)' }}
            allowFullScreen
            title="Satellite View"
        ></iframe>
      </div>

      {/* --- LAYER 2: ARTIST OVERLAY (The "Heaven on Earth" Vision) --- */}
      {/* pointer-events-none ensures the user CANNOT pan/zoom manually, keeping layers synced */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
        style={{ 
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`, // The Reveal Magic
            opacity: artistOpacity / 100
        }}
      >
         <iframe 
            key="artist-layer"
            src={artistMapUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen
            title="Artist Overlay"
            onLoad={handleIframeLoad}
        ></iframe>
      </div>

      {/* --- SLIDER HANDLE (Visual) --- */}
      <div 
        className="absolute top-0 bottom-0 z-20 w-1 bg-a2a-accent cursor-ew-resize shadow-[0_0_15px_#00f0ff] flex items-center justify-center pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
          <div className="w-8 h-8 bg-black border-2 border-a2a-accent rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-100 active:scale-110">
              <svg className="w-4 h-4 text-a2a-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8M8 17h8M12 7v10" /></svg>
          </div>
      </div>

      {/* --- SLIDER INPUT (Invisible Interactive Layer) --- */}
      {/* z-40 sits above maps but BELOW the controls panel (z-[100]) */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPosition} 
        onChange={(e) => setSliderPosition(parseInt(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40" 
        title="Drag to Compare"
      />

      {/* --- CONTROLS OVERLAY (Bottom Right) --- */}
      {/* z-[100] ensures this sits ON TOP of everything. stopPropagation prevents slider drag. */}
      <div 
        className="absolute bottom-6 right-6 z-[100] flex flex-col gap-2 items-end pointer-events-auto"
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
          
          <div className="bg-black/80 backdrop-blur-md border border-space-600 p-3 rounded-lg shadow-xl w-64">
              <div className="text-[10px] font-mono text-a2a-accent mb-2 uppercase tracking-widest text-center border-b border-space-700 pb-1">
                  Chronoscope Controls
              </div>
              
              <div className="space-y-3">
                  <div className="flex justify-between text-[10px] text-gray-400">
                      <span>ARTIST VISION</span>
                      <span>REALITY</span>
                  </div>

                  {/* Opacity Control */}
                  <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-[10px] text-a2a-gold">
                          <span>OVERLAY OPACITY</span>
                          <span>{artistOpacity}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={artistOpacity}
                        onChange={(e) => setArtistOpacity(parseInt(e.target.value))}
                        className="w-full h-1 bg-space-700 rounded-lg appearance-none cursor-pointer accent-a2a-gold relative z-[101]"
                      />
                  </div>
              </div>
          </div>
      </div>

      {/* --- COPYRIGHT WATERMARK --- */}
      <div className="absolute bottom-2 left-2 z-30 pointer-events-none">
         <div className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded border border-white/10">
             <p className="text-[10px] text-gray-400 font-mono">
                 © 2021-2025 Bradly Couch | Astronaut Resilience | Heritage Preservation
             </p>
         </div>
      </div>

      {/* Cupola Window Frame Overlay (Visuals) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0" style={{
            background: `radial-gradient(circle at center, transparent 60%, rgba(11, 13, 23, 0.3) 70%, #0b0d17 100%)`
        }}></div>
        
        {/* HUD Elements - Static Coordinates */}
        {selectedLat !== undefined && (
          <div className="absolute top-4 right-4 text-right pointer-events-auto z-50">
              <div className="inline-block bg-black/70 backdrop-blur-md border border-a2a-accent/30 p-2 rounded text-a2a-accent font-mono text-xs">
                  <div className="flex items-center justify-end gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-a2a-accent animate-pulse"></span>
                      <span>ORBITAL VIEW</span>
                  </div>
                  <div className="text-gray-400">
                      {selectedLat.toFixed(4)}° N <br/>
                      {selectedLng?.toFixed(4)}° E
                  </div>
              </div>
          </div>
        )}
      </div>
    </div>
  );
};
