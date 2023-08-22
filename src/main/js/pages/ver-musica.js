const React = require('react');
const { useState, useEffect } = require('react');
const { useParams, Link } = require('react-router-dom');
const client = require('../client');

const VerMusicoPage = () => {
  let { id } = useParams();
  const [musico, setMusico] = useState({});
  
  useEffect(() => {
    const url_musico = '/api/musicos/' + id;

    client({
      method: 'GET',
      path: url_musico
    }).done((response) => {
      setMusico(response.entity);
    });
  }, [id]);

  return (
    <>
      <h1>Ver Curso</h1>
      
      <table border="1">
        <tbody>
          <tr>
            <th>Nombre</th>
            <td>{musico.nombre}</td>
          </tr>
        </tbody>
      </table>
      
      <Link to={`/editar-musico/${id}`}>Editar</Link> | <Link to="/">Volver</Link>
    </>
  );
}

module.exports = VerMusicoPage;
