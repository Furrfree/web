import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";
// https://vite.dev/config/


// Example: get all meeting IDs (replace with your logic)
const meetingIds = [1, 2, 3] // or dynamically read from data

const meetingInputs = Object.fromEntries(
    meetingIds.map(id => [
        `meetings${id}`,
        path.resolve(__dirname, `meetings/${id}/index.html`)
    ])
)

export default defineConfig({
    plugins: [react()],
    base: "/web/",
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                groups: path.resolve(__dirname, 'groups/index.html'),
                meetings: path.resolve(__dirname, 'meetings/index.html'),
                about: path.resolve(__dirname, 'about/index.html'),
                ...meetingInputs
            }
        },
    },
})
