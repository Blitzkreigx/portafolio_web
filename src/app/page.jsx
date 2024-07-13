import Project from "@/components/contain-projects";
import MyForm from "@/components/form";

export default function Home() {
  return (
      <main className="bg-zinc-950 text-white">
        <header className="bg-white w-[90%] rounded-full fixed left-[5%] right-[5%] top-[10px] py-[10px] px-[20px] bg-opacity-5 backdrop-filter backdrop-blur-3xl">
          <nav className="flex justify-center items-center gap-[25px]">
            <a className="cursor-pointer" href="#projects">Proyectos</a>
            <a className="cursor-pointer" href="#skills">Habilidades</a>
            <a className="cursor-pointer" href="#contact">Contacto</a>
          </nav>
        </header>
        <article className="max-w-[800px] min-h-screen mx-auto text-center flex flex-col justify-center items-center">
          <h1 className="text-5xl">Blitzkreig</h1>
          <h2 className="text-2xl text-zinc-300">Desarrollador Web Fullstack y Diseñador minimalista</h2>
        </article>
        <article className="max-w-[800px] mx-auto text-center">
        <section className="pt-[100px]" id="projects">
          <h2 className="text-2xl">Mis Proyectos</h2>
          <Project name='Tienda online' description='Tienda online creada con Vite, React y Tailwind. Puede filtrar los productos por categoría y puede añadirlos al carrito cuando desee.' image='./web_store_project.png' link='https://online-web-store-frontend.vercel.app/' />
          <Project name='Cursos y Mentorías' description='Página de cursos y mentorías creada con NextJS, React y Tailwind. Tiene varias secciones web incluyendo una sección para la administración del usuario.' image='./course_web_project.png' link='https://course-web-ebon.vercel.app/' />
          <Project name='Blog Personal' description='Blog personal creadad con Vite, React y Tailwind. Incluye un par de secciones y publicaciones.' image='./blog_project.png' link='https://blog-one-ivory-47.vercel.app/' />
          <Project name='Web Corporativa' description='Web corporativa creada con NextJS, React y Tailwind. Tiene varias secciones y puedes cambiar el tema de la página.' image='./web_corporative_project.png' link='https://corporate-web-sooty.vercel.app/' />
          <Project name='Componente de Música' description='Componente de música creada con Html, Css y Javascript vanilla. Capaz de pausar y reproducir una música anterior o siguiente.' image='./music-app-project.png' link='https://music-app-zeta-five.vercel.app/' />
        </section>
        <section className="py-[100px]" id="skills">
          <h2 className="text-2xl">Mi Stack de Habilidades</h2>
          <h3 className="text-lg text-zinc-300">Este es mi Stack de las tecnologías y herramientas con las que trabajo.</h3>
          <ul className="mt-5 flex flex-col justify-start items-center gap-2">
            <li>HTML</li>
            <li>CSS / TailwindCSS</li>
            <li>JavaScript</li>
            <li>React / NextJS</li>
            <li>NodeJS / Express</li>
            <li>PostgreSQL</li>
            <li>Git / GitHub</li>
            <li>Typescript</li>
            <li>Arquítectura MVC</li>
          </ul>
        </section>
        <section className="pb-[50px]" id="contact">
          <h2 className="text-2xl">Hablemos</h2>
          <h3 className="text-lg text-zinc-300">Contactame si necesitas realizar un proyecto web o si deseas colaborar conmigo.</h3>
          <MyForm />
          <div className="flex justify-center items-center gap-[15px] my-[25px]">
            <a href="https://github.com/Blitzkreigx" target="_BLANK">
              <img src="./brand-github.png" alt="Github" className="w-[50px] h-[50px] cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/cristian-bautista-pérez-958360288/" target="_BLANK">
              <img src="./brand-linkedin.png" alt="Lindedin" className="w-[50px] h-[50px] cursor-pointer" />
            </a>
            <a href="https://wa.me/525573237684?text=Hola,%20me%20gustaría%20realizar%20una%20consulta" target="_BLANK">
              <img src="./brand-whatsapp.png" alt="Whatsapp" className="w-[50px] h-[50px] cursor-pointer" />
            </a>
          </div>
        </section>
        </article>
      </main>
  );
}
