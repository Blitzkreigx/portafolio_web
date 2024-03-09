export default function Home() {
  return (
      <main>
        <header className="hidden absolute w-full h-[60px] md:flex flex-row justify-between items-center px-[25px]">
          <div>
            <img src="./icon-signal.png" alt="Logo Empresarial" className="hidden md:block w-[50px]"/>
          </div>
          <nav className="flex gap-y-5 gap-x-8">
            <a className="cursor-pointer" href="#projects"><b>Proyectos</b></a>
            <a className="cursor-pointer" href="#skills"><b>Habilidades</b></a>
            <a className="cursor-pointer" href="#contact"><b>Contacto</b></a>
          </nav>
        </header>
        <section className="h-[100vh] flex flex-col justify-center items-center gap-5" id="home">
          <h1 className="text-3xl md:text-5xl text-center"><b>Hola! Me llamo Cristian</b></h1>
          <h2 className="text-xl md:text-xl text-center">Soy Desarrollador Web Fullstack y Diseñador Web</h2>
        </section>
        <section className="py-[100px]" id="projects">
          <h2 className="text-3xl md:text-5xl text-center"><b>Mis Proyectos!</b></h2>
          <h3 className="md:text-lg text-center mb-5">Revisa mi gran colección de proyectos personales que he realizado. Son impresionantes!</h3>
          <div className="grid grid-cols-3 justify-between items-center min-w-[450px] max-w-[800px] mx-[auto] my-[25px] md:flex-row px-[5px] py-[20px] md:rounded-[10px] border-gray-300 border-[1px]">
            <img src="./icon-signal.png" alt="Proyecto" className="w-[50px] max-h-full" />
            <div className="col-span-2">
              <p><b>Título del proyecto</b></p>
              <p>Descripción del proyecto realizado.</p>
              <div className="flex justify-start items-center gap-y-2 gap-x-5 mt-[10px]">
                <button className="bg-black text-white rounded-[5px] px-[6px] py-[3px]"><a href="#">Ver el Código</a></button>
                <button className="bg-black text-white rounded-[5px] px-[6px] py-[3px]"><a href="#">Ver el Proyecto</a></button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 justify-between items-center min-w-[450px] max-w-[800px] mx-[auto] my-[25px] md:flex-row px-[5px] py-[20px] md:rounded-[10px] border-gray-300 border-[1px]">
            <img src="./icon-signal.png" alt="Proyecto" className="w-[50px] max-h-full" />
            <div className="col-span-2">
              <p><b>Título del proyecto</b></p>
              <p>Descripción del proyecto realizado.</p>
              <div className="flex justify-start items-center gap-y-2 gap-x-5 mt-[10px]">
                <button className="bg-black text-white rounded-[5px] px-[6px] py-[3px]"><a href="#">Ver el Código</a></button>
                <button className="bg-black text-white rounded-[5px] px-[6px] py-[3px]"><a href="#">Ver el Proyecto</a></button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 justify-between items-center min-w-[450px] max-w-[800px] mx-[auto] my-[25px] md:flex-row px-[5px] py-[20px] md:rounded-[10px] border-gray-300 border-[1px]">
            <img src="./icon-signal.png" alt="Proyecto" className="w-[50px] max-h-full" />
            <div className="col-span-2">
              <p><b>Título del proyecto</b></p>
              <p>Descripción del proyecto realizado.</p>
              <div className="flex justify-start items-center gap-y-2 gap-x-5 mt-[10px]">
                <button className="bg-black text-white rounded-[5px] px-[6px] py-[3px]"><a href="#">Ver el Código</a></button>
                <button className="bg-black text-white rounded-[5px] px-[6px] py-[3px]"><a href="#">Ver el Proyecto</a></button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-[100px]" id="skills">
          <h2 className="text-3xl md:text-5xl text-center"><b>Mis Habilidades</b></h2>
          <h3 className="md:text-lg text-center">Estas son las habilidades en las que soy lo suficientemente competente para desarrollar proyectos web.</h3>
          <ul className="text-center mt-5 flex flex-col justify-start items-center gap-2">
            <li>HTML</li>
            <li>CSS / TailwindCSS</li>
            <li>JavaScript</li>
            <li>React / NextJS</li>
            <li>NodeJS / Express</li>
            <li>Bases de Datos</li>
            <li>Python</li>
          </ul>
        </section>
        <section className="pt-[100px] pb-[50px]" id="contact">
          <h2 className="text-3xl md:text-5xl text-center"><b>Contactame</b></h2>
          <h3 className="md:text-lg text-center">Contactame si necesitas realizar un proyecto web o si deseas colaborar conmigo.</h3>
          <form className="flex flex-col justify-center items-center gap-5 mt-5">
            <input type="text" placeholder="Nombre Completo" required className="border-gray-400 border-[1px] rounded-[3px] py-1 px-2 min-w-[400px]" />
            <input type="email" placeholder="Correo Electronico" required className="border-gray-400 border-[1px] rounded-[3px] py-1 px-2 min-w-[400px]" />
            <textarea placeholder="Ingrese su Mensaje" required className="border-gray-400 border-[1px] rounded-[3px] py-1 px-2 min-w-[400px]"></textarea>
            <input type="submit" value="Enviar" className="bg-black text-white py-2 px-6 rounded-[5px] cursor-pointer" />
          </form>
        </section>
      </main>
  );
}
