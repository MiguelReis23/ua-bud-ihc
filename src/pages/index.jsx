/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4CLEMPJ3q9R
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import Navbar from "./navbar";
import "./../app/globals.css";

export default function Component() {
  const [carouselData, setCarouselData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/carousel.json")
      .then((response) => response.json())
      .then((data) => {
        setCarouselData(data);
      });
  }, []);

  const nextItem = () => {
    setCurrentIndex((currentIndex + 1) % carouselData.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (currentIndex - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <div className="max-w-8xl mx-auto">
      <Navbar />
      {carouselData.length > 0 && (
        <div className="flex flex-col items-center space-y-4 py-8">
          <div className="flex justify-between items-center w-full">
            <Button variant="ghost" onClick={prevItem}>{`<`}</Button>
            <div className="items-center space-x-4">
              <h2 className="text-5xl text-center font-bold">
                {carouselData[currentIndex].title}
              </h2>
              <p className="text-gray-500 py-6">
                {carouselData[currentIndex].description}
              </p>
            </div>
            <img
              alt="Carrousel img placeholder"
              className="w-full h-96 object-cover"
              src={carouselData[currentIndex].image}
            />
            <Button variant="ghost" onClick={nextItem}>{`>`}</Button>
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        <section>
          <h3 className="text-2xl font-semibold mb-6">
            Artigos de Ajuda Populares
          </h3>
          <div className="space-y-4">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>
                  <Link className="w-full" href="#">
                    {`
                   Titulo de um artigo `}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Um texto descritivo sobre o âmbito deste artigo de ajuda.</p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>
                  <Link className="w-full" href="#">
                    {`
                   Titulo de um artigo `}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Um texto descritivo sobre o âmbito deste artigo de ajuda.</p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>
				<Link className="w-full" href="#">
                    {`
                   Titulo de um artigo `}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Um texto descritivo sobre o âmbito deste artigo de ajuda.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section>
          <h3 className="text-2xl font-semibold mb-6">Últimas Novidades</h3>
          <div className="space-y-4">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>
                  <Link className="w-full" href="#">
                    {`
                   Titulo de um artigo `}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Um texto descritivo sobre o âmbito deste artigo de ajuda.</p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>
                  <Link className="w-full" href="#">
                    {`
                   Titulo de um artigo `}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Um texto descritivo sobre o âmbito deste artigo de ajuda.</p>
              </CardContent>
            </Card>
            <Link
              className="block mt-4 text-indigo-600 hover:text-indigo-500"
              href="#"
            >
              {`
                    Ler mais novidades >`}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
