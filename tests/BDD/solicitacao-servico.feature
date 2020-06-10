Funcionalidade: Solicitação de serviço
    Funcionalidade relacionada a listagem e solicitações de serviços

Contexto:
    Dado que o usuário está logado na plataforma

Cenário: Acessar lista de serviços

    Quando o usuário acessa a lista de serviços disponíveis
    Então os serviços disponíveis são apresentados

Cenário: Solicitar serviço

    E que a lista de serviços disponíveis foi apresentada
    Quando o usuário seleciona um serviço disponível
    Então é exibida uma confirmação
    E é solicitado o pagamento para o usuário

Cenário: Realizar pagamento do serviço

    E que o usuário recebeu a solitação de pagamento
    Quando o usuário realiza o pagamento
    Então é exibida uma confirmação     
    E é enviada uma notificação para o fornecedor