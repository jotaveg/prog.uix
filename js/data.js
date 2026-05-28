/**
 * DATA.js - Central data store for FREELAS application
 * Contains all professionals, workspace data, and static content
 */

const DATA = {
  professionals: [
    { id: 'ana-silva', name: 'Ana Silva', initials: 'AS', category: 'design', label: 'Design de marca', rating: 4.9, price: 1200, response: 2, city: 'São Paulo', budget: 'premium', featured: true, bio: 'Sistemas de identidade, apresentações e direção criativa pronta para lançamento.', services: ['Estratégia de marca', 'Identidade visual', 'Design de apresentações'], review: 'Transformou o projeto em uma experiência clara e premium.' },
    { id: 'bruno-costa', name: 'Bruno Costa', initials: 'BC', category: 'development', label: 'Desenvolvimento front-end', rating: 4.8, price: 900, response: 4, city: 'Curitiba', budget: 'growth', featured: true, bio: 'Interfaces responsivas, sistemas de design e entregas focadas em conversão.', services: ['Páginas de captura', 'Sistemas de design', 'Ajustes de performance'], review: 'Muito organizado, rápido e fácil de comunicar.' },
    { id: 'camila-rocha', name: 'Camila Rocha', initials: 'CR', category: 'marketing', label: 'Marketing de crescimento', rating: 4.7, price: 1500, response: 6, city: 'Recife', budget: 'premium', featured: false, bio: 'Funis, estratégia de conteúdo e campanhas de lançamento para negros de serviço.', services: ['Mídia paga', 'Planejamento de campanhas', 'Direção de texto'], review: 'A campanha gerou leads consistentes em poucos dias.' },
    { id: 'diego-melo', name: 'Diego Melo', initials: 'DM', category: 'writing', label: 'Redação UX', rating: 4.6, price: 700, response: 1, city: 'Belo Horizonte', budget: 'starter', featured: false, bio: 'Microtexto, fluxos de entrada e mensagens de produto com leitura limpa.', services: ['Auditoria UX', 'Redação', 'Sistema de voz'], review: 'Cada tela ficou mais calma e fácil de entender.' },
    { id: 'elaine-souza', name: 'Elaine Souza', initials: 'ES', category: 'design', label: 'UI de produto', rating: 5, price: 1800, response: 3, city: 'Fortaleza', budget: 'premium', featured: true, bio: 'Painéis de produto, fluxos complexos e sistemas de interface para SaaS.', services: ['UI de painel', 'Consultoria UX', 'Design de produto'], review: 'Sensação excepcional de estrutura e hierarquia visual.' },
    { id: 'felipe-amaral', name: 'Felipe Amaral', initials: 'FA', category: 'development', label: 'Webflow / sem código', rating: 4.5, price: 600, response: 5, city: 'Florianópolis', budget: 'starter', featured: false, bio: 'Sites de marketing rápidos, pensados para velocidade, clareza e manutenção simples.', services: ['Construção em Webflow', 'Automação sem código', 'Atualização de sites'], review: 'Entregou rápido sem perder qualidade.' },
  ],
  workspace: {
    dashboard: {
      title: 'Painel',
      metrics: [
        { label: 'Pontos gerais', value: '84', delta: '+18 este mês' },
        { label: 'Atividades pendentes', value: '06', delta: '-2 desde ontem' },
        { label: 'Mensagens não lidas', value: '03', delta: '+1 desde a manhã' },
      ],
      reviews: [
        { name: 'Marina Costa', rating: 5, time: 'há 12 min', text: 'Entregou o quadro da campanha em tempo recorde e manteve cada detalhe alinhado.' },
        { name: 'Rafael Lima', rating: 4.8, time: 'há 2h', text: 'A interface ficou muito mais clara depois das sugestões de redesenho.' },
      ],
      tasks: [
        { client: 'Studio Lume', type: 'Responder ao briefing', status: 'pending', eta: 'Vence em 2h' },
        { client: 'Mundo Verde', type: 'Concluir revisão da página inicial', status: 'active', eta: 'Hoje' },
        { client: 'Cia. Atlas', type: 'Enviar arquivos finais', status: 'done', eta: 'Concluído' },
      ],
    },
    services: [
      { title: 'Sprint de marca', price: 'R$ 1.200', status: 'Ativo', description: 'Um sprint estruturado de identidade para novos lançamentos e atualizações.' },
      { title: 'Renovação do site', price: 'R$ 2.400', status: 'Ativo', description: 'Revisão responsiva da interface com foco em conversão.' },
      { title: 'Suporte mensal', price: 'R$ 850', status: 'Pausado', description: 'Edições contínuas, correções rápidas e atualizações prioritárias todo mês.' },
      { title: 'Kit de landing pages', price: 'R$ 1.050', status: 'Ativo', description: 'Blocos reutilizáveis de landing page para lançamentos de campanha.' },
    ],
    activities: [
      { client: 'Mariana Lopes', title: 'Feedback pendente na seção hero', status: 'pending', detail: 'Aguardando resposta do cliente' },
      { client: 'André Prado', title: 'Entrega de design aprovada', status: 'done', detail: 'Arquivos compartilhados com sucesso' },
      { client: 'Nexus Labs', title: 'Escopo atualizado para nova funcionalidade', status: 'active', detail: 'Rever cronograma revisado' },
    ],
    conversations: [
      { id: 'marina-costa', client: 'Marina Costa', project: 'Relançamento de marca', last: 'Podemos mover a oficina para quinta-feira?', unread: 2, messages: [
        { author: 'Marina Costa', time: '09:10', text: 'Podemos mover a oficina para quinta-feira?' },
        { author: 'Você', time: '09:22', text: 'Sim. Vou atualizar o convite e enviar uma agenda revisada.' },
        { author: 'Marina Costa', time: '09:41', text: 'Perfeito, obrigada.' },
      ] },
      { id: 'rafael-lima', client: 'Rafael Lima', project: 'Limpeza da página inicial', last: 'A nova versão ficou muito mais forte.', unread: 0, messages: [
        { author: 'Rafael Lima', time: 'Ontem', text: 'A nova versão ficou muito mais forte.' },
        { author: 'Você', time: 'Ontem', text: 'Ótimo. Vou enviar o pacote final de arquivos hoje à noite.' },
      ] },
      { id: 'nexus-labs', client: 'Nexus Labs', project: 'Painel do produto', last: 'Precisamos tornar o feed de atividades mais denso.', unread: 1, messages: [
        { author: 'Nexus Labs', time: '08:30', text: 'Precisamos tornar o feed de atividades mais denso.' },
        { author: 'Você', time: '08:45', text: 'Entendido. Vou reduzir os espaçamentos e melhorar a hierarquia.' },
      ] },
    ],
  },
};
