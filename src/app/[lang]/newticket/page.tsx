import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/lib/get-dictionary";
import React from "react";
import pt from "../dictionaries/pt.json";
import { CircleLine } from "./[newticket]/circle";

export default async function newTicket({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dictionary = await getDictionary(lang);

  const cards = Array.from({ length: 9 }, (_, i) => ({
    title: (pt as { [key: string]: string })[`title${i + 1}`],
    description: (pt as { [key: string]: string })[`description${i + 1}`],
  }));


  return (
    <>
      <SiteHeader dictionary={dictionary} />
      <main className="flex-1">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center">
          {pt.newTicket}
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "20px",
              backgroundColor: "black",
              marginRight: "10px",
            }}
          ></div>
          <CircleLine />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px", 
          }}
        ></div>
        <div
          className="cards"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {cards.map((card, index) => (
            <div
              className="card"
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "1rem",
                backgroundColor: "#fff",
                color: "#666",
                maxWidth: "400px",
              }}
            >
              <h3 style={{ fontWeight: "bold", fontSize: "1.2em" }}>
                {card.title}
              </h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
