import { useState } from "react";
import "./App.css";
import ContactoCard from "./components/ContactoCard";
import FormularioContacto from "./components/FormularioContacto";

export default function App() {
  // Esta es nuestra "base de datos" inicial quemada en el código
  const [contactos, setContactos] = useState([
    {
      id: 1,
      nombre: "Carolina Pérez",
      telefono: "300 123 4567",
      correo: "carolina@sena.edu.co",
      etiqueta: "Compañera",

    },
    
  ]);

  //Agregar
  const agregarContacto = (nuevo) => {
    setContactos((prev) => [...prev,{id: Date.now(),...nuevo}]);
  };

  // Eliminar
   const eliminarContacto = (id) => {
     setContactos((prev) => prev.filter((c) => c.id !== id));};


  return (
    <main className="app-container">
      <h1 className="app-title">Agenda ADSO v2 📒</h1>

      <FormularioContacto onAgregar={agregarContacto} />

    <section className="lista-contactos">
      {contactos.map((c) => (
        <ContactoCard
          key={c.id} // key única para React
          id={c.id}
          nombre={c.nombre} // prop nombre
          telefono={c.telefono} // prop telefono
          correo={c.correo} // prop correo
          etiqueta={c.etiqueta} // prop etiqueta (Cliente, Instructor, etc.)
          onDelete={eliminarContacto}
        />
      ))}

      </section>
    </main>
  );
}
