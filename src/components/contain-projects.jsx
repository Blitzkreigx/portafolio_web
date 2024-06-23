function Project(props) {
    return (
        <div className="grid grid-cols-1 gap-[20px] justify-between items-center min-w-[350px] max-w-[800px] mx-auto my-[20px] bg-neutral-900 border-neutral-800 border-[1px] md:flex-row px-[5px] py-[20px] md:rounded-[10px] md:grid-cols-3 md:grid-rows-1 text-start">
            <img src={props.image} alt={props.name} className="max-w-[90%] max-h-full mx-auto" />
            <div className="min-w-[90%] max-w-[90%] mx-auto md:min-w-[100%] md:col-span-2">
              <p className="text-lg">{props.name}</p>
              <p className="text-zinc-300">{props.description}</p>
              <div className="flex justify-start items-center gap-y-2 gap-x-5 mt-[10px]">
                <a href={props.link} target="_BLANK" className="bg-neutral-800 text-zinc-100 rounded-[5px] py-[5px] px-[10px]">Ver Proyecto</a>
              </div>
            </div>
        </div>
    );
};

export default Project;