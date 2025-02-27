import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { PageTitle } from 'components';

const Cadastro = () => {
    const [formData, setFormData] = useState({
        nome: '',
        categoria: '',
        preco: '',
        quantidade: '',
        status: true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica para enviar os dados do formulário para o backend
        console.log('Dados do formulário:', formData);
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'eCommerce', path: '/apps/ecommerce/cadastro' },
                    { label: 'Cadastro', path: '/apps/ecommerce/cadastro', active: true },
                ]}
                title={'Cadastro de Produto'}
            />

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formNome">
                                    <Form.Label>Nome do Produto</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formCategoria" className="mt-3">
                                    <Form.Label>Categoria</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="categoria"
                                        value={formData.categoria}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPreco" className="mt-3">
                                    <Form.Label>Preço</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="preco"
                                        value={formData.preco}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formQuantidade" className="mt-3">
                                    <Form.Label>Quantidade</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="quantidade"
                                        value={formData.quantidade}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formStatus" className="mt-3">
                                    <Form.Check
                                        type="checkbox"
                                        label="Ativo"
                                        name="status"
                                        checked={formData.status}
                                        onChange={(e) =>
                                            setFormData({ ...formData, status: e.target.checked })
                                        }
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mt-3">
                                    Cadastrar Produto
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Cadastro;
