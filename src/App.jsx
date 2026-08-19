import { useState, useEffect } from "react";
import "./App.css";
import ContactoCard from "./components/ContactoCard";
import FormularioContacto from "./components/FormularioContacto";

export default function App() {
  const contactosGuardados =
    JSON.parse(localStorage.getItem("contactos")) || [];

  const [contactos, setContactos] = useState(contactosGuardados);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(contactos));
  }, [contactos]);

  const agregarContacto = (nuevo) => {
    setContactos((prev) => [...prev, nuevo]);
  };

  const eliminarContacto = (correo) => {
    setContactos((prev) => prev.filter((c) => c.correo !== correo));
  };



  return (
    <main className="app-container">
      <h1 className="app-title">Agenda ADSO v2 📒</h1>

      <FormularioContacto onAgregar={agregarContacto} />

    <section className="lista-contactos">
      {contactos.map((c) => (
        <ContactoCard
          key={c.correo} // key única para React
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
