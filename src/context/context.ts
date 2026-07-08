import { createContext } from 'react';

import type { GameContextType } from '../types/context/GameContextType.type';

export const GameContext = createContext<GameContextType | null>(null);
