const React = require('react');
const { useState, useEffect } = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const EditarInstrumentoPage = () => {

    const [instrumento, setInstrumento] = useState({});
    const [categoria, setCategoria] = useState('');

    let { id } = useParams();

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/instrumentos/' + id
        }).done(response => {
            setInstrumento(response.entity);
            setCategoria(response.entity.categoria); // Setear la categoría inicial
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        instrumento.categoria = categoria; // Actualizar la categoría en el objeto instrumento
        client({
            method: 'PATCH',
            path: '/api/instrumentos/' + id,
            entity: instrumento,
            headers: {'Content-Type': 'application/json'}
        }).done(() => window.location = "/");
    }

    const handleCategoriaChange = (e) => {
        setCategoria(e.target.value);
    }

    return (
        <>
            <h1>Editar Alumnos</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Nombre Alumno">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={instrumento.nombre} onChange={(e) => setInstrumento({...instrumento, nombre: e.target.value})} />

                <label htmlFor="categoria">Categoría</label>
                <select id="categoria" name="categoria" value={categoria} onChange={handleCategoriaChange}>
    <option value="Matemática">Matemática</option>
    <option value="Comunicación">Comunicación</option>
    <option value="Ciencia">Ciencia</option>
</select>


                <label htmlFor="descripcion">Descripción</label>
                <input type="text" id="descripcion" name="descripcion" value={instrumento.descripcion} onChange={(e) => setInstrumento({...instrumento, descripcion: e.target.value})} />

                <input type="submit" value="Editar Alumnos" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = EditarInstrumentoPage;
