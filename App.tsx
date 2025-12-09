
import React, { useState, useEffect } from 'react';
import { DataPanel } from './components/DataPanel';
import { AgentInterface } from './components/AgentInterface';
import { CupolaView } from './components/CupolaView';
import { promptSelectKey, generateStoryResponse } from './services/geminiService';
import { StoryNode } from './types';

/**
 * Main Application Component.
 * Orchestrates the interaction between the User (DataPanel), the View (Cupola), and the Intelligence (Agent).
 * 
 * Architecture:
 * - Serverless Single Page Application (SPA).
 * - Relies on Google Gemini API for dynamic content generation.
 * - Uses Google Maps Embed API for geospatial visualization.
 */
function App() {
  const [selectedNode, setSelectedNode] = useState<StoryNode | null>(null);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string; imageUrl?: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiKeyReady, setApiKeyReady] = useState(false);
  
  // Initial API Key Check for the Hackathon Environment
  useEffect(() => {
    const checkKey = async () => {
        // @ts-ignore
       if (window.aistudio && window.aistudio.hasSelectedApiKey) {
         // @ts-ignore
         const has = await window.aistudio.hasSelectedApiKey();
         setApiKeyReady(has);
       } else {
         // Fallback for local dev or if the API isn't present
         setApiKeyReady(true); 
       }
    };
    checkKey();
  }, []);

  const handleSelectKey = async () => {
    await promptSelectKey();
    setApiKeyReady(true);
  };

  // Main interaction handler: User clicks a map node
  const handleNodeSelect = async (node: StoryNode) => {
    setSelectedNode(node);
    
    // 1. Add User "Command" to chat
    const userMsg = `Accessing Archive: ${node.title} [${node.coordinates.lat.toFixed(2)}, ${node.coordinates.lng.toFixed(2)}]`;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    
    setIsLoading(true);

    try {
      // 2. Call Gemini Service for Narrative + Art
      const response = await generateStoryResponse(node);
      
      // 3. Add AI Response to chat
      setMessages(prev => [...prev, { 
          role: 'ai', 
          text: response.text,
          imageUrl: response.imageUrl
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Error accessing the Storybook. Please verify uplink (API Key)." }]);
      setApiKeyReady(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-space-900 text-starlight relative">
      
      {/* Background Starfield effect */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(white 1px, transparent 1px), radial-gradient(#d4af37 1px, transparent 1px)',
        backgroundSize: '50px 50px, 100px 100px',
        backgroundPosition: '0 0, 25px 25px'
      }}></div>

      {/* Sidebar: Data Selection */}
      <div className="z-10 h-full hidden md:block">
        <DataPanel 
          onSelectNode={handleNodeSelect} 
          selectedNodeId={selectedNode?.id || null} 
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full relative z-10 p-2 md:p-4 gap-4">
        
        {/* Top Bar / Mission Status */}
        <div className="flex justify-between items-center bg-black/40 p-2 rounded border border-space-700 backdrop-blur-sm">
            <div className="flex items-center gap-4">
                <div className="font-mono text-xs text-a2a-accent pl-2">
                    MISSION: HERITAGE PRESERVATION
                </div>
                <div className="text-xs font-mono text-gray-400">
                     TARGET: {selectedNode ? selectedNode.title.toUpperCase() : 'AWAITING INPUT'}
                </div>
            </div>

            {!apiKeyReady && (
                <button 
                    onClick={handleSelectKey}
                    className="bg-a2a-gold text-space-900 font-bold text-xs px-3 py-1 rounded hover:bg-white transition-colors"
                >
                    CONNECT API KEY
                </button>
            )}
        </div>

        {/* Middle Layer: Map and Agent */}
        <div className="flex-1 flex flex-col lg:flex-row gap-4 min-h-0">
            
            {/* The Cupola View (The Artist's Vision + Map) */}
            <div className="flex-1 lg:flex-[2] min-h-[300px]">
                <CupolaView 
                    datasetId="1Vgo4n2MUqNzl8pZ_enSFpTm6S7BD-KxI"
                    selectedLat={selectedNode?.coordinates.lat}
                    selectedLng={selectedNode?.coordinates.lng}
                    selectedZoom={selectedNode?.zoom} 
                />
            </div>

            {/* The Agent (The Storyteller) */}
            <div className="flex-1 lg:flex-1 h-1/2 lg:h-full min-h-0">
                <AgentInterface messages={messages} isLoading={isLoading} />
            </div>
        </div>

        {/* Mobile-only Data Panel Toggle could go here in future */}
        <div className="md:hidden h-40">
           <DataPanel 
              onSelectNode={handleNodeSelect} 
              selectedNodeId={selectedNode?.id || null} 
            />
        </div>

      </div>
    </div>
  );
}

export default App;
