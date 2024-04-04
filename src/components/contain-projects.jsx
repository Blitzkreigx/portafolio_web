function Project(props) {
    return (
        <div className="grid grid-cols-1 gap-[20px] justify-between items-center min-w-[350px] max-w-[800px] mx-[auto] my-[25px] border-gray-300 border-[1px] md:flex-row px-[5px] py-[20px] md:rounded-[10px] md:grid-cols-3 md:grid-rows-1">
            <img src={props.imagen} alt={props.nombre} className="max-w-[90%] max-h-full mx-auto" />
            <div className="min-w-[90%] max-w-[90%] mx-auto md:min-w-[100%] md:col-span-2">
              <p><b>{props.nombre}</b></p>
              <p>{props.descripcion}</p>
              <div className="flex justify-start items-center gap-y-2 gap-x-5 mt-[10px]">
                <button className="bg-black text-white rounded-[5px] px-[6px] py-[3px]"><a href={props.link} target="_BLANK">Ver Proyecto</a></button>
              </div>
            </div>
        </div>
    );
};

export default Project;