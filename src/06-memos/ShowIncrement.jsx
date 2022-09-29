

const ShowIncrement = ({increment}) => {


  return (
    <div>
      <button
      onClick={()=>{increment(5)}}
      >
        Incrementar
      </button>
    </div>
  )
}

export default ShowIncrement
