!!! IMPORTANT
You are making a marketplace for prestadores de serviço (freelancers)

json
{
  "project": {
    "name": "FREELAS",
    "type": "freelancer_platform",
    "pages": [
      {
        "id": "login_page",
        "name": "Login",
        "components": [
          {
            "type": "header",
            "logo": "FREELAS"
          },
          {
            "type": "image",
            "description": "Profissional uniforme azul"
          },
          {
            "type": "form",
            "fields": [
              {
                "id": "email",
                "label": "E-mail",
                "type": "email"
              },
              {
                "id": "password",
                "label": "Senha",
                "type": "password"
              }
            ],
            "buttons": [
              {
                "id": "loginButton",
                "label": "Entrar"
              },
              {
                "id": "registerButton",
                "label": "Cadastrar"
              }
            ]
          }
        ]
      },
      {
        "id": "register_page",
        "name": "Cadastro",
        "components": [
          {
            "type": "form",
            "fields": [
              {
                "id": "fullName",
                "label": "Nome completo",
                "type": "text"
              },
              {
                "id": "email",
                "label": "E-mail",
                "type": "email"
              },
              {
                "id": "password",
                "label": "Senha",
                "type": "password"
              },
              {
                "id": "confirmPassword",
                "label": "Confirmar senha",
                "type": "password"
              }
            ],
            "buttons": [
              {
                "id": "submitRegister",
                "label": "Cadastrar"
              }
            ]
          }
        ]
      },
      {
        "id": "password_recovery",
        "name": "Recuperação de Senha",
        "components": [
          {
            "type": "card",
            "title": "Recuperação de Senha",
            "fields": [
              {
                "id": "recoveryEmail",
                "label": "Digite seu e-mail",
                "type": "email"
              }
            ],
            "buttons": [
              {
                "id": "recoverButton",
                "label": "Enviar"
              }
            ]
          }
        ]
      },
      {
        "id": "home_dashboard",
        "name": "Dashboard",
        "layout": {
          "sidebar": true,
          "topbar": true
        },
        "components": [
          {
            "type": "welcomeCard",
            "text": "Bem-vindo"
          },
          {
            "type": "menuCards",
            "items": [
              {
                "title": "Mensagens"
              },
              {
                "title": "Serviços"
              },
              {
                "title": "Perfil"
              }
            ]
          }
        ]
      },
      {
        "id": "messages_page",
        "name": "Central de Mensagens",
        "components": [
          {
            "type": "conversationList",
            "items": [
              {
                "client": "Cliente 1",
                "lastMessage": "Olá, Boa tarde!"
              },
              {
                "client": "Cliente 2",
                "lastMessage": "Olá, como posso ajudar?"
              }
            ]
          },
          {
            "type": "chatWindow",
            "activeClient": "Cliente 2",
            "messages": [
              {
                "sender": "client",
                "message": "Olá, Boa tarde!"
              },
              {
                "sender": "freelancer",
                "message": "Olá, como posso ajudar?"
              }
            ]
          }
        ]
      },
      {
        "id": "services_page",
        "name": "Serviços",
        "components": [
          {
            "type": "serviceList",
            "layout": "grid",
            "items": [
              {
                "id": 1,
                "title": "Serviço 1"
              },
              {
                "id": 2,
                "title": "Serviço 2"
              },
              {
                "id": 3,
                "title": "Serviço 3"
              }
            ]
          }
        ]
      },
      {
        "id": "service_details",
        "name": "Detalhes do Serviço",
        "components": [
          {
            "type": "serviceBanner"
          },
          {
            "type": "serviceInfo",
            "fields": [
              {
                "label": "Título",
                "value": "Nome do Serviço"
              },
              {
                "label": "Descrição",
                "value": "Descrição detalhada do serviço"
              },
              {
                "label": "Preço",
                "value": "R$ 150,00"
              }
            ]
          },
          {
            "type": "button",
            "label": "Contratar"
          }
        ]
      },
      {
        "id": "profile_client",
        "name": "Perfil Cliente",
        "components": [
          {
            "type": "profileHeader",
            "role": "Cliente"
          },
          {
            "type": "profileInfo",
            "fields": [
              {
                "label": "Nome"
              },
              {
                "label": "Telefone"
              },
              {
                "label": "E-mail"
              },
              {
                "label": "Endereço"
              }
            ]
          }
        ]
      },
      {
        "id": "profile_freelancer",
        "name": "Perfil Prestador",
        "components": [
          {
            "type": "profileHeader",
            "role": "Prestador"
          },
          {
            "type": "profileInfo",
            "fields": [
              {
                "label": "Nome"
              },
              {
                "label": "Especialidade"
              },
              {
                "label": "Telefone"
              },
              {
                "label": "Avaliação"
              }
            ]
          }
        ]
      },
      {
        "id": "job_requests",
        "name": "Solicitações de Serviço",
        "components": [
          {
            "type": "requestList",
            "items": [
              {
                "client": "Cliente X",
                "service": "Instalação elétrica",
                "status": "Pendente"
              },
              {
                "client": "Cliente Y",
                "service": "Pintura residencial",
                "status": "Aceito"
              }
            ]
          }
        ]
      },
      {
        "id": "notifications_page",
        "name": "Notificações",
        "components": [
          {
            "type": "notificationList",
            "items": [
              {
                "message": "Novo serviço disponível"
              },
              {
                "message": "Mensagem recebida"
              }
            ]
          }
        ]
      }
    ],
    "theme": {
      "primaryColor": "#005A9C",
      "secondaryColor": "#D9E7F5",
      "fontFamily": "Arial",
      "borderRadius": "8px"
    }
  }
}