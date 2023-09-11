export enum CollectionColors {
  "Dragon's Fury" = "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500",
  "Swordmaster's Resolve" = "bg-gradient-to-r from-gray-400 via-slate-500 to-slate-700",
  "Mystic Portal" = "bg-gradient-to-r from-purple-400 via-indigo-500 to-indigo-700",
  "Adventure Quest" = "bg-gradient-to-r from-green-500 via-teal-500 to-teal-700",
  "Enchanted Blade" = "bg-gradient-to-r from-blue-300 via-cyan-400 to-cyan-600",
  "Elemental Power" = "bg-gradient-to-r from-yellow-500 via-orange-600 to-red-400",
  "Isekai Odyssey" = "bg-gradient-to-r from-indigo-400 via-violet-500 to-violet-700",
  "Warrior's Valor" = "bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-700",
  "Epic Battle" = "bg-gradient-to-r from-red-600 via-orange-700 to-orange-900",
  "Magic Mirage" = "bg-gradient-to-r from-teal-400 via-blue-500 to-blue-700",
  "Legendary Quest" = "bg-gradient-to-r from-green-400 via-lime-500 to-lime-700",
  "Demon Slayer" = "bg-gradient-to-r from-orange-600 via-red-600 to-red-800",
  "Astral Adventure" = "bg-gradient-to-r from-indigo-500 via-blue-600 to-blue-800",
  "Sorcerer's Spark" = "bg-gradient-to-r from-violet-500 via-pink-600 to-pink-800",
  "Knight's Honor" = "bg-gradient-to-r from-gray-500 via-slate-600 to-slate-800",
}

export type CollectionColor = keyof typeof CollectionColors;
