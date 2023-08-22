const React = require('react');
const { useState, useEffect } = require('react');
const { useParams, Link } = require('react-router-dom');
const client = require('../client');

const VerInstrumentoPage = () => {
  let { id } = useParams();
  const [instrumento, setInstrumento] = useState({});
  
  useEffect(() => {
    const url_instrumento = '/api/instrumentos/' + id;

    client({
      method: 'GET',
      path: url_instrumento
    }).done((response) => {
      setInstrumento(response.entity);
    });
  }, [id]);

  return (
    <>
      <h1>Ver Alumnos</h1>
      
      <table border="1">
        <tbody>
          <tr>
            <th>Nombre</th>
            <td>{instrumento.nombre}</td>
          </tr>
          <tr>
            <th>Categoría</th>
            <td>{instrumento.categoria}</td>
          </tr>
          <tr>
            <th>Descripción</th>
            <td>{instrumento.descripcion}</td>
          </tr>
        </tbody>
      </table>
      
      <Link to={`/editar-instrumento/${id}`}>Editar</Link> | <Link to="/">Volver</Link>
    </>
  );
}

module.exports = VerInstrumentoPage;
