import { createContext, useContext, useState, useEffect } from 'react'

const defaultConfig = {
  headline: 'Transformamos complexidade operacional em vantagem competitiva.',
  subheadline: 'Integração de sistemas, automação de processos e fluxos autônomos. Eliminamos fricção operacional — sua equipe focada em resultado.',
  cta_primary: 'Falar com especialista',
  cta_secondary: 'Falar no WhatsApp',
  brand_name: 'EVO - SmartOps',
  background_color: '#0B0F19',
  surface_color: '#111827',
  text_color: '#FFFFFF',
  primary_action: '#3B82F6',
  secondary_action: '#06B6D4',
  font_family: 'Space Grotesk',
  font_size: 16
}

const ElementSDKContext = createContext()

export function useElementSDK() {
  return useContext(ElementSDKContext)
}

export function ElementSDKProvider({ children }) {
  const [config, setConfig] = useState(defaultConfig)

  useEffect(() => {
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        script.async = true
        script.onload = resolve
        script.onerror = reject
        document.body.appendChild(script)
      })

    const initSDK = async () => {
      try {
        await loadScript('/_sdk/data_sdk.js')
        await loadScript('/_sdk/element_sdk.js')

        if (window.elementSdk) {
          window.elementSdk.init({
            defaultConfig,
            onConfigChange: async (newConfig) => {
              setConfig((prev) => ({ ...prev, ...newConfig }))
            },
            mapToCapabilities: (cfg) => ({
              recolorables: [
                { get: () => cfg.background_color || defaultConfig.background_color, set: v => { cfg.background_color = v; window.elementSdk.setConfig({ background_color: v }) } },
                { get: () => cfg.surface_color || defaultConfig.surface_color, set: v => { cfg.surface_color = v; window.elementSdk.setConfig({ surface_color: v }) } },
                { get: () => cfg.text_color || defaultConfig.text_color, set: v => { cfg.text_color = v; window.elementSdk.setConfig({ text_color: v }) } },
                { get: () => cfg.primary_action || defaultConfig.primary_action, set: v => { cfg.primary_action = v; window.elementSdk.setConfig({ primary_action: v }) } },
                { get: () => cfg.secondary_action || defaultConfig.secondary_action, set: v => { cfg.secondary_action = v; window.elementSdk.setConfig({ secondary_action: v }) } }
              ],
              borderables: [],
              fontEditable: { get: () => cfg.font_family || defaultConfig.font_family, set: v => { cfg.font_family = v; window.elementSdk.setConfig({ font_family: v }) } },
              fontSizeable: { get: () => cfg.font_size || defaultConfig.font_size, set: v => { cfg.font_size = v; window.elementSdk.setConfig({ font_size: v }) } }
            }),
            mapToEditPanelValues: (cfg) => new Map([
              ['headline', cfg.headline || defaultConfig.headline],
              ['subheadline', cfg.subheadline || defaultConfig.subheadline],
              ['cta_primary', cfg.cta_primary || defaultConfig.cta_primary],
              ['cta_secondary', cfg.cta_secondary || defaultConfig.cta_secondary],
              ['brand_name', cfg.brand_name || defaultConfig.brand_name]
            ])
          })
        }
      } catch (e) {
        console.log('ℹ️ Element SDK não disponível. Site rodando com configurações padrão.')
      }
    }

    initSDK()
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty('--bg', config.background_color)
    document.body.style.background = config.background_color
    document.body.style.fontFamily = `${config.font_family}, Space Grotesk, sans-serif`
  }, [config.background_color, config.font_family])

  return (
    <ElementSDKContext.Provider value={{ config, setConfig }}>
      {children}
    </ElementSDKContext.Provider>
  )
}