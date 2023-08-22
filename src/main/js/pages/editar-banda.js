const React = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const { useState, useEffect } = require('react');

function PageEditarBanda() {
    const [banda, setBanda] = useState({});

    // Obteniendo el parámetro id de la ruta
    let { id } = useParams();

    useEffect(() => {
        client({ method: 'GET', path: '/api/bandas/' + id }).done(response => {
            setBanda(response.entity);
        });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/bandas/' + id,
            entity: banda,
            headers: { 'Content-Type': 'application/json' }
        }).done(() => window.location = "/");
    };

    return (
        <>
            <h1>Editar Profesora</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={banda.nombre}
                    onChange={(e) => setBanda({ ...banda, nombre: e.target.value })}
                />
                <input type="submit" value="Editar Profesora" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageEditarBanda;
