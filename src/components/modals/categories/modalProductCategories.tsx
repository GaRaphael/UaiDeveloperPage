"use client";
import React, { useEffect, useState } from 'react';
import Modal, { ModalHeader, ModalBody } from '../../bootstrap/Modal';
import Input from '../../bootstrap/forms/Input';
import FormGroup from '../../bootstrap/forms/FormGroup';
import { CardBody } from '../../bootstrap/Card';
import { useFormik } from 'formik';
import Select from '../../bootstrap/forms/Select';
import Label from '../../bootstrap/forms/Label';
import { SketchPicker } from 'react-color';

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import showNotification from '@/components/extras/showNotification';
import api from '../../../../api/api';
import Textarea from '@/components/bootstrap/forms/Textarea';


export const ModalProductCategories: React.FC = () => {

    const [imageString, setImageString] = useState<string>('');

    const formik = useFormik({
        initialValues: {
            image: '',
            model: '',
            price: '',
            size: '',
            color: '',
            composition: '',
            description: '',
        },

        onSubmit: async (values) => {
            const data = {
                model: values.model,
                image: imageString,
                price: parseFloat(values.price),
                size: values.size,
                color: values.color,
                composition: values.composition,
                description: values.description,
            };

            try {
                const response = await api.post('/suit', data);
                const message = 'Terno cadastrado com sucesso'

                if (response.status === 200) {
                    showNotification('Notificação', message, 'success');
                }

            } catch (error) {
                showNotification('Atenção', 'Erro ao cadastrar um terno', 'danger');
            }
        },
    });

    const convertImageToString = (file: File) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result as string;
            setImageString(result);
        };
    };



    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" style={{ backgroundColor: 'black', color: "white" }}>Cadastrar produto</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Cadastrar produto</DialogTitle>
                </DialogHeader>
                <form onSubmit={formik.handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="image" className="text-right">
                                Imagem
                            </Label>
                            <Input
                                style={{
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                }}
                                type="file"
                                id="image"
                                className="col-span-3"
                                accept="image/*"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const file = e.currentTarget.files ? e.currentTarget.files[0] : null;
                                    if (file) {
                                        convertImageToString(file);
                                    }
                                }}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="model" className="text-right">
                                Modelo
                            </Label>
                            <Input
                                style={{
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                }}
                                id="model"
                                onChange={formik.handleChange}
                                value={formik.values.model}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="color" className="text-right"
                            >
                                Cor
                            </Label>
                            <SketchPicker
                                color={formik.values.color}
                                onChange={(color: any) => formik.setFieldValue('color', color.hex)}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="price" className="text-right">
                                Preço
                            </Label>
                            <Input
                                style={{
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                }}
                                id="price"
                                className="col-span-3"
                                value={formik.values.price}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="size" className="text-right">
                                Tamanho
                            </Label>
                            <Input
                                style={{
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                }}
                                id="size"
                                className="col-span-3"
                                value={formik.values.size}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="composition" className="text-right">
                                Composição
                            </Label>
                            <Input
                                style={{
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                }}
                                id="composition"
                                className="col-span-3"
                                value={formik.values.composition}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Descrição
                            </Label>
                            <Textarea
                                style={{
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                }}
                                id="description"
                                className="col-span-3"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Cadastrar</Button>
                    </DialogFooter>
                </form>
            </DialogContent>

        </Dialog>

    );
};

export default ModalProductCategories;
