// import React, { useEffect, useState } from 'react';
// import Modal, { ModalHeader, ModalBody } from '../../bootstrap/Modal';
// import Button from '../../bootstrap/Button';
// import Input from '../../bootstrap/forms/Input';
// import FormGroup from '../../bootstrap/forms/FormGroup';
// import { CardBody } from '../../bootstrap/Card';
// import { useFormik } from 'formik';
// import Select from '../../bootstrap/forms/Select';
// import Label from '../../bootstrap/forms/Label';
// import InputGroup from '../../bootstrap/forms/InputGroup';

// interface ModalProductProps {
// 	open: boolean;
// 	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
// 	setIsClose: React.Dispatch<React.SetStateAction<boolean>>;
// 	handleCallbackCloseModal: (() => void);
// 	item?: any;
// }

// export interface FormValues {
// 	document_type: string;
// }

// export const ModalProductCategories: React.FC<ModalProductProps> = ({
// 	open,
// 	setIsOpen,
// 	setIsClose,
// 	item,
// 	handleCallbackCloseModal,
// }) => {

// 	const [isLoading, setIsLoading] = useState(false);

// 	const setCancel = () => {
// 		setIsClose(true);
// 	};

// 	useEffect(() => {

// 	}, []);


// 	return (
// 		<Modal
// 			id='modal-register-product'
// 			titleId='Cadastro de Produto'
// 			isOpen={open}
// 			setIsOpen={setIsOpen}
// 			isStaticBackdrop={true}
// 			isScrollable={false}
// 			isCentered={true}
// 			size='lg'
// 			isAnimation={true}
// 			onSubmit={formik.handleSubmit}>
// 			<ModalHeader className='p-4 mt-2 justify-content-start' setIsOpen={setIsClose}>
// 				<div className='d-flex flex-row align-items-center'>
// 					<p className='fs-4 text-black fw-bold m-0 p-0 ps-2'>EQUIPAMENTO</p>
// 				</div>
// 			</ModalHeader>
// 			<ModalBody className='p-5'>
// 				<form onSubmit={formik.handleSubmit}>
// 					<div className='row  pb-2 d-flex'>
// 						<FormGroup id='serial' label='SERIAL' className='col-md-4 mb-4'>
// 							<Input
// 								type='text'
// 								id='serial'
// 								name='serial'
// 								value={formik.values.serial}
// 								onChange={formik.handleChange}
// 								onBlur={formik.handleBlur}
// 								isValid={formik.touched.serial && !formik.errors.serial}
// 								invalidFeedback={formik.errors.serial}
// 								isTouched={formik.touched.serial}
// 								validFeedback=''
// 								disabled={item ? true : false}
// 							/>
// 						</FormGroup>

// 						<FormGroup id='name' label='Nome' className='col-md-4 mb-4'>
// 							<Input
// 								type='text'
// 								id='name'
// 								name='name'
// 								value={formik.values.name}
// 								onChange={formik.handleChange}
// 							/>
// 						</FormGroup>

// 						<FormGroup id='adress' label='MAC ADDRESS' className='col-md-4 mb-4'>
// 							<Input
// 								type='text'
// 								id='adress'
// 								name='adress'
// 								value={formik.values.adress}
// 								onChange={formik.handleChange}
// 							/>
// 						</FormGroup>

// 						<FormGroup id='device' label='TIPO DE DEVICE' className='col-md-4 mb-4'>
// 							<Select
// 								id='device'
// 								name='device'
// 								onBlur={formik.handleBlur}
// 								onChange={formik.handleChange}
// 								value={formik.values.device}
// 								isTouched={formik.touched.device}
// 								isValid={formik.touched.device && !formik.errors.device}
// 								invalidFeedback={formik.errors.device}
// 								ariaLabel='Select a device'
// 								placeholder='Selecione um Tipo de Device'
// 								list={[
// 									{
// 										text: 'POS',
// 										value: 'POS',
// 									},
// 									{
// 										text: 'POS SOMENTE LISTA',
// 										value: 'POS SOMENTE LISTA',
// 									},
// 									{
// 										text: 'TOTEM DE RECARGA',
// 										value: 'TOTEM DE RECARGA',
// 									},
// 								]}
// 							/>
// 						</FormGroup>

