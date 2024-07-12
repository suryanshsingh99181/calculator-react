
const ButtonContainer = ({onButtonClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "/",
    ".",
    "0",
    "=",
  ];
  const getClassName=(buttonName)=>{
    if(buttonName==='='){
      return 'w-28 text-2xl bg-gradient-to-r from-pink-500 to-yellow-400 text-red-500 hover:text-3xl';
    }
    else if(buttonName==='+' || buttonName==='-' || buttonName==='*' || buttonName==='/' || buttonName==='C'){
      return 'bg-white text-black hover:text-xl';

    }

  };
  return (
    <div className="flex justify-center flex-wrap">
      {buttonNames.map(buttonName => (
        <button className={`w-14 h-14 m-1 border border-slate-600 rounded-full bg-slate-600 text-white font-bold hover:shadow hover:shadow-cyan-200 hover:text-xl ${getClassName(buttonName)}`} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
