function MyForm() {
    return (
        <>
            <form action="https://formspree.io/f/mbjvpygn" method="POST" className="flex flex-col justify-center items-center gap-5 mt-5">
                <input type="text" name="name" placeholder="Nombre Completo" required className="border-gray-400 border-[1px] rounded-[3px] py-1 px-2 min-w-[350px]" />
                <input type="email" name="email" id="email" placeholder="Correo Electronico" required className="border-gray-400 border-[1px] rounded-[3px] py-1 px-2 min-w-[350px]" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" />
                <textarea name="message" id="message" placeholder="Mensaje Descriptivo" required className="border-gray-400 border-[1px] rounded-[3px] py-1 px-2 min-w-[350px]"></textarea>
                <input type="submit" value="Enviar" className="bg-black text-white py-2 px-6 rounded-[5px] cursor-pointer" />
            </form>
        </>
    );
}

export default MyForm