import { useState } from "react";
import { supabase } from "../services/supabase";

export default function Form() {
  const [form, setForm] = useState({
    nome: "",
    email: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await supabase.from("leads").insert([form]);

    alert("Enviado!");
  };

  return (
    <form className="form" id="form" onSubmit={handleSubmit}>
      <input
        placeholder="Nome"
        onChange={(e) => setForm({ ...form, nome: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}