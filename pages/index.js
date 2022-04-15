import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/avatar'
import Botao from '../components/botao/'
import {UploadImagem} from '../components/uploadImagem/'
import { useState, useRef } from 'react'
export default function Home() {
  const [imagem, setImagem] = useState(null);
  const referenciaInput = useRef(null)

  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={() => referenciaInput?.current?.click()}>abrir seletor de arquivos</button>
      <UploadImagem 
        setImagem={setImagem} 
        imagemPreview={imagem?.preview}
        aoSetarReferencia={(ref) => {referenciaInput.current = ref}}
        />
      <Avatar/>
      <Botao texto={`Login`}  manipularClick={() => console.log('clicou')}/>
    </>
  )
}
