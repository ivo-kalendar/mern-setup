import { renderToString } from 'react-dom/server'
import { StaticRouter, StaticRouterProvider, createStaticRouter } from 'react-router-dom/server'
import { StrictMode } from 'react'
import App from '../components/App'

export function render(url) {
    const head = renderToString(
        // Render Dynamic Head Elements
    )

    console.log("urL: ", url)
    
    const html = renderToString(
        <StrictMode>
            <StaticRouter location={url} >
                <App />
            </StaticRouter>
        </StrictMode>
    )
    return { html, head }
}