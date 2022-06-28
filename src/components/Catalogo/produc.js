
import m1 from '../../img/prod1.png';
import React, { useState } from 'react';
import { Modal } from '../Modal';
import Slider from "react-slick";
import styled from 'styled-components';
import { listadePro } from '../data';

export function CataProd(props) {
    const [estadoModal3, cambiarEstadoModal3] = useState(false);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div class="itemss ">
                <div className='names'>
                    <h3>{props.name}</h3>
                    <p>{props.des}</p>
                    <p className='mrcs'>{props.mark}</p>
                </div>
                <img className="d-block w-100" src={m1} />

                <div className='container-buton'>
                    <div className='button'>
                        <a href='#'><i class="fa fa-whatsapp" aria-hidden="true"></i> CONSULTAR</a>
                    </div>
                    <div className='button-trans'>
                        <a onClick={() => cambiarEstadoModal3(!estadoModal3)}>VER PRODUCTO</a>
                    </div>

                </div>
            </div>
            <Modal
                estado={estadoModal3}
                cambiarEstado={cambiarEstadoModal3}
                titulo="Aceite Distro DT-11"
                mostrarHeader={true}
                mostrarOverlay={true}
                posicionModal={'start'}
                padding={'20px'}
            >
                <Contenido>
                    <div className="catprod">
                        <Slider {...settings}>
                            {listadePro.map(item => (
                                <div className="cardPro">
                                    <div className="carttopPro">
                                        <img src={item.linkimg} />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className='descri'>
                        <div className='descrip'>
                        <h4>Descripción</h4>
                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>
                        </div>
                        <div className='container-butonDos'>
                            <div className='button'>
                                <a href='#'><i class="fa fa-whatsapp" aria-hidden="true"></i> CONSULTAR</a>
                            </div>
                            <div className='button-trans'>
                                <a href='#'>FICHA TECNICA</a>
                            </div>
                        </div>
                    </div>
                </Contenido>
            </Modal>
        </>
    )
};
const Contenido = styled.div`
	display: flex;    
	margin: auto;
    width: auto;

    .carttopPro img{
    width: 100%;       
    padding: 5px;  
    } 

    .descri{
        width: 40% ;
        margin: auto;
        float: right;
    }
	p {  
        font-size: 15px;        
	}	
    .catprod{
        padding: 10px;
        margin: 40px;
        width: 30%;        
    }

    
    @media screen and (max-width: 1400px) {
    .cart-top img {      
    padding: 50px;  
    }
}

    @media screen  and (max-width: 1100px) {        
        flex-direction: column;

        .catprod{
            margin: auto;
            align-items: center;
            width: 50%;
        }
        .descri{
            padding: 20px;  
            width: 80% ;
        }  
    }

    @media screen  and (max-width: 800px) {        
        flex-direction: column;

        .catprod{
            margin: auto;
            align-items: center;            
            width: 65%;
        }
        .descri{
            padding: 20px;  
            width: 80% ;
        }  
    }

    @media screen  and (max-width: 654px) {        
        flex-direction: column;

        .catprod{
            margin: auto;
            align-items: center;            
            width: 70%;
        }
        .descri{
            padding: 20px;  
            width: 80% ;
        }  
        
        .container-butonDos .button {
            background-color: red;
            width: 100%;
            margin-bottom: 10px;
            text-align: center;
        }

        .container-butonDos .button-trans {
            width: 100%;
            text-align: center;
        }

    }

    @media screen  and (max-width: 560px) {        
        flex-direction: column;

        .catprod{
            margin: auto;
            align-items: center;            
            width: 90%;
        }
        .descri{
            padding: 20px;  
            width: 90% ;
        }  
        
        .container-butonDos .button {
            background-color: red;
            width: 100%;
            margin-bottom: 10px;
            text-align: center;
        }

        .container-butonDos .button-trans {
            width: 100%;
            text-align: center;
        }

    }
    @media screen  and (max-width: 500px) {        
        flex-direction: column;        
        .descrip{
            display: none;
        }  
        .container-butonDos{
            width: 100%;
        }
    }

    @media screen  and (max-width: 404px) {        
	  .container-butonDos	.button a{
        text-decoration: none;
        color: white;
        font-size: 0.5rem;
        font-family: Montserrat;
    }

    .container-butonDos .button-trans a {
        text-decoration: none;
        color: black;
        font-size: 0.5rem;
        font-weight: bold;
        font-family: Montserrat;
    }
    .container-butonDos .button {
        background-color: #0378FB;
        margin: auto;
        border-radius: 50px;
        padding-right: 10px;
        border: none;
        padding-left: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        margin-bottom: 10px;
       
    }

    .container-butonDos .button-trans {
        background-color: none;
        margin: auto;
        border-radius: 50px;
        padding-right: 10px;
        border: solid 0.1rem black;
        padding-left: 10px;
        padding-top: 3px;
        padding-bottom: 3px;
        cursor: pointer;
    }

    .descri{
            padding: 0px;
            width: 100% ;
        }  
        .container-butonDos{
            padding: 0;

        }
    }

    @media screen  and (max-width: 350px) {        
        .catprod{
            margin: auto;
            align-items: center;            
            width: 100%;
        }
    }


    

  
    














    

    /*botones*/
    .container-butonDos{
        display: flex;
        box-sizing: border-box;
        padding: 20px 10px;
        margin: auto;
        transition: all 0.5s ease-out;
        display: flex;
        flex-wrap: wrap;
    }
    
	.button {
        background-color: #0378FB;
        margin: auto;
        border-radius: 50px;
        padding-right: 30px;
        border: none;
        padding-left: 30px;
        padding-top: 5px;
        padding-bottom: 5px;
       
    }

    .button-trans {
        background-color: none;
        margin: auto;
        border-radius: 50px;
        padding-right: 30px;
        border: solid 0.1rem black;
        padding-left: 30px;
        padding-top: 3px;
        padding-bottom: 3px;
        cursor: pointer;
    }
    .button a{
        text-decoration: none;
        color: white;
        font-size: 0.8rem;
        font-family: Montserrat;
    }

    .button-trans a {
        text-decoration: none;
        color: black;
        font-size: 0.8rem;
        font-weight: bold;
        font-family: Montserrat;
    }
	
`;