// import css from "../Components/Display.module.css";

const Display = ({displayValue}) =>{
    return <input type="text" className="border-black border-y h-12 w-full my-2 text-2xl p-2 bg-gradient-to-br from-slate-700 to-slate-950 text-white cursor-not-allowed" value={displayValue} readOnly/>

}

export default Display;