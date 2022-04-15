import { useRef, useEffect } from "react";

export function UploadImagem({
  className = '',
  setImagem,
  imagemPreview,
  imagemPreviewClassName = '',
  aoSetarReferencia
}) {

  const referenciaInput = useRef(null)

  useEffect(() => {
    if(!aoSetarReferencia){
      return;
    }
    aoSetarReferencia(referenciaInput?.current)
  }, [referenciaInput?.current]);

  const abirSeletorDeArquivos = () => {
    referenciaInput?.current?.click();
  }

  const alterarImagem = () => {
    if(!referenciaInput?.current?.files?.length) {
      return;
    }
    const arquivo = referenciaInput?.current?.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(arquivo)
    fileReader.onloadend = () => {
      setImagem({
        preview: fileReader.result,
        arquivo
      })
    }
  }

  return (
    <div className={`uploadImagemContainer ${className}`} onClick={abirSeletorDeArquivos}>
      
      {imagemPreview && (
        <div className="imagemPreviewContainer">
          <img 
            src={imagemPreview} 
            alt="imagem preview" 
            className={imagemPreviewClassName}
          />
        </div>
      )}

      <input 
      type="file" 
      className="oculto" 
      accept="image/*"
      ref={referenciaInput}
      onChange={alterarImagem} 
      />
    </div>
  );
}
