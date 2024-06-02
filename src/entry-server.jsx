import { renderToString } from 'react-dom/server'
import { StrictMode } from 'react'
import App from './ssr/App'

export function render() {
    const html = renderToString(
        <StrictMode>
            <App />
        </StrictMode>
    )
    return { html }
}