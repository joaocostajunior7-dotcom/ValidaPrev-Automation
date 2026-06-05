# ValidaPrev-Automation
Sistema automatizado de controle de validades e lotes para gôndolas.


# ValidaPrev v1.0 - Automação de Monitoramento de Validades

Sistema focado na mitigação de riscos e redução de quebras operacionais no varejo farmacêutico e logístico através do controle automatizado de lotes e validades.

## 🎯 Problema de Negócio
A verificação manual de validades em grandes estoques consome tempo operacional excessivo e está sujeita a falhas humanas, resultando em produtos vencidos em gôndola e perdas financeiras diretas.

## 🛠️ Solução Tecnológica
Utilização de lógica de programação aplicada ao Google Apps Script para criar um motor de varredura diária de banco de dados. O sistema calcula a janela temporal restante e renderiza alertas visuais condicionados.

### Regras de Negócio Implementadas:
- **Janela de 90 dias (Verde):** Sinalização para monitoramento preventivo.
- **Janela de 30 dias (Amarelo):** Gatilho para o setor comercial iniciar campanhas de escoamento.
- **Janela de 15 dias (Vermelho):** Alerta crítico para recolhimento físico e logística reversa.

## 💻 Código Utilizado
O script foi projetado para execução em background e pode ser agendado para rodar de forma síncrona a cada 24 horas.

