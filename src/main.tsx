import { createRoot } from 'react-dom/client';
import './index.css';
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/tiptap/styles.css";
import App from './App.tsx';
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById('root')!).render(
    <MantineProvider>
        <App/>
    </MantineProvider>,
);