// 						<FormGroup id='model' label='MODELO' className='col-md-4 mb-4'>
// 							<Select
// 								id='model'
// 								name='model'
// 								onBlur={formik.handleBlur}
// 								onChange={formik.handleChange}
// 								value={formik.values.model}
// 								isTouched={formik.touched.model}
// 								isValid={formik.touched.model && !formik.errors.model}
// 								invalidFeedback={formik.errors.model}
// 								placeholder='Selecione um Modelo'
// 								ariaLabel='Select a model'
// 								list={[
// 									{
// 										text: 'A8',
// 										value: 'A8',
// 									},
// 									{
// 										text: 'A930',
// 										value: 'A930',
// 									},
// 									{
// 										text: 'Gpos700',
// 										value: 'Gpos700',
// 									},
// 									{
// 										text: 'P2',
// 										value: 'P2',
// 									},
// 									{
// 										text: 'Sumni',
// 										value: 'Sumni',
// 									},
// 									{
// 										text: 'V2',
// 										value: 'V2',
// 									},
// 								]}
// 							/>
// 						</FormGroup>
// 						<FormGroup id='gsm' label='TECNOLOGIA GSM' className='col-md-4 mb-4'>
// 							<Select
// 								id='gsm'
// 								name='gsm'
// 								onBlur={formik.handleBlur}
// 								onChange={formik.handleChange}
// 								value={formik.values.gsm}
// 								isTouched={formik.touched.gsm}
// 								isValid={formik.touched.gsm && !formik.errors.gsm}
// 								invalidFeedback={formik.errors.gsm}
// 								ariaLabel='Select a gsm'
// 								placeholder='Selecione uma Tecnologia GSM'
// 								list={[
// 									{
// 										text: '4G',
// 										value: '4G',
// 									},
// 									{
// 										text: '5G',
// 										value: '5G',
// 									},
// 								]}
// 							/>
// 						</FormGroup>

// 						<FormGroup id='operator' label='OPERADORA' className='col-md-4 mb-4'>
// 							<Select
// 								id='operator'
// 								name='operator'
// 								onBlur={formik.handleBlur}
// 								onChange={formik.handleChange}
// 								value={formik.values.operator}
// 								isTouched={formik.touched.operator}
// 								placeholder='Selecione uma Operadora'
// 								isValid={formik.touched.operator && !formik.errors.operator}
// 								invalidFeedback={formik.errors.operator}
// 								ariaLabel='Select a operator'
// 								list={[
// 									{
// 										text: 'CLARO',
// 										value: 'CLARO',
// 									},
// 									{
// 										text: 'OI',
// 										value: 'OI',
// 									},
// 									{
// 										text: 'TIM',
// 										value: 'TIM',
// 									},
// 									{
// 										text: 'VIVO',
// 										value: 'VIVO',
// 									},
// 								]}
// 							/>
// 						</FormGroup>

// 						<FormGroup id='status' label='STATUS' className='col-md-4 mb-4'>
// 							<Select
// 								id='status'
// 								name='status'
// 								onBlur={formik.handleBlur}
// 								onChange={formik.handleChange}
// 								value={formik.values.status}
// 								isTouched={formik.touched.status}
// 								placeholder='Selecione um Status'
// 								isValid={formik.touched.status && !formik.errors.status}
// 								invalidFeedback={formik.errors.status}
// 								ariaLabel='Select a status'
// 								disabled={!item ? true : false}
// 								list={[
// 									{
// 										text: 'Bloqueado',
// 										value: 'Bloqueado',
// 									},
// 									{
// 										text: 'Canibalizado',
// 										value: 'Canibalizado',
// 									},
// 									{
// 										text: 'Defeituoso',
// 										value: 'Defeituoso',
// 									},
// 									{
// 										text: 'Estocado',
// 										value: 'Estocado',
// 									},
// 									{
// 										text: 'Fabricado',
// 										value: 'Fabricado',
// 									},
// 									{
// 										text: 'Instalado',
// 										value: 'Instalado',
// 									},
// 									{
// 										text: 'Manutenção',
// 										value: 'Manutenção',
// 									},
// 									{
// 										text: 'Operante',
// 										value: 'Operante',
// 									},
// 									{
// 										text: 'Remetido',
// 										value: 'Remetido',
// 									},
// 								]}
// 							/>
// 						</FormGroup>
// 						<FormGroup
// 							id='fabrication_date'
// 							label='DATA DE FABRICAÇÃO'
// 							className='col-md-4 mb-4'>
// 							<Input
// 								type='date'
// 								id='fabrication_date'
// 								name='fabrication_date'
// 								value={formik.values.fabrication_date}
// 								onChange={formik.handleChange}
// 								onBlur={formik.handleBlur}
// 								isTouched={formik.touched.fabrication_date}
// 								invalidFeedback={formik.errors.fabrication_date}
// 								isValid={
// 									formik.touched.fabrication_date &&
// 									!formik.errors.fabrication_date
// 								}
// 								validFeedback='Assim está bom!'
// 							/>
// 						</FormGroup>
// 					</div>
// 					{/* Buttons */}
// 					<div className='row pt-4'>
// 						<div className='d-flex justify-content-end gap-2'>
// 							{isLoading ? (
// 								<Button color='info' rounded={1} hoverShadow='sm' shadow='sm'>
// 									<Spinner
// 										color='light'
// 										inButton
// 										isGrow
// 										isSmall
// 										size={10}
// 										tag='span'>
// 										Carregando...
// 									</Spinner>
// 									Carregando...
// 								</Button>
// 							) : (
// 								<Button
// 									isDisable={!formik.isValid && !!formik.submitCount}
// 									type='submit'
// 									color='info'
// 									icon='check'
// 									rounded={1}
// 									hoverShadow='sm'
// 									shadow='sm'>
// 									Confirmar
// 								</Button>
// 							)}
// 						</div>
// 					</div>
// 				</form>
// 			</ModalBody>
// 		</Modal>
// 	);
// };

// export default ModalProductCategories;
