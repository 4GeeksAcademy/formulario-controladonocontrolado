
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {


	const [tareas, setTareas] = useState([]);
	function borrarTareas(index) {

		setTareas(tareas.filter((_, i) => i !== index))



	}


	const agregarTareas = ev => {


		ev.preventDefault();

		const nuevaTarea = ev.target.tarea.value;

		if (!nuevaTarea.trim()) return;

		setTareas([...tareas, nuevaTarea]);

		ev.target.reset();



	}




	return (
		<form

			onSubmit={agregarTareas}
			className="formulario"

		>

			<h2>Mis Tareas</h2>

			<div className="campo">


				<input type="text" name="tarea" placeholder="Escribe una tarea" />

			</div>


			<ul className="lista">
				{tareas.map((item, index) => (
					<li key={index}>

						<p>{item}<span onClick={() => borrarTareas(index)}>X</span></p>

					</li>
				))}
			</ul>

			<p className="contador">Tareas: {tareas.length}</p>





		</form>










	);
};

export default Home;
