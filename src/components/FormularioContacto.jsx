import { useState } from "react";

export default function FormularioContacto({ onAgregar }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    etiqueta: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.telefono || !form.correo) return;
    onAgregar(form);
    setForm({ nombre: "", telefono: "", correo: "", etiqueta: "" });
  };

  return (
    <form onSubmit={onSubmit}className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700">Nombre *</label>
      <input
        name="nombre"
        value={form.nombre}
        onChange={onChange}
        placeholder="Ej: Ana López"
        className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none p-3"
      />

      </div>
      <div>

      <label className="block text-sm font-medium text-gray-700">Teléfono *</label>
      <input
        name="telefono"
        value={form.telefono}
        onChange={onChange}
        placeholder="Ej: 300 123 4567"
        className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none p-3"
      />
      </div>
      </div>

      <div>
      <label className="block text-sm font-medium text-gray-700">Correo *</label>
      <input
        name="correo"
        value={form.correo}
        onChange={onChange}
        placeholder="Ej: ana@sena.edu.co"
        className="mt-1 w-full rounded-lg border border-gray-300
focus:ring-2 focus:ring-purple-500 focus:outline-none p-3"
      />

      </div>
      <div>

      <label className="block text-sm font-medium text-gray-700">Etiqueta (opcional)</label>
      <input
        name="etiqueta"
        value={form.etiqueta}
        onChange={onChange}
        placeholder="Ej: Trabajo"
        className="mt-1 w-full rounded-lg border border-gray-300
focus:ring-2 focus:ring-purple-500 focus:outline-none p-3"
      />

      </div>
      <button className="w-full bg-purple-600 hover:bg-purple-700 textwhite font-semibold py-3 rounded-lg transition-colors">Agregar contacto</button>
    </form>

  );
}
