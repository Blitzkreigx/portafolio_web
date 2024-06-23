function MyForm() {
    return (
        <>
            <form action="https://formspree.io/f/mbjvpygn" method="POST" className="flex flex-col justify-center items-center gap-5 mt-5">
                <input type="text" name="name" placeholder="Nombre Completo" required className="rounded-[3px] py-1 px-2 min-w-[350px] w-[50%] bg-neutral-800 placeholder:text-neutral-400" />
                <input type="email" name="email" id="email" placeholder="Correo Electronico" required className="rounded-[3px] py-1 px-2 min-w-[350px] w-[50%] bg-neutral-800 placeholder:text-neutral-400" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" />
                <textarea name="message" id="message" placeholder="Mensaje Descriptivo" required className="rounded-[3px] py-1 px-2 min-w-[350px] w-[50%] min-h-[100px] resize-none bg-neutral-800 placeholder:text-neutral-400"></textarea>
                <input type="submit" value="Enviar" className="bg-neutral-900 text-white py-2 px-4 min-w-[350px] w-[50%] rounded-[5px] cursor-pointer" />
            </form>
        </>
    );
}

export default MyForm