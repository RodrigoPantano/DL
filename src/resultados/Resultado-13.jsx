import React from 'react';
import adaptacion from '../assets/rutinas/rutina-adaptacion(2).webp'
import rutina4 from '../assets/rutinas/rutina-4DiasInf.webp'


const ResultadoTrece = () => {
    return (
        <>
            <main className='mx-4'>
                <section className='mt-16 flex flex-col items-baseline'>
                    <h3 className='mb-4 text-3xl'>Alimentación:</h3>
                    <article className='bg-zinc-900 rounded-xl p-2 sm:p-6 text-start text-lg sm:text-2xl'>
                        Con un metabolismo rápido y la facilidad para perder peso, es importante enfocarse en una dieta equilibrada que promueva la salud
                        general mientras se pierde peso de manera sostenible. Aquí tienes una guía alimentaria diseñada para alguien en tu situación: <br />
                        Proteínas Magras: Pollo, pavo, pescado, huevos, legumbres, tofu, y productos lácteos bajos en grasa. Aproximadamente 1.2 a 1.6 gramos
                        de proteína por kilogramo de peso corporal para preservar masa muscular mientras pierdes grasa. <br />
                        Carbohidratos Complejos y Fibra: Avena, arroz integral, quinoa, batata, verduras y frutas con bajo índice glucémico. Mantén una ingesta
                        moderada de carbohidratos para proporcionar energía sin excederte en calorías. Asegúrate de incluir suficiente fibra para mantenerte
                        saciado. <br />
                        Grasas Saludables: Aguacate, nueces, semillas, aceite de oliva y pescado graso. Consume grasas en un 20-30% de tu ingesta calórica
                        diaria, enfocándote en grasas insaturadas para apoyar la salud general. <br />
                        Micronutrientes: Frutas y verduras variadas para asegurar una ingesta adecuada de vitaminas y minerales necesarios para el bienestar
                        general. <br />
                        Hidratación: Bebe al menos 2 litros de agua al día. Mantener una buena hidratación es crucial para el metabolismo y la eliminación
                        de toxinas. <br />
                        Consejos Adicionales <br />
                        Control de Porciones: Mantén un control estricto sobre el tamaño de las porciones para evitar comer en exceso. <br />
                        Frecuencia de Comidas: Come varias veces al día (5-6 comidas pequeñas) para mantener tu metabolismo activo y evitar el hambre excesiva.
                    </article>
                </section>

                <section className=' mt-16 flex flex-col items-baseline'>
                    <h3 className='mb-4 text-3xl' >Tipo de entrenamiento:</h3>
                    <article className='bg-gray-600 rounded-xl p-2 sm:p-6 text-start text-lg sm:text-2xl'>
                        Vas a necesitar un entrenamiento con mucha intensidad que acompañe la alimentación que te recomendamos. Lo ideal va a ser que vayas al
                        gimnasio 4 veces a la semana (aunque si por alguna razón tenés que ir menos, lo podés ir acomodando).
                        Al finalizar tus entrenamientos, lo mejor sería que hagas entre 15 y 20 minutos de caminata o bici.
                    </article>
                </section>

                <section className='mt-16 '>
                    <h3 className='mb-4 flex items-start text-3xl' >Rutina de adaptación</h3>
                    <article>
                        <img
                            className='m-auto rounded-xl'
                            src={adaptacion}
                        />
                    </article>
                    <a
                        className='text-xs sm:text-sm underline'
                        href={adaptacion}
                        download='rutina-recomendada'
                    >
                        Descargar rutina
                    </a>
                </section>

                <section className='mt-16 '>
                    <h3 className='mb-4 flex items-start text-3xl'>Rutina recomendada</h3>
                    <article>
                        <img
                            className='m-auto rounded-xl'
                            src={rutina4}
                        />
                    </article>
                    <a
                        className='text-xs sm:text-sm underline'
                        href={rutina4}
                        download='rutina-recomendada'
                    >
                        Descargar rutina
                    </a>
                </section>
            </main>
        </>
    );
};

export default ResultadoTrece;