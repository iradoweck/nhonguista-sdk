# @nhonguista/sdk

> Cliente SDK oficial para integração com a plataforma **Nhonguista** — o marketplace de serviços de Nampula, Moçambique.

## Instalação

```bash
pnpm add @nhonguista/sdk
```

## Uso

```typescript
import { createClient } from '@nhonguista/sdk'

const nhonguista = createClient({
  baseUrl: 'https://api.nhonguista.co.mz',
})

// Listar serviços
const services = await nhonguista.services.list()

// Buscar por categoria
const filtered = await nhonguista.services.list({ category: 'canalizacao' })

// Listar categorias
const categories = await nhonguista.categories.list()
```

## Licença

AGPL-3.0-or-later — Consulte o ficheiro [LICENSE](./LICENSE) para mais detalhes.

---

*Desenvolvido com ❤️ pela ZEDECK'S IT.*
