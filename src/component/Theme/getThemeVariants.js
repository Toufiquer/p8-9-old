const getThemeVariants = (theme = "dark") => {
  let card,
    cardI,
    cardII,
    hoverCard,
    hoverCardI,
    hoverCardII,
    background,
    backgroundI,
    backgroundII,
    hoverBackground,
    hoverBackgroundI,
    hoverBackgroundII,
    text,
    textI,
    textII,
    hoverText,
    hoverTextI,
    hoverTextII,
    border,
    borderI,
    borderII,
    hoverBorder,
    hoverBorderI,
    hoverBorderII,
    add,
    addI,
    addII,
    hoverAdd,
    hoverAddI,
    hoverAddII,
    delete0,
    deleteI,
    deleteII,
    hoverDelete,
    hoverDeleteI,
    hoverDeleteII,
    details,
    detailsI,
    detailsII,
    hoverDetails,
    hoverDetailsI,
    hoverDetailsII,
    view,
    viewI,
    viewII,
    hoverView,
    hoverViewI,
    hoverViewII;
  switch (theme) {
    case "dark":
      card = "bg-purple-600";
      cardI = "bg-purple-700";
      cardII = "bg-purple-800";
      hoverCard = "duration-300 hover:bg-purple-700";
      hoverCardI = "duration-300 hover:bg-purple-800";
      hoverCardII = "duration-300 hover:bg-purple-900";
      background = "bg-slate-600";
      backgroundI = "bg-slate-700";
      backgroundII = "bg-slate-800";
      hoverBackground = "duration-300 hover:bg-slate-700";
      hoverBackgroundI = "duration-300 hover:bg-slate-800";
      hoverBackgroundII = "duration-300 hover:bg-slate-900";
      text = "text-teal-600";
      textI = "text-teal-700";
      textII = "text-teal-800";
      hoverText = "duration-300 hover:text-teal-700";
      hoverTextI = "duration-300 hover:text-teal-800";
      hoverTextII = "duration-300 hover:text-teal-900";
      border = "border-2 border-solid border-stone-600";
      borderI = "border-2 border-solid border-stone-700";
      borderII = "border-2 border-solid border-stone-800";
      hoverBorder = "duration-300 hover:border-stone-700";
      hoverBorderI = "duration-300 hover:border-stone-800";
      hoverBorderII = "duration-300 hover:border-stone-900";
      add = "bg-green-600";
      addI = "bg-green-700";
      addII = "bg-green-800";
      hoverAdd = "duration-300 hover:bg-green-700";
      hoverAddI = "duration-300 hover:bg-green-800";
      hoverAddII = "duration-300 hover:bg-green-900";
      delete0 = "bg-red-600";
      deleteI = "bg-red-700";
      deleteII = "bg-red-800";
      hoverDelete = "duration-300 hover:bg-red-700";
      hoverDeleteI = "duration-300 hover:bg-red-800";
      hoverDeleteII = "duration-300 hover:bg-red-900";
      details = "bg-emerald-600";
      detailsI = "bg-emerald-700";
      detailsII = "bg-emerald-800";
      hoverDetails = "duration-300 hover:bg-emerald-700";
      hoverDetailsI = "duration-300 hover:bg-emerald-800";
      hoverDetailsII = "duration-300 hover:bg-emerald-900";
      view = "bg-cyan-600";
      viewI = "bg-cyan-700";
      viewII = "bg-cyan-800";
      hoverView = "duration-300 hover:bg-cyan-700";
      hoverViewI = "duration-300 hover:bg-cyan-800";
      hoverViewII = "duration-300 hover:bg-cyan-900";
      break;
    case "light":
      card = "bg-emerald-600";
      cardI = "bg-emerald-700";
      cardII = "bg-emerald-800";
      hoverCard = "duration-300 hover:bg-emerald-700";
      hoverCardI = "duration-300 hover:bg-emerald-800";
      hoverCardII = "duration-300 hover:bg-emerald-900";
      background = "bg-green-100";
      backgroundI = "bg-green-200";
      backgroundII = "bg-green-300";
      hoverBackground = "duration-300 hover:bg-green-200";
      hoverBackgroundI = "duration-300 hover:bg-green-300";
      hoverBackgroundII = "duration-300 hover:bg-green-400";
      text = "text-zinc-600";
      textI = "text-zinc-700";
      textII = "text-zinc-800";
      hoverText = "duration-300 hover:text-zinc-700";
      hoverTextI = "duration-300 hover:text-zinc-800";
      hoverTextII = "duration-300 hover:text-zinc-900";
      border = "border-2 border-solid border-gray-600";
      borderI = "border-2 border-solid border-gray-700";
      borderII = "border-2 border-solid border-gray-800";
      hoverBorder = "duration-300 hover:border-gray-700";
      hoverBorderI = "duration-300 hover:border-gray-800";
      hoverBorderII = "duration-300 hover:border-gray-900";
      add = "bg-teal-600";
      addI = "bg-teal-700";
      addII = "bg-teal-800";
      hoverAdd = "duration-300 hover:bg-teal-700";
      hoverAddI = "duration-300 hover:bg-teal-800";
      hoverAddII = "duration-300 hover:bg-teal-900";
      delete0 = "bg-red-500";
      deleteI = "bg-red-600";
      deleteII = "bg-red-700";
      hoverDelete = "duration-300 hover:bg-red-600";
      hoverDeleteI = "duration-300 hover:bg-red-700";
      hoverDeleteII = "duration-300 hover:bg-red-800";
      details = "bg-teal-600";
      detailsI = "bg-teal-700";
      detailsII = "bg-teal-800";
      hoverDetails = "duration-300 hover:bg-teal-700";
      hoverDetailsI = "duration-300 hover:bg-teal-800";
      hoverDetailsII = "duration-300 hover:bg-teal-900";
      view = "bg-cyan-600";
      viewI = "bg-cyan-700";
      viewII = "bg-cyan-800";
      hoverView = "duration-300 hover:bg-cyan-700";
      hoverViewI = "duration-300 hover:bg-cyan-800";
      hoverViewII = "duration-300 hover:bg-cyan-900";
      break;
    case "sky":
      card = "bg-teal-600";
      cardI = "bg-teal-700";
      cardII = "bg-teal-800";
      hoverCard = "duration-300 hover:bg-teal-700";
      hoverCardI = "duration-300 hover:bg-teal-800";
      hoverCardII = "duration-300 hover:bg-teal-900";
      background = "bg-purple-600";
      backgroundI = "bg-purple-700";
      backgroundII = "bg-purple-800";
      hoverBackground = "duration-300 hover:bg-purple-700";
      hoverBackgroundI = "duration-300 hover:bg-purple-800";
      hoverBackgroundII = "duration-300 hover:bg-purple-900";
      text = "text-purple-300";
      textI = "text-purple-400";
      textII = "text-purple-500";
      hoverText = "duration-300 hover:text-purple-400";
      hoverTextI = "duration-300 hover:text-purple-500";
      hoverTextII = "duration-300 hover:text-purple-600";
      border = "border-2 border-solid border-emerald-600";
      borderI = "border-2 border-solid border-emerald-700";
      borderII = "border-2 border-solid border-emerald-800";
      hoverBorder = "duration-300 hover:border-emerald-700";
      hoverBorderI = "duration-300 hover:border-emerald-800";
      hoverBorderII = "duration-300 hover:border-emerald-900";
      add = "bg-emerald-600";
      addI = "bg-emerald-700";
      addII = "bg-emerald-800";
      hoverAdd = "duration-300 hover:bg-emerald-700";
      hoverAddI = "duration-300 hover:bg-emerald-800";
      hoverAddII = "duration-300 hover:bg-emerald-900";
      delete0 = "bg-red-600";
      deleteI = "bg-red-700";
      deleteII = "bg-red-800";
      hoverDelete = "duration-300 hover:bg-red-700";
      hoverDeleteI = "duration-300 hover:bg-red-800";
      hoverDeleteII = "duration-300 hover:bg-red-900";
      details = "bg-green-600";
      detailsI = "bg-green-700";
      detailsII = "bg-green-800";
      hoverDetails = "duration-300 hover:bg-green-700";
      hoverDetailsI = "duration-300 hover:bg-green-800";
      hoverDetailsII = "duration-300 hover:bg-green-900";
      view = "bg-teal-600";
      viewI = "bg-teal-700";
      viewII = "bg-teal-800";
      hoverView = "duration-300 hover:bg-teal-700";
      hoverViewI = "duration-300 hover:bg-teal-800";
      hoverViewII = "duration-300 hover:bg-teal-900";
      break;
    default:
  }
  return {
    card,
    cardI,
    cardII,
    hoverCard,
    hoverCardI,
    hoverCardII,
    background,
    backgroundI,
    backgroundII,
    hoverBackground,
    hoverBackgroundI,
    hoverBackgroundII,
    text,
    textI,
    textII,
    hoverText,
    hoverTextI,
    hoverTextII,
    border,
    borderI,
    borderII,
    hoverBorder,
    hoverBorderI,
    hoverBorderII,
    add,
    addI,
    addII,
    hoverAdd,
    hoverAddI,
    hoverAddII,
    delete0,
    deleteI,
    deleteII,
    hoverDelete,
    hoverDeleteI,
    hoverDeleteII,
    details,
    detailsI,
    detailsII,
    hoverDetails,
    hoverDetailsI,
    hoverDetailsII,
    view,
    viewI,
    viewII,
    hoverView,
    hoverViewI,
    hoverViewII,
  };
};

export default getThemeVariants;
