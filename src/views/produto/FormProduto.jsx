import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormProduto () {


	return(
		<div>

			<MenuSistema tela={'produto'} />

			<div style={{marginTop: '3%'}}>

				<Container textAlign='justified' >

					<h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
					
					<Divider />

					<div style={{marginTop: '4%'}}>

						<Form>

							<Form.Group>

								<Form.Input
									required
									label='Título'
									placeholder='Informe o título do produto'
									width={12}
									tabIndex='1'
									maxLength="300"
								/>

								<Form.Input
									required
									fluid
									label='Código do Produto'
									placeholder='Informe o código do produto'
									width={5}
									tabIndex='2'
									maxLength='10'
								/>

							</Form.Group>

							<Form.TextArea
								label='Descrição'
								placeholder='Informe a descrição do produto'
								maxLength="100000"
							/>

							<Form.Group>

								<Form.Input
									required
									fluid
									label='Valor Unitário'
									tabIndex='5'
									name='valorUnitario'
									width={6}
								/>
								
								<Form.Input
									fluid
									placeholder='30'
									label='Tempo de Entrega Mínimo em Minutos'
									width={5}
									tabIndex='6'
									maxLength="3"
								/>
								
								<Form.Input
									fluid
									placeholder='40'
									label='Tempo de Entrega Máximo em Minutos'
									width={5}
									tabIndex='7'
									maxLength="3"
								/>
							</Form.Group>

							<Form.Group widths='equal' style={{marginTop: '4%', justifyContent:'space-between'}}>

								<Button
									tabIndex='8'
									label='Voltar'
									circular
									color='orange'
									icon='reply'
									as={Link} 
									to='/list-produto'
								/>

								<Button
									tabIndex='9'
									label='Salvar'
									circular
									color='blue'
									icon='save'
									floated='right'
								/>

							</Form.Group>

						</Form>
					</div>
				</Container>
			</div>
		</div>
	)
}