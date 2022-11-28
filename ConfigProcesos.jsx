import React, { useState } from "react";
import "./ConfigProcesos.css"
import {
    Button, Form, FormGroup, Table, Row, Col, Input,
    Modal, ModalHeader, ModalBody, ModalFooter, Label,
    CustomInput, Collapse, Card, CardBody, CardColumns
} from "reactstrap";

import DashboardLayout from "../../../layout/DashboardLayout"

const ConfigProcesos = () => {



    const Card = ({ data, handleSubmitHijo }) => {
        const [crearHijoModal, setCrearHijoModal] = useState(false)
        const [pName, setPName] = useState("")

        const [name, setName] = useState("")
        const [description, setDescription] = useState("")
        const [cost, setCost] = useState("")
        const [notSupport, setNotSupport] = useState([])

        console.log("data", data)
        return (
            <div className="proceso-cont">
                {data && data.map((item, index) => (
                    <div key={index} >
                        <div className="proceso-item">
                            <div className="proceso-item-name-cont">
                                <h2>{item.name}</h2>
                                <h2>{item.cost}</h2>
                            </div>

                            <div className="proceso-opciones">
                                <button
                                    onClick={() => {
                                        setPName(item.name)
                                        setCrearHijoModal(!crearHijoModal)
                                    }}
                                    style={{
                                        border: "none",
                                        padding: "10px 20px",
                                        fontSize: "20px",
                                        borderBottomLeftRadius: "10px",
                                        backgroundColor: "green",
                                        color: "#fff",
                                    }}>
                                    <i className="fa fa-network-wired"></i>
                                </button>
                                <button style={{
                                    border: "none",
                                    padding: "10px 20px",
                                    fontSize: "20px",
                                }}>
                                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                </button>
                                <button
                                    style={{
                                        border: "none",
                                        padding: "10px 20px",
                                        fontSize: "20px",
                                        backgroundColor: "red",
                                        color: "#fff",
                                        borderBottomRightRadius: "10px",
                                    }}
                                >
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                        {/*  CREAR HIJO MODAL */}
                        <Modal isOpen={crearHijoModal} /* toggle={this.toggle} */ className="modal-lg">
                            <ModalHeader /* toggle={this.toggle} */>Crear Proceso Hijo</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup>
                                        <Label>Nombre</Label>
                                        <br />
                                        <Input
                                            className="form-control"
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => {
                                                setName(e.target.value)
                                            }}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Description</Label>
                                        <br />
                                        <Input
                                            className="form-control"
                                            type="text"
                                            required
                                            value={description}
                                            onChange={(e) => {
                                                setDescription(e.target.value)
                                            }}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Cost</Label>
                                        <br />
                                        <Input
                                            className="form-control"
                                            type="text"
                                            required
                                            value={cost}
                                            onChange={(e) => {
                                                setCost(e.target.value)
                                            }}
                                        />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={() => {
                                        handleSubmitHijo(item, name, description, cost)
                                        setCrearHijoModal(!crearHijoModal)
                                    }}>Crear</Button>
                                <Button
                                    className="btn btn-danger"
                                    onClick={() => { setCrearHijoModal(!crearHijoModal) }}>Cancelar</Button>
                            </ModalFooter>
                        </Modal>
                        {item.hijos?.length && <Card data={item.hijos} handleSubmitHijo={handleSubmitHijo} />}
                    </div>
                ))}
            </div>
        );
    };



    const ConfigProcesosHijo = () => {

        const [procesoItems, setProcesoItems] = useState([
            {
                name: "1",
                cost: "1",
                description: "1",
                hijos: [
                    {
                        name: "3",
                        cost: "3",
                        description: "3",
                        hijos: [
                            {
                                name: "4",
                                cost: "4",
                                description: "4",
                                hijos: [

                                ]
                            },
                            {
                                name: "5",
                                cost: "5",
                                description: "5",
                                hijos: [

                                ]
                            }
                        ],

                    }
                ]
            },
            {
                name: "2",
                cost: "2",
                description: "2",
                hijos: [
                    {
                        name: "6",
                        cost: "6",
                        description: "6",
                        hijos: [

                        ]
                    }
                ]
            }
        ])

        const [crearModal, setCrearModal] = useState(false)
        /* const [crearHijoModal, setCrearHijoModal] = useState(false) */

        const [pName, setPName] = useState("")

        const [name, setName] = useState("")
        const [description, setDescription] = useState("")
        const [cost, setCost] = useState("")
        const [notSupport, setNotSupport] = useState([])

        const handleSubmit = () => {
            if (name && description && cost) {
                let data = {
                    name: name,
                    description: description,
                    cost: cost,
                    hijos: [],
                }
                procesoItems.push(data);
                setName("")
                setDescription("")
                setCost("")
            }
        }
        console.log("procesoItems", procesoItems)

        const handleSubmitHijo = (parent, nombre, descripcion, costo) => {

            if (nombre && descripcion && costo) {
                console.log("parent", parent)
                let data = {
                    name: nombre,
                    description: descripcion,
                    cost: costo,
                    hijos: [],
                }
                console.log("parent", parent)
                console.log("nombre", nombre)
                console.log("descripcion", descripcion)
                console.log("costo", costo)
                parent.hijos.push(data)
                // setProcesoItems(proceso => [...proceso, parent]);
                procesoItems.map((parentFind, indexParent) => {
                    console.log("parentFind", parentFind)
                    let isParent = procesoItems.find((item) => item.name === parentFind.name)
                    if (1 == 1) {
                        procesoItems[indexParent].hijos.push(data);
                    } else {
                        parentFind.hijos?.length && parentFind.hijos.map((hijoFind, indexSon) => {
                            console.log("indexSon: ", indexSon)
                            console.log("parent", parent)
                            if (hijoFind.name === parent.name) {
                                console.log("parentFind: ", parentFind)
                                console.log("hijoFind: ", hijoFind)
                                console.log("indexParent: ", indexParent)
                                console.log("indexSon: ", indexSon)
                                hijoFind.hijos.push(data);
                                //.find((item) => item.name === parent) 
                            } else {
                                parentFind.hijos?.length && parentFind.hijos.map((hijoFind, indexSon) => {
                                    console.log("indexSon: ", indexSon)
                                    console.log("parent", parent)
                                    if (hijoFind.name === parent) {
                                        console.log("parentFind: ", parentFind)
                                        console.log("hijoFind: ", hijoFind)
                                        console.log("indexParent: ", indexParent)
                                        console.log("indexSon: ", indexSon)
                                        hijoFind.hijos.push(data);

                                    }

                                })
                            }

                        })
                    }
                })
                /*  if (procesoItems && procesoItems.find((item) => item.name === parent)) {
                     procesoItems.find((item) => item.name === parent).hijos.push(data);
                 } else if (procesoItems.hijos && procesoItems.hijos.find((item) => item.name === parent)) {
                     procesoItems.hijos.find((item) => item.name === parent).hijos.push(data);
                 } */


                setName("")
                setDescription("")
                setCost("")
                setPName("")
                //console.log("procesoItems.find((item)  => item.name === name )", procesoItems.find((item) => item.name === parent))
            }
        }

        return (
            <div style={{ display: "block", fontSize: "20px", padding: "5%" }}>
                <h1>Procesos</h1>
                <Button
                    className="create"
                    onClick={() => {
                        setCrearModal(!crearModal)
                    }}>
                    Create
                </Button>
                <div className="proceso-cont">
                    <Card data={procesoItems} handleSubmitHijo={handleSubmitHijo} />
                </div>

                {/* CREAR MODAL */}
                <Modal isOpen={crearModal} /* toggle={this.toggle} */ className="modal-lg">
                    <ModalHeader /* toggle={this.toggle} */>Crear Proceso</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Nombre</Label>
                                <br />
                                <Input
                                    className="form-control"
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Description</Label>
                                <br />
                                <Input
                                    className="form-control"
                                    type="text"
                                    required
                                    value={description}
                                    onChange={(e) => {
                                        setDescription(e.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Cost</Label>
                                <br />
                                <Input
                                    className="form-control"
                                    type="text"
                                    required
                                    value={cost}
                                    onChange={(e) => {
                                        setCost(e.target.value)
                                    }}
                                />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() => {
                                handleSubmit()
                                setCrearModal(!crearModal)
                            }}>Crear</Button>
                        <Button
                            className="btn btn-danger"
                            onClick={() => { setCrearModal(!crearModal) }}>Cancelar</Button>
                    </ModalFooter>
                </Modal>



            </div>
        );




        /*  {
                    name: "p1",
                sons: [
                {
                    name: "p3",
                 },
                {
                    name: "p4",
                 }
                ],
         },
                {
                    name: "p2",
                sons: [
                {
                    name: "p6",
                 },
                {
                    name: "p5",
                 }
                ]
         }, */



    }














    return (
        <DashboardLayout pageContent={ConfigProcesosHijo()} />
    )


};

export default ConfigProcesos;
