import Project from "@/components/contain-projects";
import MyForm from "@/components/form";

export default function Home() {
  return (
      <main>
        <header className="hidden absolute w-full h-[60px] md:flex flex-row justify-between items-center px-[25px]">
          <div>
            <img src="./icon-light.svg" alt="Blitzkreig" className="hidden md:block w-[40px]"/>
          </div>
          <nav className="flex gap-y-5 gap-x-8">
            <a className="cursor-pointer" href="#projects"><b>Proyectos</b></a>
            <a className="cursor-pointer" href="#skills"><b>Habilidades</b></a>
            <a className="cursor-pointer" href="#contact"><b>Contacto</b></a>
          </nav>
        </header>
        <section className="h-[100vh] flex flex-col justify-center items-center gap-5" id="home">
          <h1 className="text-3xl md:text-5xl text-center"><b>Hola! Yo soy <span className="text-emerald-800">Blitzkreig</span></b></h1>
          <h2 className="text-xl md:text-xl text-center">Desarrollador Web Fullstack y Diseñador Web</h2>
        </section>
        <section className="py-[100px]" id="projects">
          <h2 className="text-3xl md:text-5xl text-center"><b>Mis Proyectos</b></h2>
          <h3 className="md:text-lg text-center mb-5">Revisa mi gran colección de proyectos personales que he realizado. Son impresionantes!</h3>
          <Project nombre='Blog Personal' descripcion='Blog personal hecho con React y Tailwind' imagen='./blog-project.png' link='https://blog-one-ivory-47.vercel.app/' />
          <Project nombre='Plantilla Corporativa' descripcion='Plantilla corporativa creada con Next, React y Tailwind' imagen='./template-corporate-project.png' link='https://corporate-web-sooty.vercel.app/' />
          <Project nombre='Componente de Música' descripcion='App de música creada con Html, Css y Javascript vanilla' imagen='./music-app-project.png' link='https://music-app-zeta-five.vercel.app/' />
        </section>
        <section className="py-[100px]" id="skills">
          <h2 className="text-3xl md:text-5xl text-center"><b>Mi Stack de Habilidades</b></h2>
          <h3 className="md:text-lg text-center">Este es mi Stack de las tecnologías y herramientas en las que soy competente para desarrollar proyectos web.</h3>
          <ul className="text-center mt-5 flex flex-col justify-start items-center gap-2">
            <li>HTML</li>
            <li>CSS / TailwindCSS</li>
            <li>JavaScript</li>
            <li>React / NextJS</li>
            <li>NodeJS / Express</li>
            <li>PostgreSQL</li>
            <li>Git / GitHub</li>
          </ul>
        </section>
        <section className="pt-[100px] pb-[50px]" id="contact">
          <h2 className="text-3xl md:text-5xl text-center"><b>Hablemos</b></h2>
          <h3 className="md:text-lg text-center">Contactame si necesitas realizar un proyecto web o si deseas colaborar conmigo.</h3>
          <MyForm />
          <div className="flex justify-center gap-[15px] my-[25px]">
            <a href="https://github.com/Chrlssstlanx/" target="_BLANK">
              <img src="./brand-github.png" alt="Github" className="w-[50px] h-[50px] cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/chrlssstlan-x-958360288/" target="_BLANK">
              <img src="./brand-linkedin.png" alt="Lindedin" className="w-[50px] h-[50px] cursor-pointer" />
            </a>
            <a href="https://wa.me/525573237684?text=Hola,%20me%20gustaría%20realizar%20una%20consulta" target="_BLANK">
              <img src="./brand-whatsapp.png" alt="Whatsapp" className="w-[50px] h-[50px] cursor-pointer" />
            </a>
          </div>
        </section>
      </main>
  );
}
