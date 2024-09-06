import React from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
import './CadastroForms.css'; // Certifique-se de que o caminho está correto

function CadastroForms() {
  return (
    <Container className="form-container">
      <div className="form-box">
        <h2 className="form-title">Formulário de Cadastro</h2>
        <Form>
          <Form.Field>
            <label>Telefone</label>
            <input placeholder="(XX) XXXXX-XXXX" />
          </Form.Field>
          <Form.Field>
            <label>CPF</label>
            <input placeholder="XXX.XXX.XXX-XX" />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input type="email" placeholder="Seu email" />
          </Form.Field>
          <Form.Field>
            <label>Senha</label>
            <input type="password" placeholder="Sua senha" />
          </Form.Field>
          <Form.Field>
            <label>Confirmação de Email</label>
            <input type="email" placeholder="Confirme seu email" />
          </Form.Field>
          <Form.Field>
            <label>Confirmação de Senha</label>
            <input type="password" placeholder="Confirme sua senha" />
          </Form.Field>
          <Button type="submit">Enviar</Button>
        </Form>
      </div>
    </Container>
  );
}

export default CadastroForms;
