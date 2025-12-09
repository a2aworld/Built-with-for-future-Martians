/**
 * Global Window interface extension for runtime injection.
 */
declare global {
  interface Window {
    env: {
      API_KEY: string;
    };
  }
}

/**
 * Represents a geographical point on Earth.
 */
export interface Coordinates {
  lat: number;
  lng: number;
}

/**
 * Represents a single "Memory Node" in the Galactic Storybook.
 * Each node connects a physical location to a mythological narrative.
 */
export interface StoryNode {
  id: string;
  title: string;
  /** Broad cultural or thematic category for grouping. */
  category: 'Vedic' | 'Biblical' | 'Classical' | 'Egyptian' | 'Cosmic' | 'Mesoamerican';
  /** The physical coordinates on Earth. */
  coordinates: Coordinates;
  /** Precise zoom level for the map view (provided by artist curation). */
  zoom?: number; 
  /** Source CSV filename for provenance tracking. */
  datasetOrigin: string; 
  /** The core myth or narrative summary. */
  description: string;
  /** Deeper meaning or philosophical significance. */
  culturalContext: string;
  /** What the user should look for in the topography (Pareidolia hint). */
  visualCue: string; 
}

/**
 * The structured response from the AI Agent.
 */
export interface AgentResponse {
  /** The narrated story text. */
  text: string;
  /** Base64 encoded image of the generated artwork. */
  imageUrl?: string;
  /** The emotional flavor of the response (used for potential UI styling). */
  emotionalTone: 'Empathetic' | 'Analytical' | 'Wondrous';
  /** IDs of other nodes that might be connected (future feature). */
  relatedNodes?: string[];
}