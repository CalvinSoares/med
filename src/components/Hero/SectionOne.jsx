import React from 'react'
import thumbConcept from './../assets/thumbConcept.png'
import usercover1 from './../assets/usercover1.png'
import usercover2 from './../assets/usercover2.png'
import usercover3 from './../assets/usercover3.png'
import usercover4 from './../assets/usercover4.png'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { TiArrowRightThick } from "react-icons/ti";


export default function SectionOne() {
  return (
    <div className='scroll-smooth'>
  <section id="inicio" className=" flex justify-center items-center gap-48 max-w-[1045px] m-auto pt-[150px]">
    <div className="flex-1">
      <img
        src={thumbConcept}
        alt="expert"
      />
    </div>
    <div className="justify-center items-center">
      <h2 className="text-2xl font-bold mb-3">Conheça nossos especialistas</h2>
      <p className="">
        Todos Altamente Capacitados e Proficionais Qualificados!!! 
        <br/>
        <a href="#" classname=" flex bg-black"
        > Mais sobre <TiArrowRightThick className='text-3xl'/>
        </a>
      </p>
      
    </div>
  </section >
  <section id="portfolio" className="justify-cente bg-gray-50 items-center m-auto pt-[80px]">
    <div className="justify-start items-start text-left max-w-xl ml-60 mb-30">
      <p className="text-xl text-left text-cyan-400 font-bold mb-3">Equipe</p>
      <h1 className="text-[42px] font-bold mb-6 ">Nosso Time</h1>
      <p className="text-lg text-left">
      Descubra o cuidado excepcional dos nossos médicos na CuidaVida. Especialistas dedicados, prontos para proporcionar atendimento personalizado e compassivo. Sua saúde está em boas mãos. Marque sua consulta hoje e faça parte do caminho para o bem-estar!
      </p>
    </div>
    <div className="flex justify-center items-center m-6 p-16">
        <div className="shadow-2xl rounded-2xl w-[260px] h-[400px] mx-12">
            <div className="flex-1">
              <img src={usercover1} className="w-[1220px] h-[245px] rounded-tl-2xl rounded-tr-2xl" alt="juliana" />
            </div>
              <div className="justify-center items-center text-center">
                <h3 className="text-lg font-bold m-3">Juliana Andrade</h3>
                <p className="text text-sm" m-3>Pediatra</p>
                <div className="flex justify-center items-center text-center m-3">
                  <div className="text-3xl text-teal-500 m-3">
                  <FaFacebook />
                  </div>
                  <div className="text-3xl text-teal-500 m-3">
                  <RiInstagramFill />
                  </div>
                  <div className="text-3xl text-teal-500 m-3">
                  <FaTwitter />
                  </div>
                </div>
              </div>
        </div> 
        <div className="shadow-2xl rounded-2xl w-[260px] h-[400px] mx-12">
            <div className="flex-1">
              <img src={usercover2} className="w-[1220px] h-[245px] rounded-tl-2xl rounded-tr-2xl" alt="juliana" />
            </div>
              <div className="justify-center items-center text-center">
                <h3 className="text-lg font-bold m-3">Gustavo Julião</h3>
                <p className="text text-sm" m-3>Clínica Geral</p>
                <div className="flex justify-center items-center text-center m-3">
                  <div className="text-3xl text-teal-500 m-3">
                  <FaFacebook />
                  </div>
                  <div className="text-3xl text-teal-500 m-3">
                  <RiInstagramFill />
                  </div>
                  <div className="text-3xl text-teal-500 m-3">
                  <FaTwitter />
                  </div>
                </div>
              </div>
        </div>
        <div className="shadow-2xl rounded-2xl w-[260px] h-[400px] mx-12">
            <div className="flex-1">
              <img src={usercover3} className="w-[1220px] h-[245px] rounded-tl-2xl rounded-tr-2xl" alt="juliana" />
            </div>
              <div className="justify-center items-center text-center">
                <h3 className="text-lg font-bold m-3">Roberta Santos</h3>
                <p className="text text-sm" m-3>Clínico Geral</p>
                <div className="flex justify-center items-center text-center m-3">
                  <div className="text-3xl text-teal-500 m-3">
                  <FaFacebook />
                  </div>
                  <div className="text-3xl text-teal-500 m-3">
                  <RiInstagramFill />
                  </div>
                  <div className="text-3xl text-teal-500 m-3">
                  <FaTwitter />
                  </div>
                </div>
              </div>
        </div>     
        <div className="shadow-2xl rounded-2xl w-[260px] h-[400px] mx-12">
            <div className="flex-1">
              <img src={usercover4} className="w-[1220px] h-[245px] rounded-tl-2xl rounded-tr-2xl" alt="juliana" />
            </div>
              <div className="justify-center items-center text-center">
                <h3 className="text-lg font-bold m-3">Juliana Torres</h3>
                <p className="text text-sm" m-3>Dentista</p>
                <div className="flex justify-center items-center text-center m-3">
                  <div className="text-3xl text-teal-500 m-3">
                  <FaFacebook />
                  </div>
                  <div className="text-3xl text-teal-500 m-3">
                  <RiInstagramFill />
                  </div>
                  <div className="text-3xl text-teal-500 m-3">
                  <FaTwitter />
                  </div>
                </div>
              </div>
        </div>    
    </div>
  </section>
  <section id="contatos" className="bg-blue-200  justify-center items-center m-auto pt-[80px]">
  <div className="max-w-[470px] text-center ml-auto mr-auto mb-[80px]">
          <p className="text-blue-600 text-[16px] font-bold">Alguma Duvida?</p>
          <p className="text-[40px] font-bold text-black mt-3 mb-6">Entre em contato!</p>
          <p className="text-md text-gray-700 leading-5">
            Envie sua duvida para o nosso E-mail, para que nossa equipe de suporte possa te ajudar e tirar todas suas duvidas! 
          </p>
        </div>

        <div className="max-w-[928px] flex m-auto justify-center items-center text-center pb-28 pt-12">
          <input
            type="text"
            placeholder="Escreva sua duvida aqui..."
            className=" w-screen h-12 p-6 border-2 border-solid border-[#E6E6E6] text-[15px] rounded-tl-[5px] rounded-bl-[5px]"
          /><button className="w-96 h-12 bg-[#03045e] rounded-[20px] text-white decoration-none border-none font-bold text-[14px] rounded-tl-[5px] rounded-bl-[5px]">Enviar</button>
        </div>
  </section >
  </div>
  )
}
