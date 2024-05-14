import { SiteHeader } from "@/components/site-header";
import { CardWithIcon } from "@/components/custom-card";
import { getDictionary } from "@/lib/get-dictionary";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import {
  AtSign,
  Globe,
  Video,
  GraduationCap,
  FileQuestion,
  Network,
  UserRound,
  Headset,
  Wrench
} from "lucide-react";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader dictionary={dictionary} />
      <main className="flex-1">
        <div className="flex-1 w-full py-5">
          <h1 className="text-4xl text-center font-bold text-gray-900 dark:text-gray-100">
            New Ticket
          </h1>
        </div>
        <div>


          <div className="flex flex-col items-center">
  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white dark:bg-white dark:text-black">
    <h1 className="text-xl">1</h1>
  </div>
  <span className="mt-1 font-medium">Service</span>
</div>


        </div>
        <div className="container flex-1 max-w-screen-2xl max-w-7-xl mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CardWithIcon
              title="Correio Eletrónico"
              description="Pataforma de alojamento de conteúdos web para projetos, parcerias, UCs e páginas pessoais."
              icon={<AtSign size={48} />}
            />
            <CardWithIcon
              title="Alojamento Web"
              description="Pataforma de alojamento de conteúdos web para projetos, parcerias, UCs e páginas pessoais."
              icon={<Globe size={48} />}
            />
            <CardWithIcon
              title="Audiovisuais"
              description="Instalação de equipamentos, gestão da plataforma Educast e apoio à realização de produções audiovisuais."
              icon={<Video size={48} />}
            />
            <CardWithIcon
              title="E-Learning"
              description="Gerir áreas e utilizadores da plataforma de apoio à aprendizagem orientada para o ensino à distância."
              icon={<GraduationCap size={48} />}
            />
            <CardWithIcon
              title="Inquéritos Online"
              description="Serviço para criar formulários e inquéritos para recolha de dados no âmbito de projetos."
              icon={<FileQuestion size={48} />}
            />
            <CardWithIcon
              title="Redes de Comunicações"
              description="Serviço de comunicações de dados departamental, acesso à internet, através de rede cablada e wireless."
              icon={<Network size={48} />}
            />
            <CardWithIcon
              title="Gestão de Utilizadores"
              description="Gestão da identidade eletrónica dos utilizadores da comunidade académica: dados pessoais,"
              icon={<UserRound size={48} />}
            />
            <CardWithIcon
              title="Helpdesk"
              description="Suporte técnico para apoio presencial ou através de video-chamada."
              icon={<Headset size={48} />}
            />
            <CardWithIcon
              title="Reportar Incidentes"
              description="Solicitar assistência para um problema de segurança, desempenho ou indisponibilidade."
              icon={<Wrench size={48} />}
            />
          </div>
        </div>
      </main>
      <SiteFooter dictionary={dictionary} />
    </div>
  );
}
