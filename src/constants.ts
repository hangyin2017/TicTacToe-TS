type GameState = "" | "Draw" | "X Wins!" | "O Wins!";
type CellValue = "" | "X" | "O";

const playerCell: CellValue = "X";
const aiCell: CellValue = "O";

export { GameState, CellValue, playerCell, aiCell };