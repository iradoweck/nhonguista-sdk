# 🧰 @nhonguista/sdk

> Cliente Oficial em TypeScript para integração robusta com a API do Nhonguista.

<p align="left">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Licença-Apache%202.0-green?style=for-the-badge" alt="Licença">
</p>

## 📖 Sobre o SDK

O **@nhonguista/sdk** fornece uma interface fluida, fortemente tipada e agnóstica de ambiente (Node.js, Edge, ou Browser) para comunicar com o backend central do Nhonguista (Laravel API). 
Ele simplifica a autenticação, a formatação de dados e a gestão de erros, permitindo que os programadores se foquem na construção de experiências incríveis.

Sendo um módulo **Open Source**, a comunidade pode usá-lo para desenvolver integrações de terceiros ou mini-aplicações ligadas ao ecossistema Nhonguista.

## 🚀 Instalação

Se estiver fora do monorepo, pode instalar via gestor de pacotes (assumindo publicação no registo npm):

```bash
pnpm add @nhonguista/sdk
# ou
npm install @nhonguista/sdk
# ou
yarn add @nhonguista/sdk
```

*(Nota: Dentro do monorepo, utilize a vinculação `workspace:*`).*

## ⚙️ Como Utilizar

### 1. Inicializar o Cliente

```typescript
import { createClient } from '@nhonguista/sdk';

// Inicialização básica
const nhonguista = createClient({
  baseUrl: 'https://api.nhonguista.com',
  // accessToken: 'seu_token_jwt_aqui' (Opcional se a rota for pública)
});
```

### 2. Recursos Disponíveis (Exemplos)

#### Consultar Serviços
```typescript
// Obter lista paginada de serviços
const services = await nhonguista.services.list({
  category: 'eletricidade',
  limit: 10
});

console.log(services.data);
```

#### Autenticação
```typescript
// Autenticar utilizador
const auth = await nhonguista.auth.login({
  email: 'user@example.com',
  password: 'secure_password'
});

// O token é guardado e usado automaticamente nas próximas requisições
console.log('Bem-vindo!', auth.user.name);
```

## 🏗️ Estrutura e Extensibilidade

O SDK é desenhado sob o padrão *Repository/Service*. Cada domínio da API está mapeado numa propriedade do cliente (ex: `.auth`, `.services`, `.users`).
O `moz-utils` é frequentemente utilizado nos bastidores para padronização de respostas HTTP e validação de estruturas.

## 🤝 Contribuições

Encontrou um endpoint da API em falta no SDK? 
1. Faça fork / crie uma branch.
2. Adicione os tipos correspondentes em `src/types`.
3. Implemente a chamada em `src/resources`.
4. Garanta que a sua alteração é *Type-Safe*.
5. Submeta o PR para avaliação!

## 📄 Licença

Este pacote é de código aberto e distribuído sob a licença **Apache License 2.0**.  
Consulte o ficheiro [LICENSE](./LICENSE) para mais detalhes sobre as permissões e limitações.

---
*Construído com dedicação pela ZEDECK'S IT e a Comunidade Open Source.*
