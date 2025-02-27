export type MenuItemType = {
    key: string;
    label: string;
    isTitle?: boolean;
    icon?: string;
    url?: string;
    badge?: {
      variant: string;
      text: string;
    };
    parentKey?: string;
    target?: string;
    children?: MenuItemType[];
  };
  
  const MENU_ITEMS: MenuItemType[] = [
    { key: 'intranet', label: 'INTRANET', isTitle: true },
    {
      key: 'comunicacao',
      label: 'COMUNICAÇÃO',
      children: [
        { key: 'mural', label: 'Mural', url: '/account/cadastro' },
        { key: 'contatos', label: 'Contatos', url: '/account/cadastro' },
      ],
    },
    {
      key: 'seguranca',
      label: 'SEGURANÇA',
      children: [
        { key: 'cftv', label: 'CFTV', url: '/account/cadastro' },
        { key: 'portaria', label: 'Portaria', url: '/account/cadastro' },
      ],
    },
    {
      key: 'agendamentos',
      label: 'AGENDAMENTOS',
      children: [
        { key: 'salas', label: 'Salas', url: '/account/cadastro' },
        { key: 'veiculos', label: 'Veículos', url: '/account/cadastro' },
      ],
    },
    {
      key: 'documentos',
      label: 'DOCUMENTOS',
      children: [
        { key: 'politicas-rh', label: 'Políticas RH', url: '/account/cadastro' },
      ],
    },
    {
      key: 'processos',
      label: 'PROCESSOS',
      children: [
        { key: 'its', label: 'ITs', url: '/account/cadastro' },
        { key: 'workflow', label: 'Workflow', url: '/account/cadastro' },
      ],
    },
    {
      key: 'dashboards',
      label: 'DASHBOARDS',
      children: [
        { key: 'kpis-vendas', label: 'KPIs Vendas', url: '/account/cadastro' },
        { key: 'produtividade', label: 'Produtividade', url: '/account/cadastro' },
      ],
    },
    {
      key: 'acessos',
      label: 'ACESSOS',
      children: [
        { key: 'erp', label: 'ERP', url: '/account/cadastro' },
        { key: 'crm', label: 'CRM', url: '/account/cadastro' },
      ],
    },
  ];
  
  export { MENU_ITEMS };
  