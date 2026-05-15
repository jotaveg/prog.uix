# Mercado de Serviços - Frontend Static HTML/CSS

Uma plataforma completa de marketplace para conectar clientes com prestadores de serviço (freelancers) em português brasileiro. Frontend totalmente responsivo, mobile-first, desenvolvido com HTML5 e CSS3 puro.

## 📋 Estrutura do Projeto

```
prog.uix/
├── index.html                  # Página inicial (Home)
├── styles.css                  # Estilos globais e design system
├── script.js                   # JavaScript global (menu mobile, etc)
│
└── pages/
    ├── login.html              # Página de Login
    ├── register.html           # Página de Registro
    ├── auth.css                # Estilos de autenticação
    ├── auth.js                 # Lógica de autenticação
    │
    ├── listings.html           # Página de resultados de busca
    ├── listings.css            # Estilos de listagens
    ├── listings.js             # Lógica de filtros e ordenação
    │
    ├── profile.html            # Perfil do profissional
    ├── profile.css             # Estilos do perfil
    │
    ├── dashboard.html          # Dashboard do usuário
    ├── dashboard.css           # Estilos do dashboard
    ├── dashboard.js            # Lógica do dashboard
    │
    ├── home.css                # Estilos da página inicial
```

## 🎨 Design System

Baseado em `figma-layout.md`, implementado com CSS custom properties:

### Cores
- **Primary**: #125DA3 (azul principal)
- **Background**: #FFFFFF (branco)
- **Surface**: #ECE6F0 (cinza claro)
- **Text**: #161414 (preto profundo)
- **Border**: #D9D9D9 (cinza borda)
- **Text Muted**: #79747E (cinza texto secundário)

### Tipografia
- Font: System stack (Segoe UI, Roboto, etc)
- Tamanhos: xs (12px) → 3xl (40px)

### Espaçamento
- Base: 8px
- xs: 4px | sm: 8px | md: 16px | lg: 24px | xl: 32px

### Border Radius
- sm: 4px | md: 8px | lg: 16px | full: 9999px

## 📱 Páginas Disponíveis

### 1. **Home / Landing Page** (`index.html`)
- Header com logo e navegação
- Hero section com barra de busca
- Grid de categorias populares
- Seção "Profissionais em Destaque"
- Footer completo
- Responsivo mobile-first

### 2. **Autenticação** (`login.html` / `register.html`)
- Toggle entre "Sou Cliente" e "Sou Prestador"
- Formulários específicos para cada tipo
- Validação básica com HTML5
- Opção de login com Google
- Links para recuperação de senha

### 3. **Busca e Listagens** (`listings.html`)
- Sidebar com filtros avançados:
  - Categoria
  - Faixa de preço
  - Avaliação
  - Disponibilidade
- Grid de profissionais com cards
- Ordenação (relevância, preço, avaliação)
- Sistema de paginação
- Opção de favoritar profissionais

### 4. **Perfil do Profissional** (`profile.html`)
- Cabeçalho com informações principais
- Seção "Sobre"
- Serviços oferecidos
- Timeline de experiência
- Avaliações e reviews
- Sidebar com formulário de contato
- Calendário de disponibilidade
- Verificações de segurança

### 5. **Dashboard do Usuário** (`dashboard.html`)
- Sidebar de navegação persistente
- **Dashboard**: Estatísticas gerais e atividades recentes
- **Mensagens**: Inbox de conversa com profissionais/clientes
- **Projetos**: Listagem de projetos ativos com progresso
- **Configurações**: Dados pessoais, notificações, segurança

## 🎯 Funcionalidades Implementadas

### JavaScript (Vanilla)
- ✅ Menu mobile responsivo com hamburger
- ✅ Toggle entre formas de login/registro
- ✅ Filtros de busca (não persistem - app estático)
- ✅ Navegação entre seções do dashboard
- ✅ Interatividade com botões e formulários
- ✅ Animações suaves CSS

### Responsividade
- ✅ Mobile First approach
- ✅ Breakpoints: 640px, 768px, 1024px
- ✅ Grid layouts adaptativos
- ✅ Touch-friendly buttons e inputs
- ✅ Navegação mobile com hamburger

## 🚀 Como Usar

### Abrir as páginas

1. **Home**: Abra `index.html` no navegador
2. **Login**: Clique em "Login" ou acesse `pages/login.html`
3. **Registro**: Clique em "Registrar" ou acesse `pages/register.html`
4. **Busca**: Acesse `pages/listings.html`
5. **Perfil**: Acesse `pages/profile.html`
6. **Dashboard**: Acesse `pages/dashboard.html`

### Com um servidor local

```bash
# Python 3
python -m http.server 8000

# Node.js (com http-server)
npx http-server

# PHP
php -S localhost:8000
```

Depois acesse `http://localhost:8000`

## ⚠️ Notas Importantes

- **Backend**: Não implementado (projeto static apenas)
- **Formulários**: Não fazem requisições reais - dados não são salvos
- **Links**: Alguns links são `#` ou `index.html` para demonstração
- **JavaScript**: Apenas lógica de UI, sem persistência de dados
- **Banco de dados**: Não incluso (seria necessário backend)

## 🎨 Personalização

### Mudar cores
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --color-primary: #125DA3;
    /* ... outras cores ... */
}
```

### Adicionar novas páginas
1. Crie novo HTML em `/pages/`
2. Crie CSS específico em `/pages/novo.css`
3. Importe `styles.css` e o novo CSS
4. Adicione links nos headers

## 📱 Breakpoints de Responsividade

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop Small**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Estrutura de Componentes Reutilizáveis

- `.btn` - Botões (primary, secondary, ghost)
- `.card` - Cartões
- `.form-group` - Grupos de formulário
- `.container` - Largura máxima com padding
- `.section-title` - Títulos de seção

## 📝 Licença

Projeto educacional/demo - Livre para uso

## 👨‍💻 Desenvolvido com

- HTML5 Semântico
- CSS3 com Grid, Flexbox e Custom Properties
- Vanilla JavaScript (ES6+)
- Design System responsivo
- Mobile-first approach

---

**Versão**: 1.0  
**Data**: Maio 2026  
**Idioma**: Português Brasileiro (PT-BR)
