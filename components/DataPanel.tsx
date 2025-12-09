
import React from 'react';
import { StoryNode } from '../types';
import { STORY_NODES } from '../constants';

interface DataPanelProps {
  onSelectNode: (node: StoryNode) => void;
  selectedNodeId: string | null;
}

export const DataPanel: React.FC<DataPanelProps> = ({ onSelectNode, selectedNodeId }) => {
  // Group nodes by Category
  const groupedNodes = STORY_NODES.reduce((acc, node) => {
    if (!acc[node.category]) {
      acc[node.category] = [];
    }
    acc[node.category].push(node);
    return acc;
  }, {} as Record<string, StoryNode[]>);

  return (
    <div className="h-full flex flex-col bg-space-900/90 border-r border-space-700 w-full md:w-80 font-sans">
      <div className="p-4 border-b border-space-700">
        <h1 className="text-xl font-serif text-starlight font-bold tracking-wider">A2A WORLD</h1>
        <p className="text-xs text-a2a-gold font-mono mt-1">GALACTIC STORYBOOK</p>
      </div>

      <div className="p-2 flex-1 overflow-y-auto custom-scrollbar">
        {Object.entries(groupedNodes).map(([category, nodes]) => (
          <div key={category} className="mb-4">
            <div className="text-xs font-mono text-a2a-accent mb-2 uppercase opacity-70 px-2 mt-2 sticky top-0 bg-space-900/90 py-1 backdrop-blur z-10">
              {category} NARRATIVES
            </div>
            <div className="space-y-1">
              {nodes.map((node) => (
                <button
                  key={node.id}
                  onClick={() => onSelectNode(node)}
                  className={`w-full text-left px-3 py-2 rounded border transition-all duration-300 group relative overflow-hidden ${
                    selectedNodeId === node.id
                      ? 'bg-space-700 border-a2a-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                      : 'bg-space-800/30 border-space-800 hover:border-space-500 hover:bg-space-800'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-0.5">
                      <span className={`font-semibold text-sm ${selectedNodeId === node.id ? 'text-a2a-gold' : 'text-gray-300 group-hover:text-starlight'}`}>
                        {node.title}
                      </span>
                    </div>
                    <div className="text-[10px] text-gray-500 truncate font-mono flex items-center gap-2">
                       <span>LAT: {node.coordinates.lat.toFixed(1)}</span>
                       <span className="opacity-30">|</span>
                       <span className="truncate max-w-[100px]">{node.datasetOrigin}</span>
                    </div>
                  </div>
                  {/* Subtle hover effect bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-a2a-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200"></div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-space-700 bg-black/20">
        <div className="text-[10px] text-gray-500 font-mono text-center leading-relaxed">
          <span className="text-a2a-gold">© 2021-2025 BRADLY COUCH</span>
          <br/>
          <span className="text-gray-400 font-semibold tracking-tight">Astronaut Resilience | Heritage Preservation</span>
          <br/>
          <span className="text-a2a-accent/60 mt-1 block">POWERED BY GEMINI 3 PRO</span>
        </div>
      </div>
    </div>
  );
};
