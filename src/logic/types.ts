export type PlayerId = number;
export type Column = PlayerId[];
export type Board = Column[];
export type Point = [number, number];
export type Vector = [number, number];

export type WinEvent = CustomEvent<{ player: PlayerId }>;
