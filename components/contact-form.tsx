"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-xs font-mono text-muted-foreground"
          >
            NOME
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Digite seu nome."
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-xs font-mono text-muted-foreground"
          >
            E-MAIL
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu e-mail."
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-xs font-mono text-muted-foreground"
        >
          MENSAGEM
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Digite sua mensagem..."
          className="min-h-[150px]"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit" className="w-full" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
      </Button>

      {status === "success" && (
        <p className="text-sm text-green-500">Mensagem enviada com sucesso!</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500">Ocorreu um erro, tente novamente.</p>
      )}
    </form>
  );
}
