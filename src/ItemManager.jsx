// src/ItemManager.jsx
import { useState } from "react";

export default function ItemManager() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [editIndex, setEditIndex] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editIndex === null) {
      setItems([...items, form]);
    } else {
      const updated = [...items];
      updated[editIndex] = form;
      setItems(updated);
      setEditIndex(null);
    }
    setForm({ title: "", description: "" });
  }

  function handleEdit(index) {
    setEditIndex(index);
    setForm(items[index]);
  }

  function handleDelete(index) {
    const filtered = items.filter((_, i) => i !== index);
    setItems(filtered);
    setEditIndex(null);
    setForm({ title: "", description: "" });
  }

  return (
    <div>
      <h2>Tableau de bord</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Titre"
          value={form.title}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        ></textarea>
        <br />
        <button type="submit">
          {editIndex === null ? "Ajouter" : "Modifier"}
        </button>
        {editIndex !== null && (
          <button
            type="button"
            onClick={() => {
              setEditIndex(null);
              setForm({ title: "", description: "" });
            }}
          >
            Annuler
          </button>
        )}
      </form>

      <h3>Liste des items</h3>
      {items.length === 0 ? (
        <p>Aucun item</p>
      ) : (
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
              <button className="edit" onClick={() => handleEdit(i)}>
                Modifier
              </button>
              <button className="delete" onClick={() => handleDelete(i)}>
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
