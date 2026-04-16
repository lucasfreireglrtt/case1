import { useState } from "react";
import { supabase } from "../services/supabase";

export default function Form() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    curso: ""
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nome || !form.email || !form.curso) {
      alert("Preencha todos os campos!");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("leads").insert([form]);

    setLoading(false);

    if (error) {
      alert("Erro ao enviar!");
      console.log(error);
    } else {
      alert("Inscrição realizada!");
      setForm({ nome: "", email: "", curso: "" });
    }
  };

  return (
    <section className="form-section" id="form">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Inscreva-se</h2>

        <input
          type="text"
          placeholder="Nome"
          value={form.nome}
          onChange={(e) =>
            setForm({ ...form, nome: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="E-mail"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <select
          value={form.curso}
          onChange={(e) =>
            setForm({ ...form, curso: e.target.value })
          }
        >
          <option value="">Selecione seu curso</option>
          <option>Engenharia Civil</option>
          <option>Engenharia Eletrica</option>
          <option>Engenharia Mecanica</option>
          <option>Engenharia Quimica</option>
          <option>Engenharia de Producão</option>
          <option>Ciência da Computação</option>
          <option>Administração</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </section>
  );
}