import React from 'react'
import Avatar from './Avatar'
const Comentario = ({sujeto}) => {
   
    return (
        <>
            <h1>Comentarios</h1>
            <hr />
            <div className="row">
                <div className='media'>
                    {/*
                                        <img src={sujeto.urlImg} className='mr-3' alt="" />

                     */}
                    <Avatar urlImg={sujeto.urlImg}/>
                    <div className='media-body'>
                        <h5 className='mt-0'>{sujeto.nombre}</h5>
                        <p>{sujeto.texto}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Comentario