import { Puff } from "react-loader-spinner"

function Loading() {
  return (
    <div className="flex justify-center items-center">
      <Puff color="#00bfff" height={550} width={80} />
    </div>
  )
}

export default Loading
