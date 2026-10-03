describe('C1 - Login', () => {
  let usuario

  before(() => {
    const timestamp = Date.now()

    usuario = {
      nome: `Usuario QA ${timestamp}`,
      email: `qa_${timestamp}@teste.com`,
      password: 'Teste@123',
      administrador: 'false'
    }

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: usuario
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')
    })
  })

  it('deve realizar login com sucesso', () => {
    cy.visit('/login')

    cy.get('[data-testid="email"]').type(usuario.email)
    cy.get('[data-testid="senha"]').type(usuario.password)
    cy.get('[data-testid="entrar"]').click()

    cy.url().should('not.include', '/login')
  })

  it('não deve realizar login com senha inválida', () => {
    cy.visit('/login')

    cy.get('[data-testid="email"]').type(usuario.email)
    cy.get('[data-testid="senha"]').type('SenhaInvalida@123')
    cy.get('[data-testid="entrar"]').click()

    cy.url().should('include', '/login')
    cy.contains('Email e/ou senha inválidos').should('be.visible')
  })

  it('não deve realizar login com campo obrigatório vazio', () => {
    cy.visit('/login')

    cy.get('[data-testid="senha"]').type(usuario.password)
    cy.get('[data-testid="entrar"]').click()

    cy.url().should('include', '/login')
  })

  it('deve acessar a área de produtos após o login', () => {
    cy.visit('/login')

    cy.get('[data-testid="email"]').type(usuario.email)
    cy.get('[data-testid="senha"]').type(usuario.password)
    cy.get('[data-testid="entrar"]').click()

    cy.url().should('not.include', '/login')

    cy.contains('Produtos').should('be.visible')
  })
})