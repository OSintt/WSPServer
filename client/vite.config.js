import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Agrega la configuración para importar archivos SVG
      'src/assets': '/src/assets'
    }
  }
})
