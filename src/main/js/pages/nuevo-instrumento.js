const React = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');
const { useState } = require('react');

function PageNuevoInstrumento() {
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("Matemática"); // Valor inicial
    const [descripcion, setDescripcion] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/instrumentos',
            entity: { nombre: nombre, categoria: categoria, descripcion: descripcion },
            headers: { 'Content-Type': 'application/json' }
        }).done(() => window.location = "/");
    };

    return (
        <>
            <h1>Nuevo Alumnos</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Nombre Nuevo Alumno">Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e) => setNombre(e.target.value)} /><br />

                <label htmlFor="categoria">Categoría</label>
                <select id="categoria" name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="Matemática">Matemática</option>
                    <option value="Comunicación">Comunicación</option>
                    <option value="Ciencia">Ciencia</option>
                </select><br />

                <label htmlFor="descripcion">Descripción</label>
                <input type="text" id="descripcion" name="descripcion" onChange={(e) => setDescripcion(e.target.value)} /><br />

                <input type="submit" value="Nuevo Alumnos" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageNuevoInstrumento;
