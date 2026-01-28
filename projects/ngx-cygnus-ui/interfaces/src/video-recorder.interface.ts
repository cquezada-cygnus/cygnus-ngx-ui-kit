// Interfaz para los datos del video
export interface VideoGrabado {
  blob: Blob;           // El archivo de video completo
  base64: string;       // El video en formato base64
  duracion: number;     // Duración en segundos
  timestamp: number;    // Momento de la grabación
  tipo: string;         // Tipo de archivo (video/webm)
}
