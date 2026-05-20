/**
 * @nhonguista/sdk
 *
 * Cliente SDK oficial para integração com a plataforma Nhonguista.
 * Permite consumir a API pública de serviços, categorias e contactos.
 *
 * @license AGPL-3.0-or-later
 */

export interface NhonguistaConfig {
  baseUrl: string
  apiKey?: string
  timeout?: number
}

export function createClient(config: NhonguistaConfig) {
  const { baseUrl, timeout = 10000 } = config

  async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${baseUrl.replace(/\/$/, '')}${endpoint}`

    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(config.apiKey && { Authorization: `Bearer ${config.apiKey}` }),
        ...options?.headers,
      },
      signal: AbortSignal.timeout(timeout),
    })

    if (!response.ok) {
      throw new Error(`Nhonguista API error: ${response.status} ${response.statusText}`)
    }

    return response.json() as Promise<T>
  }

  return {
    services: {
      list: (params?: Record<string, string>) => {
        const query = params ? `?${new URLSearchParams(params)}` : ''
        return request(`/api/services${query}`)
      },
      get: (id: string) => request(`/api/services/${id}`),
    },
    categories: {
      list: () => request('/api/categories'),
    },
  }
}
