
export interface ISSTelemetry {
  latitude: number;
  longitude: number;
  altitude: number;
  velocity: number;
  visibility: string;
  timestamp: number;
}

export const fetchISSPosition = async (): Promise<ISSTelemetry> => {
  try {
    const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    if (!response.ok) throw new Error('Failed to fetch ISS position');
    const data = await response.json();
    return {
      latitude: data.latitude,
      longitude: data.longitude,
      altitude: data.altitude,
      velocity: data.velocity,
      visibility: data.visibility,
      timestamp: data.timestamp
    };
  } catch (error) {
    console.error("ISS Telemetry Error:", error);
    // Fallback to a default position if API fails (e.g., over the Mediterranean)
    return {
      latitude: 36.45,
      longitude: 25.37,
      altitude: 418,
      velocity: 27500,
      visibility: 'daylight',
      timestamp: Date.now() / 1000
    };
  }
};
